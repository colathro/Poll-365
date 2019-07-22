   
import NanoFlux = require('../bundle/nanoflux')

import {dispatcher} from '../stores/Dispatcher'
import {Comm} from './CommunicationStore'
import {messageStore} from './MessageStore'


export class QFSearchResult {
    resultType: QuickFinderSection
    results: Array<any>
    
    constructor(type: QuickFinderSection, results: Array<any>) {
        this.results = results;
        this.resultType = type;
    }
}

export enum QuickFinderSection {
    DISCUESSION, COUNTRY, OFFICE
}

export interface OfficeModel {
    id: string,
    name: string,
    country: string,
    createdOn: string
}

export interface Country {
	id: string,
	name: string,
	isoCode: string
}

export enum EventType {
	OFFICE_SEARCH_INVOKED, COUNTRY_SEARCH_INVOKED
}

export interface EventData {
    eventType: EventType
    data?: any
}

export class QuickFinderStoreClass {

	private officeSearchResult: QFSearchResult;

    setOfficesList = function (result: QFSearchResult) {
        this.officeSearchResult = result;
        this.notify({eventType: EventType.OFFICE_SEARCH_INVOKED})
    }

    onGetList = function(): Promise<Response> {
        return Comm.get({url: 'submission', reqMethod: 'get'});
    }

    getOfficeSearchResult = function() : QFSearchResult { return this.officeSearchResult; }

    getOfficesList = function() {
        Comm.get({url: 'office/1', reqMethod: 'get'})
           .then(res => {
                if (res.ok) {
                    res.json().then(j => {
                        this.setOfficesList({ results: j, resultType: QuickFinderSection.OFFICE });
                        this.notify({eventType: EventType.OFFICE_SEARCH_INVOKED});
                    });
                }
            });
    }

    getCountrysList= function() {
        Comm.get({url: 'country/1', reqMethod: 'get'})
           .then(res => {
                if (res.ok) {
                    res.json().then(j => {
                        this.setOfficesList({ results: j, resultType: QuickFinderSection.COUNTRY });
                        this.notify({eventType: EventType.COUNTRY_SEARCH_INVOKED});
                    });
                }
            });
    }

    createNewGroup = function(group: OfficeModel) {
	    Comm.get({url: 'group/register', body: group, reqMethod: 'post'})
	        .then(res => {
	            if (res.ok) {
	                res.text().then(j => {
	                    messageStore.onShowSuccess('Group successfully created.');
	                });
	            }
	        })
	        .catch(err => { 
	            messageStore.onShowError('Sorry we couldn\'t create the group you provided. Something went wrong.');
	        })
    }

    notify(args: EventData) {}
    subscribe(subscriber?: any, callback?: any) {}
}


NanoFlux.createStore('quickFinderStore', new QuickFinderStoreClass())
export var quickFinderStore : QuickFinderStoreClass = NanoFlux.getStore('quickFinderStore');

dispatcher.connectTo(quickFinderStore);
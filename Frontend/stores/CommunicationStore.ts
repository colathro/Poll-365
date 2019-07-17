import NanoFlux = require('../bundle/nanoflux')
import 'whatwg-fetch'; 

import {dispatcher} from '../stores/Dispatcher'
import {Promise} from 'es6-promise'
import {messageStore} from './MessageStore'
import {getErrorMsg} from '../models/ErrorCodes'
import {applicationStore} from './ApplicationStore';


export interface CommParams {
    url: string,
    reqMethod: string,
    body?: any,
    ignoreErrors?: boolean
}

export class CommunicationStoreClass {
    
    private isBusy = false;        
    private baseUrl = 'https://localhost:5001/api/'
    
    get = function(params: CommParams): Promise<Response> {        
        
        var url = params.url;
        var body = params.body;
        applicationStore.onSetBusyStatus(true);
        var headers = {} as {[index:string]:string};
        var method = params.reqMethod;
        var request : RequestInit = {
            method: method,            
            headers: headers,           
        };
        if (body) { 
            request.body = JSON.stringify(body);
            request.headers['Content-Type'] = 'application/json'
        }
        var result = fetch(this.baseUrl + url, request)
            .then((res) : Promise<Response> => {
                applicationStore.onSetBusyStatus(false);
                if (!res.ok && !params.ignoreErrors) {
                    var errorMsg = getErrorMsg(res.status);
                    if (errorMsg != null)
                        //data.text().then(msg => messageStore.onShowError(msg));
                        messageStore.onShowError(errorMsg);
                    else
                        messageStore.onShowError('Sorry, something went wrong there.');
                }
                return Promise.resolve(res);
            },
            (err: Error) => {
                applicationStore.onSetBusyStatus(false);
                if (!params.ignoreErrors) {
                    messageStore.onShowWarning('CONNECTION_ERROR');
                }
                return Promise.reject(err);
            });
            
        result.catch((err: Error) => {
            applicationStore.onSetBusyStatus(false);
            console.error(`Error in Comm - [${err.name}]: ${err.message}`);
        });
        return result;
    }
    
    // setBusyStatus = function(status: boolean) {
    //     this.isBusy = true;
    //     this.notify();
    // }
    // getBusyStatus = function(): boolean {
    //     return this.isBusy;
    // }
    
    
    notify(args?: any) {}
    subscribe(subscriber?: any, callback?: any) {}
    
}
    
NanoFlux.createStore('communicationStore', new CommunicationStoreClass());
export var communicationStore : CommunicationStoreClass = NanoFlux.getStore('communicationStore');

dispatcher.connectTo(communicationStore);

export class Comm {
    
    static get(params: CommParams): Promise<Response> {
        return communicationStore.get(params);
    }
}
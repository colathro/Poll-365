import * as React from 'react';

import {quickFinderStore, OfficeModel, EventData, EventType} from '../../stores/QuickFinderStore'
import {NavBar} from '../common/NavBar';

export interface PageProps {
    title: string
}

export class Page extends React.Component<{}, {}> {   
    _subscription = null;

    onValChanged(val: EventData) {
        if(val.eventType == EventType.COUNTRY_SEARCH_INVOKED){
            quickFinderStore.getOfficesList();
            var officeSearchResult = quickFinderStore.getOfficeSearchResult();
        }   
        if(val.eventType == EventType.OFFICE_SEARCH_INVOKED){
            $('#id')[0].innerText = officeSearchResult[0].id
            $('#name')[0].innerText = officeSearchResult[0].name    
        } 
    }
    
    onGetList(e) {
        e.preventDefault();
        window.location.href = '#/';
        quickFinderStore.onGetList();
    }

    componentDidMount() {
        this._subscription = quickFinderStore.subscribe(this, this.onValChanged)
        window.location.href = '#/';
        quickFinderStore.getCountrysList();
    }

   componentWillUnmount() {
        this._subscription.unsubscribe(this, this.onValChanged)
    }
        
    render() {
       return (
            <div>
                <div class="row">
                    <NavBar />
                </div>             
                <div className="vertical-space-4x"></div>
                
                <div class="row">
                <p> this is where things happen </p>
                <a href="#" onClick={this.onGetList}>GetList</a>

                    <div>
             
                            <div class="row">
                                <div class="col-md-2 col-sm-2 text-center">
                                    <i class="fa fa-3x grey-text"></i><br />
                                    <h5> Office Id </h5>
                                    <h5 id="id"></h5>
                                </div>
                                <div class="col-md-2 col-sm-2 text-center">
                                    <i class="fa fa-3x grey-text"></i><br />
                                    <h5> Name </h5>
                                    <h5 id="name"></h5>
                                </div>

                                <div class="col-md-2 col-sm-2 text-center">
                                    <i class="fa fa-3x grey-text"></i><br />
                                    <h5> Created on  </h5>
                                    <h5 id="createdOn"></h5>
                                </div>
                            </div>                                          
                    </div>
                </div>

            </div>
        );
    }
}
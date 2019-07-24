import * as React from 'react';

import {quickFinderStore, OfficeModel, EventData, EventType} from '../../stores/QuickFinderStore'
import {NavBar} from '../common/NavBar';
import {Comm} from '../../stores/CommunicationStore'

export class Discussion extends React.Component<{}, {}> {   
    componentDidMount() {
        let countryDropdown = $("#country");
        Comm.get({url: 'discussion?PageNumber=1&PageSize=5', reqMethod: 'get'})
           .then(res => {
            if (res.ok) {  
                    res.json().then(entry => {

                    });
                }
            });
    }

    render() {
        return (
            <div title="Error">
                <div>
                    <NavBar />
                </div>
                <div className="text-center">
                <br/><br/>
                    <p><i className="fa fa-times-circle-o red-text"></i> sss soon!</p>
   
                    
                </div>
            </div>
        );
    }
}
import * as React from 'react';

import {quickFinderStore, OfficeModel, EventData, EventType} from '../../stores/QuickFinderStore'
import {NavBar} from '../common/NavBar';
import {Comm} from '../../stores/CommunicationStore'

export class Discussion extends React.Component<{}, {}> {   

    onValChanged(val: EventData) {    
    }
    
    componentDidMount() {
        window.location.href = '#/';
        let countryDropdown = $("#country");
        Comm.get({url: 'discussion?PageNumber=1&PageSize=5', reqMethod: 'get'})
           .then(res => {
            if (res.ok) {  
                    res.json().then(entry => {

                    });
                }
            });
    }

   componentWillUnmount() {
    }
        
    render() {
       return (
            <div>
                <div>
                    <NavBar />
                </div>
                <p> discuession page </p>

            </div >
        );
    }
}
import * as React from 'react';

import {quickFinderStore, OfficeModel, EventData, EventType} from '../../stores/QuickFinderStore'
import {NavBar} from '../common/NavBar';
import {Poll} from './Poll';
import {Comm} from '../../stores/CommunicationStore'

export interface PageProps {
    title: string
}

export class Page extends React.Component<{}, {}> {   
    _subscription = null;

    onValChanged(val: EventData) {    
    }

    onSelectCountry(e){
        window.location.href = '#/';
        
        let officeDropdown = $('#office');
        var s = e.target.value
        console.log(s);
        Comm.get({url: `office/country/${s}`, reqMethod: 'get'})
           .then(res => {
            if (res.ok) {  
                    res.json().then(entry => {
                        for (var i = 0; i < entry.length; i++){
                            officeDropdown.append($('<option></option>').attr('value', entry[i].id).text(entry[i].name));
                        }
                    });
                }
            });
    }
    
    componentDidMount() {
        this._subscription = quickFinderStore.subscribe(this, this.onValChanged);
        window.location.href = '#/';
        let countryDropdown = $("#country");
        Comm.get({url: 'country', reqMethod: 'get'})
           .then(res => {
            if (res.ok) {  
                    res.json().then(entry => {
                        for (var i = 0; i < entry.length; i++){
                            countryDropdown.append($('<option></option>').attr('value', entry[i].id).text(entry[i].name));
                        }
                    });
                }
            });
    }

   componentWillUnmount() {
        this._subscription.unsubscribe(this, this.onValChanged);
    }
        
    render() {
       return (
            <div>
                <div>
                    <NavBar>
                    <div>
                        <select id="country" name ="country_name" onChange={this.onSelectCountry.bind(this)}>
                              <option>Choose Country</option>
                        </select>
                    </div>

                    <div>
                        <select id="office" name ="office_name">
                        </select>
                    </div>
                    </NavBar>
                </div>             
                <div>
                    <div>
                        <Poll />
                    </div> 
                </div>
            </div >
        );
    }
}
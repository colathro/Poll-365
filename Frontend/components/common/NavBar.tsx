import * as React from 'react';

import {Link} from 'react-router'
import {quickFinderStore, OfficeModel, EventData, EventType} from '../../stores/QuickFinderStore'
import {Comm} from '../../stores/CommunicationStore'

export class NavBar extends React.Component<{}, {}> {
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

    render() {
        return <nav className="navbar navbar-default navbar-static-top">
            <div className="container-fluid">
                <div className="navbar-header">
                    <button type="button" className="navbar-toggle collapsed" data-toggle="collapse"
                        data-target="#main-navbar" aria-expanded="false">
                        <span className="sr-only">Toggle Navigation</span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                    </button>
                    <Link to="/" className="navbar-brand"><i className="fa fa-plane"></i> Poll 365</Link>
                </div>
                <div className="collapse navbar-collapse" id="main-navbar">
                    <ul className="nav navbar-nav">
                        <li><Link to="/tours">Poll</Link></li>
                        <li><Link to="/groups">Discussion</Link></li>
                    </ul>
                    <div id="nav-right">
                        <ul className="nav navbar-nav navbar-right">
                            <div className="nav-selector">
                                Country: 
                            <select id="country" name ="country_name" onChange={this.onSelectCountry.bind(this)}>
                                <option>Choose Country</option>
                            </select>
                            </div>

                            <div className="nav-selector">
                                Area: 
                                <select id="office" name ="office_name">
                                </select>
                            </div>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    }
}
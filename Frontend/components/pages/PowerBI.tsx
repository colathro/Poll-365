import React = require('react');
import i18next = require('i18next');

import {Page} from './Page'
import {NavBar} from '../common/NavBar';

export class PowerBI extends React.Component<{}, {}> {
    render() {
        return (
            <div title="Error">
                <div>
                    <NavBar />
                </div>
                <div className="text-center">
                <br/><br/>
                    <p><i className="fa fa-times-circle-o red-text"></i> Coming soon!</p>
   
                    
                </div>
            </div>
        );
    }
}
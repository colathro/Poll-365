import React = require('react');
import i18next = require('i18next');

import {Page} from './Page'
import {NavBar} from '../common/NavBar';

export class PowerBI extends React.Component<{}, {}> {
    render() {
        return (
            <div>
                <NavBar />
            </div>
            <div title="Error">
                <div className="text-center">
                <br/><br/>
                    <p><i className="fa fa-times-circle-o red-text"></i> Coming soon!</p>
   
                    
                </div>
            </div>
        );
    }
}
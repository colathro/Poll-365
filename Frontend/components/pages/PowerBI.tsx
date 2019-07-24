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
                <iframe className='PowerBI' src="https://msit.powerbi.com/view?r=eyJrIjoiZWQ5NGFhZGItMGM2OS00MjZkLTk1NWUtNzIzZjYyNzM2MDYwIiwidCI6IjcyZjk4OGJmLTg2ZjEtNDFhZi05MWFiLTJkN2NkMDExZGI0NyIsImMiOjV9" frameborder="0" allowFullScreen="true"></iframe>
   
                    
                </div>
            </div>
        );
    }
}
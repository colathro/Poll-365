import * as React from 'react';

import {quickFinderStore} from '../../stores/QuickFinderStore'

export class Page extends React.Component<{}, {}> {   

    onGetList(e) {
        e.preventDefault();
        window.location.href = '#/';
        quickFinderStore.onGetList();
    }

    render() {
        return (
            <div>
                <div className="row">
                <p> this is where things happen </p>
                <a href="#" onClick={this.onGetList}>GetList</a>
               
                </div>

            </div>
        );
    }
    
}
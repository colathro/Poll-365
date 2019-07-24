// import * as $ from 'jquery';
import NanoFlux = require('./bundle/nanoflux');
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import * as Bootstrap from 'bootstrap';
import { Router, Route, Link, IndexRoute, hashHistory, browserHistory } from 'react-router';

import { Welcome } from './components/pages/Welcome';
import { Discussion } from './components/pages/Discussion';
import { PowerBI } from './components/pages/PowerBI';

export class App extends React.Component<{}, {}>{

    render() {
        return (
            <Router history={hashHistory}>
            	<Route path="/" component={Welcome}/>
                <Route path="/poll" component={Welcome}/>
                <Route path="/chat" component={Discussion}/>
                <Route path="/powerbi" component={PowerBI}/>
            </Router>
        );
    }
};

window['ReactDOM'] = ReactDOM;
window['React'] = React;
window['App'] = App;
window['NanoFlux'] = NanoFlux;
import * as React from 'react';

import {Link} from 'react-router'

export class NavBar extends React.Component<{}, {}> {
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
                        <li><a href="#/poll">Poll</a></li>
                        <li><a href="#/discussion">Discussion</a></li>
                        <li><a href="#/powerbi">Power BI</a></li>
                    </ul>
                    <div id="nav-right">
                        <ul className="nav navbar-nav navbar-right">
                            <li><Link to="/login">Country</Link></li>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    }
}
import * as React from 'react';


export class NavBar extends React.Component<{}, {}> {
    
    render() {

        return <nav class="navbar navbar-default navbar-fixed-top">
            <div class="container-fluid">
                <div class="navbar-header">
                    <button type="button" class="navbar-toggle collapsed" data-toggle="collapse"
                        data-target="#main-navbar" aria-expanded="false">
                        <span class="sr-only">Toggle Navigation</span>
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                    </button>
                    <div class="navbar-brand">
                        <span style={{fontWeight: 'bold'}}>P
                            <span class="label label-default"
                                style={{backgroundColor: '#DDD', fontSize: 'large', paddingLeft: 2, paddingRight: 2, paddingBottom: 2}}>
                            <span class="green-text">E</span>
                            <span class="red-text">E</span>
                            <span class="blue-text">P</span>
                            </span>
                        </span>
                        <span style={{marginLeft: 10, color: '#999'}} class="x-small-text">or whatever the fuck this called</span>
                    </div>
                </div>
                <div class="collapse navbar-collapse" id="main-navbar">
                    <ul class="nav navbar-nav">                        
                        <form class="navbar-form navbar-right">
                        <i class="cyan-text lang-choice horizontal-space"></i> <span className="visting-country">Visiting </span><i className="horizontal-space"></i>  
                        <ul style={{marginRight: 5}} className="visting-country nav nav-tabs" >                            
                            <li> <a class="nav-link" data-toggle="tab" value="Discuession" > Discuession</a>  </li>
                            <li> <a class="nav-link" data-toggle="tab" value="Poll" > Poll</a>  </li>
                            <li> <a class="nav-link" data-toggle="tab" value="Power BI" > Power Bi</a>  </li>
                        </ul>
                    </form>
                    </ul>
                </div> 
            </div>
        </nav>
    }
}
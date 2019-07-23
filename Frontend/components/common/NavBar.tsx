import * as React from 'react';


export class NavBar extends React.Component<{}, {}> {
    
    render() {

        return (
            <div>
                <ul>
                 <li class="active"><a href="#">Home</a></li>
                 <li><a href="#">Menu 1</a></li>
                 <li><a href="#">Menu 2</a></li>
                 <li><a href="#">Menu 3</a></li>
                 </ul>
            </div>
        );
    }
}
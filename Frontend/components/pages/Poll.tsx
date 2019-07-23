import * as React from 'react';

import {quickFinderStore, OfficeModel, EventData, EventType} from '../../stores/QuickFinderStore'
import {Comm} from '../../stores/CommunicationStore'

export interface PageProps {
    title: string
}

export class Poll extends React.Component<{}, {}> {   
    _subscription = null;

    onValChanged(val: EventData) {     
    }

    onSelectCountry(e){
    }
    
    componentDidMount() {
        let questions = $("#questions");
        Comm.get({url: 'question', reqMethod: 'get'})
           .then(res => {
                if (res.ok) {
                    res.json().then(entry => {
                        for (var i = 0; i < entry.length; i++){
                            questions.append($('<div id ="question"></div>').attr('value', entry[i].id).text(entry[i].text));
                        }
                    });
                }
            });
    }

    onSubmit(e){

    }

   componentWillUnmount() {
        this._subscription.unsubscribe(this, this.onValChanged);
    }
        
    render() {
       return (          
            <form>
                    <div id = "questions">

                    </div>

                    <div>
                        <input type="submit" value="Submit" onClick={this.onSubmit.bind(this)} />
                    </div>
            </form>                    
        );
    }
}
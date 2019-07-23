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
        Comm.get({url: 'question', reqMethod: 'get'})
           .then(res => {
                if (res.ok) {
                    res.json().then(j => {
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
                   <label for="question1" class="control-label col-sm-4">Question 1</label>
                    <input type="text" name="question1" /><br />

                    <label for="question1" class="control-label col-sm-4">Question 2</label>
                    <input type="text" name="question1" />

                    <div>
                        <input type="submit" value="Submit" onClick={this.onSubmit.bind(this)} />
                    </div>
            </form>                    
        );
    }
}
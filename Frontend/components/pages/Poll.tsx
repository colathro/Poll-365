import * as React from 'react';
import {Answer} from '../common/Answer';

import {Link} from 'react-router'
import {quickFinderStore, OfficeModel, EventData, EventType} from '../../stores/QuickFinderStore'
import {Comm} from '../../stores/CommunicationStore'

export interface PageProps {
    title: string
}

export class Poll extends React.Component<{}, {}> {   
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
                            questions.append($('<div id ="question" ></div>').attr('value', entry[i].id).text(entry[i].text));
                            questions.append($('<input class ="answer" type="range" name = "answerinput" oninput="answeroutput.value = answerinput.value" min="0" max="10" step="1.00" style="padding: 5px 50px 0 50px; width: 50%; float:left" ></input>')
                            .attr('questionid', entry[i].id));
                            questions.append($('<output name="answeroutput" style="padding-left:20px">5</output>'));

                            questions.append($('</br>'));
                        }
                    });
                }
            });
    }

    onSubmit(e){
    }

    render() {
       return (          
            <form>
                    <div id = "questions">
                    </div>
                    <input type="submit" value="Submit" onClick={this.onSubmit.bind(this)} />
            </form>                    
        );
    }
}
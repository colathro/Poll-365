import * as React from 'react';
import {Answer} from '../common/Answer';

import {Link} from 'react-router'
import {quickFinderStore, OfficeModel, EventData, EventType} from '../../stores/QuickFinderStore'
import {Comm} from '../../stores/CommunicationStore'
import {messageStore} from '../../stores/MessageStore'
import {Noty} from 'noty'


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
                            questions.append($('<br />'));
                            questions.append($('<br />'));
                        }
                    });
                }
            });
    }

    onSubmit(e){
        e.preventDefault();
        alert("Submitted successfully");
    }

    render() {
       return (  

            <div>
               <div className="col-md-2"></div>

                <div className="col-md-8 col-sm-12">        
                    <div className="panel panel-default">
                        <div className="panel-heading">Poll form</div>
                        <div className="panel-body">            
                            <form method="post" className="form-horizontal" id="form-registration">  

                                <div id = "questions">
                                </div>
                                <div>
                                    <textarea placeholder="whatever you want to say" name="reply_name" id="textbox_1" rows="3" className="form-control input-sm"></textarea>
                                </div>
                                <br/>
                                <input type="button" value="Submit" className="btn btn-success" onClick={this.onSubmit.bind(this)} />
                            </form>  
                        </div>
                    </div>  
                </div> 

                <div className="col-md-2"></div>    
            </div>           
        );
    }
}
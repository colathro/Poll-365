import * as React from 'react';

import {quickFinderStore, OfficeModel, EventData, EventType} from '../../stores/QuickFinderStore'
import {NavBar} from '../common/NavBar';
import {Comm} from '../../stores/CommunicationStore'

export class Discussion extends React.Component<{}, {}> {  


    onSubmitReply(){

    }

    GetReply(id){
        Comm.get({url: 'reply/' + id, reqMethod: 'get'})
            .then(res => {
                if (res.ok) {
                    res.json().then(entry => {
                        for (var i = 0; i < entry.length; i++){
                            debugger;
                            $('#listgroup_' + id + ' > div div #listgroup_' + id + '_reply_' + i).text(entry[i].text);
                           // this.GetReply(entry.id);
                        }
                    });
                }
            })   
            .catch(err => messageStore.onShowError('Sorry we couldn\'t get your cars list. Something went wrong.'));
    }

    componentDidMount() {
        Comm.get({url: 'discussion?PageNumber=1&PageSize=5', reqMethod: 'get'})
            .then(res => {
                if (res.ok) {
                    res.json().then(entry => {
                        for (var i = 0; i < entry.length; i++){
                            $('#mainThread_'+i).text(entry[i].text);
                            this.GetReply(entry[i].id);
                        }
                    });
                }
            })   
            .catch(err => messageStore.onShowError('Sorry we couldn\'t get your cars list. Something went wrong.'));
    }

    onSubmitReply(e){
        e.preventDefault();
        alert("submitted successfully!");
    }

    render() {
        return (
            <div title="Discussion">
                <div>
                    <NavBar />
                </div>
                <br/>
                <br/>
                
                <div className="col-md-2"></div>

                <div className="col-md-8 col-sm-12">
                    <div className="list-group" id="listgroup_0">            
                        <div className="panel panel-default">
                            <div className="panel-body">
                                <div className="row">
                                    <div className="col-md-12 col-sm-12 grey-text">
                                        <span id = "mainThread_0"><i className="fa fa-times-circle-o red-text"></i> This is test data</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-md-1 col-sm-1 text-center">
                                <i ></i>
                            </div>
                            <div className="col-md-10 col-sm-10 grey-text">
                                <span id = "listgroup_0_reply_0"><i className="fa fa-times-circle-o red-text"></i> This is test data</span><br/>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-md-1 col-sm-1 text-center">
                                <i ></i>
                            </div>
                            <div className="col-md-10 col-sm-10 grey-text">
                                <span id = "listgroup_0_reply_1"><i className="fa fa-times-circle-o red-text"></i> This is test data</span><br/>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-md-1 col-sm-1 text-center">
                                <i ></i>
                            </div>
                            <div className="col-md-10 col-sm-10 grey-text">
                                <span id = "listgroup_0_reply_2"><i className="fa fa-times-circle-o red-text"></i> This is test data</span><br/>
                            </div>
                        </div>

                       <div className="row">
                            <div className="col-md-1 col-sm-1 text-center">
                                <i ></i>
                            </div>
                            <div className="col-md-10 col-sm-10 grey-text">
                                <span id = "listgroup_0_reply_3"><i className="fa fa-times-circle-o red-text"></i> This is test data</span><br/>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-md-1 col-sm-1 text-center">
                                <i ></i>
                            </div>
                            <div className="col-md-10 col-sm-10 grey-text">
                                <div>
                                    <textarea placeholder="reply" name="reply_1_name" id="listgroup_0_reply_1" rows="3" className="form-control input-sm"></textarea>
                                </div><br/>
                                <div className="pull-right">
                                    <input type="button" value="Submit" className="btn btn-success" onClick={this.onSubmitReply.bind(this)}  />
                                </div>  
                            </div>
                        </div>  
                    </div>

                   <div className="list-group" id="listgroup_1">
                        <div className="panel panel-default">
                            <div className="panel-body">
                                <div className="row">
                                    <div className="col-md-12 col-sm-12 grey-text">
                                        <span id = "mainThread_1"><i className="fa fa-times-circle-o red-text"></i> This is test data</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-md-1 col-sm-1 text-center">
                                <i ></i>
                            </div>
                            <div className="col-md-10 col-sm-10 grey-text">
                                <span id = "listgroup_1_reply_0"><i className="fa fa-times-circle-o red-text"></i> This is test data</span><br/>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-md-1 col-sm-1 text-center">
                                <i ></i>
                            </div>
                            <div className="col-md-10 col-sm-10 grey-text">
                                <span id = "listgroup_1_reply_1"><i className="fa fa-times-circle-o red-text"></i> This is test data</span><br/>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-md-1 col-sm-1 text-center">
                                <i ></i>
                            </div>
                            <div className="col-md-10 col-sm-10 grey-text">
                                <span id = "listgroup_1_reply_2"><i className="fa fa-times-circle-o red-text"></i> This is test data</span><br/>
                            </div>
                        </div>

                       <div className="row">
                            <div className="col-md-1 col-sm-1 text-center">
                                <i ></i>
                            </div>
                            <div className="col-md-10 col-sm-10 grey-text">
                                <span id = "listgroup_1_reply_3"><i className="fa fa-times-circle-o red-text"></i> This is test data</span><br/>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-md-1 col-sm-1 text-center">
                                <i ></i>
                            </div>
                            <div className="col-md-10 col-sm-10 grey-text">
                                <div>
                                    <textarea placeholder="reply" name="reply_1_name" id="reply_1" rows="3" className="form-control input-sm"></textarea>
                                </div><br/>
                                <div className="pull-right">
                                    <input type="button" value="Submit" className="btn btn-success" onClick={this.onSubmitReply.bind(this)}  />
                                </div>  
                            </div>
                        </div>  

                    </div>

                   <div className="list-group" id="listgroup_2">            
                        <div className="panel panel-default">
                            <div className="panel-body">
                                <div className="row">
                                    <div className="col-md-12 col-sm-12 grey-text">
                                        <span id = "mainThread_2"><i className="fa fa-times-circle-o red-text"></i> This is test data</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-md-1 col-sm-1 text-center">
                                <i ></i>
                            </div>
                            <div className="col-md-10 col-sm-10 grey-text">
                                <span id = "listgroup_2_reply_0"><i className="fa fa-times-circle-o red-text"></i> This is test data</span><br/>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-md-1 col-sm-1 text-center">
                                <i ></i>
                            </div>
                            <div className="col-md-10 col-sm-10 grey-text">
                                <span id = "listgroup_2_reply_1"><i className="fa fa-times-circle-o red-text"></i> This is test data</span><br/>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-md-1 col-sm-1 text-center">
                                <i ></i>
                            </div>
                            <div className="col-md-10 col-sm-10 grey-text">
                                <span id = "listgroup_2_reply_2"><i className="fa fa-times-circle-o red-text"></i> This is test data</span><br/>
                            </div>
                        </div>

                       <div className="row">
                            <div className="col-md-1 col-sm-1 text-center">
                                <i ></i>
                            </div>
                            <div className="col-md-10 col-sm-10 grey-text">
                                <span id = "listgroup_2_reply_3"><i className="fa fa-times-circle-o red-text"></i> This is test data</span><br/>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-md-1 col-sm-1 text-center">
                                <i ></i>
                            </div>
                            <div className="col-md-10 col-sm-10 grey-text">
                                <div>
                                    <textarea placeholder="reply" name="reply_name" id="submit_2" rows="3" className="form-control input-sm"></textarea>
                                </div><br/>
                                <div className="pull-right">
                                    <input type="button" value="Submit" className="btn btn-success" onClick={this.onSubmitReply.bind(this)}  />
                                </div>  
                            </div>
                        </div>  

                    </div>

                   <div className="list-group" id="listgroup_3"> 
                        <div className="panel panel-default">
                            <div className="panel-body">
                                <div className="row">
                                    <div className="col-md-12 col-sm-12 grey-text">
                                        <span id = "mainThread_3"><i className="fa fa-times-circle-o red-text"></i> This is test data</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-1 col-sm-1 text-center">
                                <i ></i>
                            </div>
                            <div className="col-md-10 col-sm-10 grey-text">
                                <span id = "listgroup_3_reply_0"><i className="fa fa-times-circle-o red-text"></i> This is test data</span><br/>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-md-1 col-sm-1 text-center">
                                <i ></i>
                            </div>
                            <div className="col-md-10 col-sm-10 grey-text">
                                <span id = "listgroup_3_reply_1"><i className="fa fa-times-circle-o red-text"></i> This is test data</span><br/>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-md-1 col-sm-1 text-center">
                                <i ></i>
                            </div>
                            <div className="col-md-10 col-sm-10 grey-text">
                                <span id = "listgroup_3_reply_2"><i className="fa fa-times-circle-o red-text"></i> This is test data</span><br/>
                            </div>
                        </div>

                       <div className="row">
                            <div className="col-md-1 col-sm-1 text-center">
                                <i ></i>
                            </div>
                            <div className="col-md-10 col-sm-10 grey-text">
                                <span id = "listgroup_3_reply_3"><i className="fa fa-times-circle-o red-text"></i> This is test data</span><br/>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-md-1 col-sm-1 text-center">
                                <i ></i>
                            </div>
                            <div className="col-md-10 col-sm-10 grey-text">
                                <div>
                                    <textarea placeholder="reply" name="reply_name" id="submit_2" rows="3" className="form-control input-sm"></textarea>
                                </div><br/>
                                <div className="pull-right">
                                    <input type="button" value="Submit" className="btn btn-success" onClick={this.onSubmitReply.bind(this)}  />
                                </div>  
                            </div>
                        </div>  

                    </div>
                </div>

                <div className="col-md-2"></div>
            </div>
        );
    }
}
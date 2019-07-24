import * as React from 'react';

import {Link} from 'react-router'
import {quickFinderStore, OfficeModel, EventData, EventType} from '../../stores/QuickFinderStore'
import {Comm} from '../../stores/CommunicationStore'

export class Footer extends React.Component<{}, {}> {
        componentDidMount() {
            var docHeight = $(window).height();
            var footerHeight = $('#footerStyle').height();
            var footerTop = $('#footerStyle').position().top + footerHeight;        
            if (footerTop < docHeight) {
                $('#footerStyle').css('margin-top', (docHeight - footerTop) + 'px');
            }
        }
        
        render() {
           
            return (
                <nav className="navbar navbar-default footer-style" id="footerStyle">
                    <div className='footer-name'> Poll - 365 </div> <div className='footer-hackathon'> Hackathon 2019 </div>
                </nav>
            );
        }
    }
    
    
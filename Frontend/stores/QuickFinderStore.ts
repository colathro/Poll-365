   
import NanoFlux = require('../bundle/nanoflux')

import {dispatcher} from '../stores/Dispatcher'
import {Comm} from './CommunicationStore'
import {messageStore} from './MessageStore'

export class QuickFinderStoreClass {

    onGetList = function(): Promise<Response> {
        return Comm.get({url: 'submission', reqMethod: 'get'});
    }
}


NanoFlux.createStore('quickFinderStore', new QuickFinderStoreClass())
export var quickFinderStore : QuickFinderStoreClass = NanoFlux.getStore('quickFinderStore');

dispatcher.connectTo(quickFinderStore);
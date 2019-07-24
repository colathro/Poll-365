declare class NanoFlux {
        createStore(name: string, store: any);
        createActions(name: string, dispatcher: any, store: any);
        createDispatcher(name: string);
        getStore(name: string);
        getActions(name: string);
    }
    /*export class Store {
        notify(args?: any)
    }*/
    
    export = new NanoFlux();
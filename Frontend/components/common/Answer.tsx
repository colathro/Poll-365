
import * as React from 'react';

export class Answer extends React.Component<{}, {}> {
    
    render() {
        return (<div class="btn-group" role="group" aria-label="Basic example">
                                <button type="button" class="btn btn-secondary" value="1">1</button>
                                <button type="button" class="btn btn-secondary" value="2">2</button>
                                <button type="button" class="btn btn-secondary" value="3">3</button>
                                <button type="button" class="btn btn-secondary" value = "4">4</button>
                                <button type="button" class="btn btn-secondary" value = "5">5</button>
                                <button type="button" class="btn btn-secondary" value = "6">6</button>
                                <button type="button" class="btn btn-secondary" value = "7">7</button>
                                <button type="button" class="btn btn-secondary" value = "8">8</button>
                                <button type="button" class="btn btn-secondary" value = "9">9</button>
                                <button type="button" class="btn btn-secondary" value = "10">10</button>
                            </div>  );
    }
}

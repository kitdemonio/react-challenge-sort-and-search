import React, {Component} from 'react';
import SearchBar from './components/searchbar';


export default class App extends Component {
    constructor(props) {
        super(props);
    }


    render() {
        return (
            <div className="container app">
                <SearchBar />
            </div>
        );
    }
}

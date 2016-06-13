import React, {Component} from 'react';
import SearchBar from './components/searchbar';
import Toolbar from './components/toolbar/toolbar';


export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: []
        };
    }

    componentWillMount() {
        this.getData();
    }

    getData() {
        $.ajax({
            url: 'data.json',
            dataType: 'json',
            type: 'GET',
            success: function(data) {
                this.setState({data: data});
            }.bind(this),
            error: function(xhr, status, err) {
                console.error('data.json', status, err.toString());
            }.bind(this)
        });
    }
    
    render() {
        return (
            <div className="app">
                <div className="container-fluid search-bar">
                    <SearchBar />
                </div>
                <div className="container-fluid toolbar">
                    <Toolbar data={this.state.data}/>
                </div>
            </div>
        );
    }
}

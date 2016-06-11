import React, {Component} from 'react';
import SearchBar from './components/searchbar';
import Toolbar from './components/toolbar/toolbar';


export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: []
        };
        this.getData()
    }
    

    getData() {
        $.ajax({
            url: 'data.json',
            dataType: 'json',
            type: 'GET',
            success: function(data) {
                this.setState({data: data},function () {
                    this.showStateData()
                });
            }.bind(this),
            error: function(xhr, status, err) {
                console.error('data.json', status, err.toString());
            }.bind(this)
        });
    }

    showStateData() {
        console.log(this.state.data);
    }

    render() {
        return (
            <div className="container app">
                <SearchBar />
                <Toolbar data={this.state.data}/>
            </div>
        );
    }
}

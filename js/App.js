import React, {Component} from 'react';
import SearchBar from './components/searchbar';
import Toolbar from './components/toolbar/toolbar';


export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            searchText: '',
            immutableData: []
        };
        this.handleSearchText = this.handleSearchText.bind(this);
    }

    handleSearchText(e) {
        let data = [];
        let unsuitableData = [];
        const searchText = e.target.value.toLowerCase();
        this.state.immutableData.filter((value) => {
            if (value.name.toLowerCase().includes(searchText)) {
                data.push(value);
                this.setState({
                    searchText,
                    data
                });
            }
            if (value.name.toLowerCase().includes(searchText) === false) {
                unsuitableData.push(value);
            }
            if (unsuitableData.length === 20) {
                this.setState({
                    data: []
                })
            }
        });
    }

    componentWillMount() {
        this.getData();
    }

    getData() {
        $.ajax({
            url: 'data.json',
            dataType: 'json',
            type: 'GET',
            success: function (data) {
                this.setState({data: data, immutableData: data});
            }.bind(this),
            error: function (xhr, status, err) {
                console.error('data.json', status, err.toString());
            }.bind(this)
        });
    }

    render() {
        return (
            <div className="app">
                <div className="container-fluid search-bar">
                    <SearchBar handleSearchText={this.handleSearchText}/>
                </div>
                <div className="container-fluid toolbar">
                    <Toolbar data={this.state.data}/>
                </div>
            </div>
        );
    }
}

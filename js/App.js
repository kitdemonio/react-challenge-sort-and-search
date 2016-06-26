import React, {Component} from 'react';
import SearchBar from './components/searchbar';
import Toolbar from './components/toolbar/toolbar';


export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            searchText: '', // Text from searchbar component
            immutableData: [], // Only for handleSearchText
            clicked: false, // For button handler
        };
        this.handleSearchText = this.handleSearchText.bind(this);
        this.handleButtonClick = this.handleButtonClick.bind(this);
    }

    sortDataByName() {
        let data = this.state.data;
        let sortedData;
        if (this.state.clicked === true) {
            sortedData = data.sort((a, b) => {
                if (a.name > b.name) {
                    return 1;
                } else if (a.name < b.name) {
                    return -1;
                }
                return 0;
            });
            this.setState({
                data: sortedData
            })
        } else {
            sortedData = data.sort((a, b) => {
                if (a.name > b.name) {
                    return -1;
                } else if (a.name < b.name) {
                    return 1;
                }
                return 0;
            });
            this.setState({
                data: sortedData
            })
        }
    }

    sortDataByAge() {
        let data = this.state.data;
        let sortedData;
        if (this.state.clicked === true) {
            sortedData = data.sort((a, b) => {
                return a.age - b.age;
            });
            this.setState({
                data: sortedData
            })
        } else {
            sortedData = data.sort((a, b) => {
                return b.age - a.age;
            });
            this.setState({
                data: sortedData
            })
        }

    }

    handleButtonClick(e) {
        this.setState({
            clicked: !this.state.clicked
        });
        if (e.target.innerHTML.toLowerCase() === "sort by name") {
            this.sortDataByName();
        } else if (e.target.innerHTML.toLowerCase() === "sort by age") {
            this.sortDataByAge();
        }
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
                    <Toolbar data={this.state.data} handleClick={this.handleButtonClick}/>
                </div>
            </div>
        );
    }
}

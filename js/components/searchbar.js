import React from 'react';

export default class SearchBar extends React.Component {
    constructor(props) {
        super(props);
    }



    render() {
        return (
            <input className="form-control" placeholder="Search people..." onChange={this.props.handleSearchText}/>
        )
    }

}

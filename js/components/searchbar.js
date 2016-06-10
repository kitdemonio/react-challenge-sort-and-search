import React from 'react';

export default class SearchBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            inputText: '',
        }
    }

    render() {
        return (
            <input className="text-input" placeholder="Search in here"/>
        )
    }

}

SearchBar.propTypes = {
    inputText: React.PropTypes.string,
};
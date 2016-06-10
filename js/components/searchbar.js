import React from 'react';

export default class SearchBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            inputText: '',
        }
        this.updateText = this.updateText.bind(this)
    }

    updateText(e) {
        this.setState ({
            inputText: e.target.value
        });
        // console.log(this.state.inputText);
    }

    render() {
        return (
            <input className="form-control" placeholder="Search in here..." onChange={this.updateText}/>
        )
    }

}

SearchBar.propTypes = {
    inputText: React.PropTypes.string,
};
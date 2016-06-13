import React from 'react';
import UserData from './userdata/userdata';

export default class ToolBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: []
        };
    }

    componentWillReceiveProps(nextProps) {
        this.setState({
            data: nextProps.data
        })
    }

    render() {
        return (
            <div className="row">
                <div className="col-xs-12 pull-left">
                    <button className="btn btn-default"><i className="icon fa fa-sort-alpha-asc"></i>Sort by name</button>
                    <button className="btn btn-default"><i className="icon fa fa-sort-numeric-desc"></i>Sort by age</button>
                </div>
                <div className="col-xs-12">
                    <UserData data={this.state.data}/>
                </div>
            </div>
        )
    }
}

ToolBar.propTypes = {
    data: React.PropTypes.array.isRequired
};
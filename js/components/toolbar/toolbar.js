import React from 'react';
import UserData from './userdata/userdata';

export default class ToolBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: this.props.data
        };
    }

    render() {
        return (
            <div>
                {this.props.data.map(function (value) { // Only for test
                    return (
                        <p key={value.id}>{value.name}</p>
                    )
                })}
                <UserData data={this.state.data}/>
            </div>
        )
    }
}
import React from 'react';
import UserData from './userdata/userdata';

export default class ToolBar extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <UserData />
            </div>
        )
    }
}
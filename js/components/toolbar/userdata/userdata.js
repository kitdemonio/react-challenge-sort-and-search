import React from 'react';
import UserList from './userlist/userlist';
import ActiveUser from './activeuser/activeuser';


export default class UserData extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <ActiveUser />
                <UserList />
            </div>
        )
    }
}
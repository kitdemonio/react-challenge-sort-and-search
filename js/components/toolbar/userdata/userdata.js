import React from 'react';
import UserList from './userlist/userlist';
import ActiveUser from './activeuser/activeuser';


export default class UserData extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="row user-data">
                <div className="col-xs-4 col-md-2">
                    <ActiveUser />
                </div>
                <div className="col-xs-8 col-md-10">
                    <UserList />
                </div>
            </div>
        )
    }
}
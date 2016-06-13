import React from 'react';
import UserList from './userlist/userlist';
import ActiveUser from './activeuser/activeuser';


export default class UserData extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: this.props.data
        }
    }

    render() {
        return (
            <div className="row user-data">
                <div className="col-xs-4 col-md-2">
                    <ActiveUser data={this.props.data}/>
                </div>
                <div className="col-xs-8 col-md-10">
                    <UserList data={this.props.data}/>
                </div>
            </div>
        )
    }
}
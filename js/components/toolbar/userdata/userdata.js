import React from 'react';
import UserList from './userlist/userlist';
import ActiveUser from './activeuser/activeuser';


export default class UserData extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: this.props.data,
            activeUser: {}
        };
        this.getActiveUser = this.getActiveUser.bind(this);
    }

    componentWillReceiveProps(nextProps) {
        this.setState({
            activeUser: nextProps.data[0]
        })
    }


    getActiveUser(user) {
        this.setState({
            activeUser: user
        });
    }

    render() {
        return (
            <div className="row user-data">
                <div className="col-xs-4 col-md-2">
                    <ActiveUser data={this.state.activeUser}/>
                </div>
                <div className="col-xs-8 col-md-10">
                    <UserList data={this.props.data} activeUser={this.getActiveUser}/>
                </div>
            </div>
        )
    }
}
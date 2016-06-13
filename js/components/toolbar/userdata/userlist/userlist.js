import React from 'react';

export default class UserList extends React.Component { //TODO: Make onClick handler for ActiveUser component
    constructor(props) {
        super(props);
    }


    render() {
        const userListData = this.props.data.map(function (value) {
            return (
                <tr key={value.id}>
                    <td>
                        <img src={"../../images/" + value.image + '.svg'} alt="user-img"/>
                    </td>
                    <td>
                        {value.name}
                    </td>
                    <td>
                        {value.age}
                    </td>
                    <td>
                        {value.phone}
                    </td>
                </tr>
            )
        });
        return (
            <div className="user-list">
                <table className="table table-striped">
                    <thead>
                    <tr>
                        <td>Image</td>
                        <td>Name</td>
                        <td>Age</td>
                        <td>Phone</td>
                    </tr>
                    </thead>
                    <tbody>
                        {userListData}
                    </tbody>
                </table>
            </div>
        )
    }
}
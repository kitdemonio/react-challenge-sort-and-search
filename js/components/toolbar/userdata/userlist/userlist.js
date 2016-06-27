import React from 'react';

export default class UserList extends React.Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }


    handleClick(e) {
        let id = +e.target.parentNode.dataset.id;
        let data = this.props.data;
        data.filter.bind(null, id);
        data.filter((value) => {
            if (value.id === id) {
                this.props.activeUser(value)
            }
        });
    }


    render() {
        const userListData = this.props.data.map((value) => {
            if (this.props.data.length === 0) {
                return (
                    <h1> Nothing found </h1>
                )
            } else {
                return (
                    <tr key={value.id} data-id={value.id} onClick={this.handleClick}>
                        <td>
                            <img src={"images/" + value.image + '.svg'} alt="user-img"/>
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
            }
        });
        return (
            <div className="user-list">
                <table className="table table-striped">
                    <thead>
                    <tr >
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

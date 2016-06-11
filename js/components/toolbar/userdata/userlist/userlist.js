import React from 'react';

export default class UserList extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
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
                        <tr>
                            <td>
                                <img src="../../images/cat.svg" alt="user-img"/>
                            </td>
                            <td>
                                Adelaide Jacobs
                            </td>
                            <td>
                                33
                            </td>
                            <td>
                                8 (609) 383-7022
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <img src="../../images/cat.svg" alt="user-img"/>
                            </td>
                            <td>
                                Adelaide Jacobs
                            </td>
                            <td>
                                33
                            </td>
                            <td>
                                8 (609) 383-7022
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        )
    }
}
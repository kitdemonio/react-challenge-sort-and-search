import React from 'react';

export default class User extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const user = this.props.data.map((value) => {
            return (
                <tr key={value.id} >
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
            <tbody>
                {user}
            </tbody>
        )
    }

}
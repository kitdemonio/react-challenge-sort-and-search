import React from 'react';

export default class ActiveUser extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            activeUser: {}
        }
    }

    componentWillReceiveProps(nextProps) {
        this.setState({
            activeUser: nextProps.data
        })
    }


    render() {
        if (this.state.activeUser === undefined) {
            return (
                <h1> Nothing found </h1>
            )
        } else {
            return (
                <div className="active-user">
                    <img src={"../../images/" + this.state.activeUser.image +".svg"} alt="user-img"/>
                    <h3 className="text-center">{this.state.activeUser.name}</h3>
                    <table className="table">
                        <tbody>
                        <tr>
                            <td>Age:</td>
                            <td>{this.state.activeUser.age}</td>
                        </tr>
                        <tr>
                            <td>Favorite animal:</td>
                            <td>{this.state.activeUser.image}</td>
                        </tr>
                        <tr>
                            <td>Phone</td>
                            <td>{this.state.activeUser.phone}</td>
                        </tr>
                        </tbody>
                    </table>
                    <p className="text-center"><strong>Favourite Phrase:</strong>
                        <br />
                        <span>{this.state.activeUser.phrase}</span>
                    </p>
                </div>
            )
        }
    }
}
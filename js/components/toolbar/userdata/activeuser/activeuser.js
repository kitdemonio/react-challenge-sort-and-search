import React from 'react';

export default class ActiveUser extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="active-user">
                <img src="../../images/dog.svg" alt="user-img"/>
                <h3 className="text-center">Ada Bowers</h3>
                <table className="table">
                    <tbody>
                        <tr>
                            <td>Age:</td>
                            <td>28</td>
                        </tr>
                        <tr>
                            <td>Favorite animal:</td>
                            <td>Raccoon</td>
                        </tr>
                        <tr>
                            <td>Phone</td>
                            <td>8 (882) 413-7711</td>
                        </tr>
                    </tbody>
                </table>
                <p className="text-center"><strong>Favourite Phrase:</strong>
                    <br />
                    <span>Uzmavov jatvanci kipvaf avhazze ju wi tigekaw zoci ra ihjaro iw ihzu nefnarib gi hiuhohe.</span>
                </p>
            </div>
        )
    }
}
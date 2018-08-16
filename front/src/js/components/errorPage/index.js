import React, {Component} from 'react';
import './errorPageStyle.scss';


class ErrorPage extends Component {

    render() {

        return (
            <div className="errorPage">
                <div className="errorPage__info">
                    <h1>500</h1>
                    <h4> Internal Server Error </h4>
                    <h5> Sorry, something went wrong :( </h5>
                </div>
                <img src="img/errorImg.png" alt="error"/>
            </div>
        )
    }
}
export default ErrorPage
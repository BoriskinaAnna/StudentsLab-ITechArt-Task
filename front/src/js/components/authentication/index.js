import React, {Component} from 'react';
import './authenticationStyle.scss';
import { translate } from 'react-i18next';
import Modal from 'react-modal';
import UserService from "../userService";
import {Redirect, withRouter} from "react-router-dom";


Modal.setAppElement('#content');

class Authentication extends Component {

    constructor(){
        super();
        this.state = {
            emailValue: '',
            passwordValue: '',
            isRedirect: false
        }
    }

    sendToAuthentication = () =>{
        const userService = new UserService;
        const headers = new Headers();
        headers.append('Content-Type', 'application/json');
        const options = {
            method: 'POST',
            body: JSON.stringify({
                email:this.state.emailValue,
                password: this.state.passwordValue
            }),
            headers: headers
        };

        fetch('/api/account/login', options)
            .then((response) =>
                {
                    if (response.status !== 200) {
                        console.log('Looks like there was a problem. Status Code: ' +
                           response.status);
                        return;
                    }
                    response.json().then((data) =>
                        {
                            userService.initializeNewUser(data.email, data.firstName, data.lastName, data.id, data.role);
                            console.log(UserService.currentUser);

                        })
                    .then(() => {
                        this.setState({
                            isRedirect:  true
                        })
                    })
                }
            )
            .catch((err) =>
                {
                    console.log('Fetch Error :-S', err);
                });
    };

    updateLoginValue = (evt) =>{
        this.setState({
            emailValue: evt.target.value
        });
    };

    updatePasswordValue = (evt) =>{
        this.setState({
            passwordValue: evt.target.value
        });
    };

    render() {
        const {t} = this.props;

        if (this.state.isRedirect){
            return <Redirect to={this.props.location.state.redirectPage}/>
        }

        return (
            <div className="authenticationContainer">
                <div className="authentication">

                    <h2 className="authentication__title">{t('logIn')}</h2>
                    <span className="authentication__blockTitle">{t('e-mail')}</span>
                    <input type="text" className="authentication__input" value={this.state.emailValue}
                           onChange={this.updateLoginValue}/>
                    <span className="authentication__blockTitle">{t('password')} </span>
                    <input type="password" className="authentication__input" value={this.state.passwordValue}
                           onChange={this.updatePasswordValue}/>
                    <div className="authentication__forgotPassword">
                        <a href="">{t('forgotPassword')}</a>
                    </div>
                    <button className="authentication__btnLogin" type="submit" onClick={this.sendToAuthentication}>{t('btnAuthorizationLogin')}</button>
                </div>
            </div>

        )
    }
}
export default  withRouter(translate('translations')(Authentication))
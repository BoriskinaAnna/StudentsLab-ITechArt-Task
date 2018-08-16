import React, {Component} from 'react';
import './authenticationStyle.scss';
import { translate } from 'react-i18next';
import Modal from 'react-modal';
import userService from "../userService";
import {Redirect, withRouter} from "react-router-dom";
import redirectAwareFetch from "../userService/redirectAwareFetch";
import {FetchResultTypeEnum} from "../userService/fetchResultTypeEnum";


Modal.setAppElement('#content');

class Authentication extends Component {

    constructor(){
        super();
        this.state = {
            emailValue: '',
            passwordValue: '',
            isRedirect: false,
            incorrectAuthentication: false
        }
    }

    getOptions = () =>{
        return {
            method: 'POST',
            body: JSON.stringify({
                email:this.state.emailValue,
                password: this.state.passwordValue
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        }
    };

    sendToAuthentication = () =>{
        redirectAwareFetch('/api/account/login', this.getOptions(), true)
            .then(result =>{
                switch (result.type) {

                    case FetchResultTypeEnum.USER_FAIL_LOGIN:
                        this.setState({
                            incorrectAuthentication: true
                        });
                        break;

                    default:
                        userService.initializeNewUser(
                            result.data.email,
                            result.data.firstName,
                            result.data.lastName,
                            result.data.id,
                            result.data.role
                        );
                        this.setState({
                            incorrectAuthentication: false,
                            isRedirect:  true
                        });
                }
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

        const incorrectAuthentication = this.state.incorrectAuthentication
            &&<span className="authentication__error">{t('incorrectAuthentication')}</span>;

        if (this.state.isRedirect){
            return <Redirect to={this.props.location.state.redirectPage}/>
        }

        return (
            <div className="authenticationContainer">
                <div className="authentication">
                    <h1 className="authentication__title">{t('logIn')}</h1>
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
                    {incorrectAuthentication}
                </div>
            </div>
        )
    }
}
export default  withRouter(translate('translations')(Authentication))
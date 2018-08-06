import React, {Component} from 'react';
import './authorizationStyle.scss';
import { translate } from 'react-i18next';
import Modal from 'react-modal';
import ModalWindowHeader from '../modalWindowHeader';


Modal.setAppElement('#content');

class Authorization extends Component {

    constructor(){
        super();
        this.state = {
            emailValue: '',
            passwordValue: ''
        }
    }

    sendToAuthentication = () =>{

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
            .then(
                function(response) {
                    if (response.status !== 200) {
                        console.log('Looks like there was a problem. Status Code: ' +
                           response.status);
                        return;
                    }
                    response.json().then(function(data) {
                        console.log(data);
                    });
                }
            )
            .catch(function(err) {
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
        const {t, isLoginShowed, closeLogin} = this.props;

        return (
            <Modal
                isOpen={isLoginShowed}
                onRequestClose={closeLogin}
                className="authorizationModal"
                overlayClassName="Overlay"
            >
                <div className="authorization">
                    <ModalWindowHeader close={closeLogin}/>
                    <h2 className="authorization__title">{t('logIn')}</h2>
                    <input type="text" className="authorization__input" value={this.state.emailValue}
                           placeholder={t('e-mail')} onChange={this.updateLoginValue}/>
                    <input type="password" className="authorization__input" value={this.state.passwordValue}
                           placeholder={t('password')}  onChange={this.updatePasswordValue}/>
                    <div className="authorization__forgotPassword">
                        <a href="">{t('forgotPassword')}</a>
                    </div>
                    <button className="authorization__btnLogin" type="submit" onClick={this.sendToAuthentication}>{t('btnAuthorization')}</button>
                </div>
            </Modal>
        )
    }
}
export default translate('translations')(Authorization)
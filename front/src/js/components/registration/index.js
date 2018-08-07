import React, {Component} from 'react';
import './registrationStyle.scss';
import {translate} from 'react-i18next';
import Modal from 'react-modal';


Modal.setAppElement('#content');

class Registration extends Component {

    constructor(){
        super();
        this.state = {
            emailValue: '',
            passwordValue: '',
            repeatPasswordValue: '',
            firstNameValue: '',
            secondNameValue: '',
            placeholderValue: ''
        }
    }

    changePlaceholderState = (t) =>{
        this.setState({
            placeholderValue: t('emptyInput')
        });
    };

    isInputEmpty = (inputValue, t) =>{
        if (inputValue.length === 0 ){
            this.changePlaceholderState(t);
            return true;
        }
        return false;
    };

    isInputsEmpty = (t) =>{
        let isEmpty = false;
        isEmpty = isEmpty||this.isInputEmpty(this.state.emailValue, t);
        isEmpty = isEmpty||this.isInputEmpty(this.state.passwordValue, t);
        isEmpty = isEmpty||this.isInputEmpty(this.state.repeatPasswordValue, t);
        isEmpty = isEmpty||this.isInputEmpty(this.state.firstNameValue, t);
        isEmpty = isEmpty||this.isInputEmpty(this.state.secondNameValue, t);
        return isEmpty;
    };

    isPasswordInputsEquals = () =>{
      if (!this.state.passwordValue.localeCompare(this.state.repeatPasswordValue)){

          return false;
      }
      return true;
    }

    sendRegistration = (t) =>{
        if (!this.isInputsEmpty(t)){
            const headers = new Headers();
            headers.append('Content-Type', 'application/json');
            const options = {
                method: 'POST',
                body: JSON.stringify({
                    email:this.state.emailValue,
                    password: this.state.passwordValue,
                    firstName: this.state.firstNameValue,
                    secondName: this.state.secondNameValue
                }),
                headers: headers
            };

            fetch('/api/account/register', options)
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
        }
    };

    isEmpty = (evt, t) =>{
        if (evt.target.value.length === 0){
            evt.target.placeholder = t('emptyInput');
        }
    };

    updateEmailValue = (evt, t) =>{
        this.isEmpty(evt, t);
        this.setState({
            emailValue: evt.target.value
        });
    };

    updateSecondNameValue = (evt, t) =>{
        this.isEmpty(evt, t);
        this.setState({
            secondNameValue: evt.target.value
        });
    };

    updatePasswordValue = (evt, t) =>{
        this.isEmpty(evt, t);
        this.setState({
            passwordValue: evt.target.value
        });
    };

    updateRepeatPasswordValue = (evt, t) =>{
        this.isEmpty(evt, t);
        this.setState({
            repeatPasswordValue: evt.target.value
        });
        if (!this.state.passwordValue.localeCompare(this.state.repeatPasswordValue)) {

        }
    };

    updateFirstNameValue = (evt, t) =>{
        this.isEmpty(evt, t);
        this.setState({
            firstNameValue: evt.target.value
        });
    };

    render() {
        const {t} = this.props;

        return (
            <div className="addNewUserContainer">
                <div className="addNewUser">

                    <div>
                        <span className="addNewUser__blockTitle">{t('registrationFirstName')}</span>
                        <input className="addNewUser__input"
                               value={this.state.firstNameValue}
                               onChange={(evt) => this.updateFirstNameValue(evt, t)}
                               placeholder={this.state.placeholderValue}
                        />
                    </div>
                    <div>
                        <span className="addNewUser__blockTitle">{t('registrationSecondName')}</span>
                        <input className="addNewUser__input"
                               value={this.state.secondNameValue}
                               onChange={(evt) => this.updateSecondNameValue(evt, t)}
                               placeholder={this.state.placeholderValue}
                        />
                    </div>
                    <div>
                        <span className="addNewUser__blockTitle">{t('registrationEmail')}</span>
                        <input className="addNewUser__input"
                               value={this.state.emailValue}
                               onChange={(evt) => this.updateEmailValue(evt, t)}
                               placeholder={this.state.placeholderValue}
                        />
                    </div>
                    <div>
                        <span className="addNewUser__blockTitle">{t('registrationPassword')}</span>
                        <input type="password" className="addNewUser__input"
                               value={this.state.passwordValue}
                               onChange={(evt) => this.updatePasswordValue(evt, t)}
                               placeholder={this.state.placeholderValue}
                        />
                    </div>
                    <div>
                        <span className="addNewUser__blockTitle">{t('registrationRepeatPassword')}</span>
                        <input type="password" className="addNewUser__input"
                               value={this.state.repeatPasswordValue}
                               onChange={(evt) => this.updateRepeatPasswordValue(evt, t)}
                               placeholder={this.state.placeholderValue}
                        />
                    </div>
                    <button type="submit" className="addNewUser__registerBtn" onClick={() => {
                        this.sendRegistration(t)
                    }}>
                        {t('register')}
                    </button>
                </div>
            </div>
        )
    }
}
export default translate('translations')(Registration)
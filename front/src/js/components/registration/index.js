import React, {Component} from 'react';
import './registrationStyle.scss';
import {translate} from 'react-i18next';
import Modal from 'react-modal';
import RegistrationField from '../registrationField';
import {Redirect, withRouter} from 'react-router-dom';
import userService from '../services/userService';
import {FetchResultTypeEnum} from '../services/userService/fetchResultTypeEnum';
import redirectAwareFetch from '../services/userService/redirectAwareFetch';


Modal.setAppElement('#content');

class Registration extends Component {

   constructor(){
       super();
       this.state = {
           emailInput: {
               value:  '',
               isChanged: false
           },
           passwordInput: {
               value:  '',
               isChanged: false
           },
           repeatPasswordInput: {
               value:  '',
               isChanged: false
           },
           firstNameInput: {
               value:  '',
               isChanged: false
           },
           secondNameInput: {
               value:  '',
               isChanged: false
           },
           placeholderValue: '',
           isRepeatPasswordIncorrect: false,
           isRedirect: false,
           userAlreadyExists: false
        };
   }

   isInputEmpty = (inputValue, t) =>{
        if (inputValue.length === 0 ){
            this.setState({
                placeholderValue: t('inputCanNotBeEmpty')
            });
            return true;
        }
        else{
            this.setState({
                placeholderValue: ''
            });
            return false;
        }
    };

   isAllInputsEmpty = (t) =>{
      return this.isInputEmpty(this.state.emailInput.value, t)
               ||this.isInputEmpty(this.state.passwordInput.value, t)
               ||this.isInputEmpty(this.state.repeatPasswordInput.value, t)
               ||this.isInputEmpty(this.state.firstNameInput.value, t)
               ||this.isInputEmpty(this.state.secondNameInput.value, t);
   };

   makeInputsStatusChanged = () =>{
       this.setState({
           emailInput: this.updateStateObject(this.state.emailInput, this.state.emailInput.value),
           firstNameInput: this.updateStateObject(this.state.firstNameInput, this.state.firstNameInput.value),
           passwordInput: this.updateStateObject(this.state.passwordInput, this.state.passwordInput.value),
           repeatPasswordInput: this.updateStateObject(this.state.repeatPasswordInput, this.state.repeatPasswordInput.value),
           secondNameInput: this.updateStateObject(this.state.secondNameInput, this.state.secondNameInput.value)
       });
   };

   getOptions = () =>{
       return {
           method: 'POST',
           body: JSON.stringify({
               email: this.state.emailInput.value,
               password: this.state.passwordInput.value,
               firstName: this.state.firstNameInput.value,
               secondName: this.state.secondNameInput.value
           }),
           headers: {
               'Content-Type': 'application/json'
           }
       }
   };

   sendRegistration = (t) =>{
       this.makeInputsStatusChanged();
       if (!this.isAllInputsEmpty(t)
           && this.state.passwordInput.value.localeCompare(this.state.repeatPasswordInput.value) === 0)
       {
           redirectAwareFetch('/api/account/register', this.getOptions())
               .then(result =>{
                   switch (result.type) {

                       case FetchResultTypeEnum.USER_FAIL_REGISTRATION:
                           this.setState({
                               userAlreadyExists: true
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
                               userAlreadyExists: false,
                               isRedirect:  true
                           });
                   }
               })
               .catch(error => console.log(error));
       }
   };

   updateStateObject = (state, value) =>{
       let tempObject = Object.assign({},state);
       tempObject.value =  value;
       tempObject.isChanged = true;
       return tempObject;
   };

   updateEmailInput = (evt) =>{
       this.setState({
           emailInput:  this.updateStateObject(this.state.emailInput, evt.target.value)
       });
   };

   updateSecondNameInput = (evt) =>{
       this.setState({
           secondNameInput:  this.updateStateObject(this.state.secondNameInput, evt.target.value)
       });
   };

   updatePasswordInput = (evt) =>{
       this.setState({
           passwordInput:  this.updateStateObject(this.state.passwordInput, evt.target.value)
       });
   };

   updateRepeatPasswordInput = (evt) =>{
       this.setState({
           repeatPasswordInput:  this.updateStateObject(this.state.repeatPasswordInput, evt.target.value)
       });
       if (this.state.passwordInput.value.localeCompare(evt.target.value) !== 0) {
           this.setState({
               isRepeatPasswordIncorrect: true
           });
       }
       else{
           this.setState({
               isRepeatPasswordIncorrect: false
           });
       }
   };

   updateFirstNameInput = (evt) =>{
        this.setState({
            firstNameInput:  this.updateStateObject(this.state.firstNameInput, evt.target.value)
        });
    };

   placeHolderValue = (value, t) =>{
       if (value.length === 0){
           return t('inputCanNotBeEmpty');
       }
       else{
           return '';
       }
   };

    render() {
        const {t} = this.props;

        const incorrectRepeatPassword =
            this.state.isRepeatPasswordIncorrect
            && <span className="incorrectRepeatPassword">{t('incorrectRepeatPassword')}</span>;

        const userAlreadyExists =
            this.state.userAlreadyExists
            &&<span className="addNewUser__error">{t('userAlreadyExists')}</span>;

        if (this.state.isRedirect){
            return <Redirect to={this.props.location.state.redirectPage}/>
        }

        return (
           <div className="addNewUserContainer">
              <div className="addNewUser">

                 <RegistrationField inputType={'text'} spanText={t('registrationFirstName')}
                                     state={this.state.firstNameInput} placeholderValue={this.state.placeholderValue}
                                     t={t} updateFunction={this.updateFirstNameInput} placeholder={this.placeHolderValue}/>

                 <RegistrationField  inputType={'text'} spanText={t('registrationSecondName')}
                                     state={this.state.secondNameInput} placeholderValue={this.state.placeholderValue}
                                     t={t} updateFunction={this.updateSecondNameInput} placeholder={this.placeHolderValue}/>

                 <RegistrationField  inputType={'email'} spanText={t('registrationEmail')}
                                     state={this.state.emailInput} placeholderValue={this.state.placeholderValue}
                                     t={t} updateFunction={this.updateEmailInput} placeholder={this.placeHolderValue}/>

                 <RegistrationField  inputType={'password'} spanText={t('registrationPassword')}
                                     state={this.state.passwordInput} placeholderValue={this.state.placeholderValue}
                                     t={t} updateFunction={this.updatePasswordInput} placeholder={this.placeHolderValue}/>

                 <RegistrationField  inputType={'password'} spanText={t('registrationRepeatPassword')}
                                     state={this.state.repeatPasswordInput} placeholderValue={this.state.placeholderValue}
                                     t={t} updateFunction={this.updateRepeatPasswordInput} placeholder={this.placeHolderValue}/>

                 {incorrectRepeatPassword}

                 <button type="submit" className="addNewUser__registerBtn"
                         onClick={() => {this.sendRegistration(t)}}
                 >
                     {t('register')}
                 </button>
                 {userAlreadyExists}
              </div>
            </div>
        )
    }
}
export default withRouter(translate('translations')(Registration))
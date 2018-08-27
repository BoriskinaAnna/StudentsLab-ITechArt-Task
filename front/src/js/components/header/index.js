import React, {Component} from 'react';
import './headerStyle.scss';
import {translate} from 'react-i18next';
import {Link} from 'react-router-dom';
import userService from '../services/userService';


class Header extends Component {

    constructor(){
        super();

        this.state = {
            btnAuthorizationName: '',
            isCurrentUserInfoLoaded: false,
            isUserNotAuthenticate: true
        };

    }

    logout = () =>{
        userService.logout();
        this.setState({
            isUserNotAuthenticate: true
        });
    };

    render() {
        if (!this.state.isCurrentUserInfoLoaded) {
            userService.getCurrentUser()
                .then((data) => {
                    console.log(data);
                    console.log(555);
                    this.setState({
                        isUserNotAuthenticate: data.id === null,
                        isCurrentUserInfoLoaded: true
                    });
                });
            return null;
        }
        else {
            const {t} = this.props;
            console.log(this.state.isUserNotAuthenticate);
            const btnAuthorizationAction = this.state.isUserNotAuthenticate
                ? <Link
                    to={{
                        pathname: '/authentication',
                        state: {
                            redirectPage: window.location.pathname,
                            labId: this.props.labId
                        }
                    }}
                    className="headerBtn"
                >
                    {t('btnAuthorizationLogin')}
                </Link>
                : <button onClick={this.logout} className="headerBtn">
                    {t('btnAuthorizationLogout')}
                </button>;

            const btnRegistration = this.state.isUserNotAuthenticate
                && <Link
                    to={{
                        pathname: '/registration',
                        state: {redirectPage: window.location.pathname}
                    }}
                    className="headerBtn"
                >
                    {t('register')}
                </Link>;

            return (
                <header>


                    <Link to="/" className="headerLogo">
                        <img className="headerLogo__img" src="img/logo.svg" alt="ITechArtHeaderLogo"/>
                    </Link>
                    <div className="login">
                        {btnAuthorizationAction}
                        {btnRegistration}
                    </div>
                </header>
            )
        }

    }
}
export default translate('translations')(Header)
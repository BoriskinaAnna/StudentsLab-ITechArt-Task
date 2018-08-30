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
            userService.getCurrentUserInfoForPublicPage()
                .then((result) => {
                    this.setState({
                        isUserNotAuthenticate: result.id === undefined,
                        isCurrentUserInfoLoaded: true
                    });
                })
                .catch(error => console.log(error));

            return null;
        }
        else {
            const {t} = this.props;
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
                :<Link
                    to={'/'}
                    onClick={this.logout}
                    className="headerBtn"
                >
                    {t('btnAuthorizationLogout')}
                </Link>;

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
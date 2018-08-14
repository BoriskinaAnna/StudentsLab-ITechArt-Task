import React, {Component} from 'react';
import './headerStyle.scss';
import {translate} from 'react-i18next';
import {Link} from 'react-router-dom';
import UserService from '../userService';


class Header extends Component {

    constructor(){
        super();
        this.state = {
            btnAuthorizationName: '',
            isUserNotAuthenticate: UserService.currentUser.id === null
        }
    }


    logout = () =>{
        const userService = new UserService;
        userService.logout();
        this.setState({
            isUserNotAuthenticate: true
        });
    };

    render() {
        const {t} = this.props;
        const btnAuthorizationAction = this.state.isUserNotAuthenticate
            ? <Link to={{
                  pathname:'/authentication',
                  state: { redirectPage : window.location.pathname}
              }}
                  className="headerBtn"
              >
                  {t('btnAuthorizationLogin')}
              </Link>
            :<button onClick={this.logout} className="headerBtn">{t('btnAuthorizationLogout')}</button>

        ;
            const btnRegistration = this.state.isUserNotAuthenticate
                && <Link to={{
                        pathname:'/registration',
                        state: { redirectPage : window.location.pathname}
                    }}
                          className="headerBtn"
                    >
                        {t('register')}
                    </Link>;

        return (
            <header>
                <Link to="/" className="headerLogo"><img className="headerLogo__img" src="img/logo.svg" alt="ITechArtHeaderLogo"/></Link>
                <div className="login">
                    {btnAuthorizationAction}
                    {btnRegistration}
                </div>
            </header>
        )
    }
}
export default translate('translations')(Header)
import React, {Component} from 'react';
import './headerStyle.scss';
import {translate} from 'react-i18next';
import {Link} from 'react-router-dom';


class Header extends Component {

    render() {
        const {t, showLogin} = this.props;

        return (
            <header>
                <Link to="/" className="headerLogo"><img className="headerLogo__img" src="img/logo.svg"/></Link>
                <div className="login">
                    <button onClick={showLogin} className="headerBtn">
                        {t('btnAuthorization')}
                    </button>

                    <Link to="/registration" className="headerBtn">
                        {t('register')}
                    </Link>
                </div>
            </header>
        )
    }
}
export default translate('translations')(Header)
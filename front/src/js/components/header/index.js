import React, {Component} from 'react';
import './headerStyle.scss';
import {translate} from 'react-i18next';
import {Link} from 'react-router-dom';


class Header extends Component {

    render() {
        const {t, showLogin} = this.props;

        return (
            <header>
                <Link to="/" className="logo"><img src="img/logo.svg"/></Link>
                <button onClick={showLogin} className="authorizationBtn">
                    {t('btnAuthorization')}
                </button>
            </header>
        )
    }
}
export default translate('translations')(Header)
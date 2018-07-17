import React, {Component} from 'react';
import 'js/components/header/headerStyle.scss';
import {translate} from 'react-i18next';
import {Link} from 'react-router-dom';


class Header extends Component {

    render() {
        const {t} = this.props;
        return (
            <header>
                <div>
                    <Link to="/" className="logo"/>
                </div>
                <div>
                    <Link to="/authorization" className="authorizationBtn">
                        {t('btnAuthorization')}
                        </Link>
                </div>
            </header>
        )
    }
}
export default translate('translations')(Header)
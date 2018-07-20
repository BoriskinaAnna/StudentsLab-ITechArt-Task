import React from 'react';
import {Component} from 'react';
import 'js/components/footer/footerStyle.scss';
import { translate } from 'react-i18next';
import {Link} from 'react-router-dom';


class Footer extends Component {

    render() {
        const {t, i18n} = this.props;
        const changeLanguage = (lng) => {
            i18n.changeLanguage(lng);
        };

        return (
            <footer>
                <div>
                    <Link to="/" className="footer__logo"/>
                </div>
                <div className="footer__phones">
                    <div className="footer__phonesTitle">
                        {t('numbers')}
                     </div>
                    <div className="footer__phone">
                        <img className="footer__operatorImage" src = "/img/operators/mts.svg" alt="mts"/>
                        <span>+375 33 662 31 40</span>
                    </div>
                    <div className="footer__phone">
                        <img className="footer__operatorImage" src="/img/operators/life.svg" alt="life"/>
                        <span>+375 25 799 67 43</span>
                    </div>
                    <div className="footer__phone">
                        <img className="footer__operatorImage" src="/img/operators/velcom.svg" alt="velcom"/>
                        <span>+375 29 359 63 31</span>
                    </div>
                </div>
                <div className="footer__languages">
                    <button className="footer__changeLanguageBtn" onClick={() => changeLanguage('ru')}>Русский</button>
                    <button className="footer__changeLanguageBtn" onClick={() => changeLanguage('en')}>English</button>
                </div>
            </footer>
        )
    }
}
export default translate('translations')(Footer)
import React from 'react';
import {Component} from 'react';
import 'js/components/footer/scss/styleFooter.css';
import { translate } from 'react-i18next';


class Footer extends Component {

    render() {
        const {t, i18n} = this.props;
        const changeLanguage = (lng) => {
            i18n.changeLanguage(lng);
        };

        return (
            <footer>
                <div className="container">
                    <div className="row">
                        <div className="col-4">
                            <a className="footer__logo"  href = ""/>
                        </div>
                        <div className="col-4 footer__phones">
                                <div className="footer__phonesTitle">
                                    {t('numbers')}
                                    </div>

                                <div className="footer__phone">
                                    <img className="footer__operatorImage" src = "/img/operators/mts.svg" />
                                    <span>+375 33 662 31 40</span>
                                </div>

                                <div className="footer__phone">
                                    <img className="footer__operatorImage" src="/img/operators/life.svg"/>
                                    <span>+375 25 799 67 43</span>
                                </div>

                                <div className="footer__phone">
                                    <img className="footer__operatorImage" src="/img/operators/velcom.svg" />
                                    <span>+375 29 359 63 31</span>
                                </div>
                        </div>
                        <div className="col-4 footer__languages">
                            <div><btn onClick={() => changeLanguage('ru')}>Русский</btn></div>
                            <div><btn onClick={() => changeLanguage('en')}>English</btn></div>
                        </div>
                    </div>
                </div>
            </footer>
        )
    }
}
export default translate('translations')(Footer)
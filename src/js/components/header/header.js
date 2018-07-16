import React, {Component} from 'react';
import 'js/components/header/scss/style.css';
import { translate } from 'react-i18next';


class Header extends Component {

    render() {
        const {t} = this.props;
        return (
            <header>
                <div className="container">
                    <div className="row">
                        <div className="col-6">
                            <a className="logo" href=""/>
                        </div>
                        <div className="col-6">
                            <a className="authorization" href="">
                                {t('btnAuthorization')}
                                </a>
                        </div>
                    </div>
                </div>
            </header>
        )
    }
}
export default translate('translations')(Header)
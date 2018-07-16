import React, {Component} from 'react';
import 'js/components/header/headerStyle.scss';
import { translate } from 'react-i18next';


class Header extends Component {

    render() {
        const {t} = this.props;
        return (
            <header>
                <div>
                    <a className="logo" href=""/>
                </div>
                <div>
                    <a className="authorization" href="">
                        {t('btnAuthorization')}
                        </a>
                </div>

            </header>
        )
    }
}
export default translate('translations')(Header)
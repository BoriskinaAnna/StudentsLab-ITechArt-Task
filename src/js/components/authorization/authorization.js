import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import 'js/components/authorization/authorizationStyle.scss';
import { translate } from 'react-i18next';


class Authorization extends Component {

    render() {
        const {t} = this.props;
        return (
          <div className="authorization">
                    <input className="form-control" placeholder= {t('e-mail')}/>
                    <input type="password" className="form-control" placeholder={t('password')}/>
                    <button type="submit" className="btn btn-default">
                        {t('btnAuthorization')}
                        </button>
          </div>

        )
    }
}
export default translate('translations')(Authorization)
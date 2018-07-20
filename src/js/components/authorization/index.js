import React, {Component} from 'react';
import 'js/components/authorization/authorizationStyle.scss';
import { translate } from 'react-i18next';
import Modal from 'react-modal';
import ModalWindowHeader from 'js/components/modalWindowHeader';

Modal.setAppElement('#content');

class Authorization extends Component {

    render() {
        const {t, isLoginShowed, closeLogin} = this.props;

        return (
            <Modal
                isOpen={isLoginShowed}
                onRequestClose={closeLogin}
                className="Modal"
                overlayClassName="Overlay"
            >
                <div className="authorizationContainer form-control">
                    <div className="authorizationContainer__content">
                        <ModalWindowHeader close={closeLogin}/>
                        <input className="form-control" placeholder={t('e-mail')}/>
                        <input type="password" className="form-control" placeholder={t('password')}/>
                        <button type="submit" className="btn btn-default">
                            {t('btnAuthorization')}
                        </button>
                    </div>
                </div>
             </Modal>
        )
    }
}
export default translate('translations')(Authorization)
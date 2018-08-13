import React, {Component} from 'react';
import './changeLectureStyle.scss';
import {translate} from 'react-i18next';
import Modal from 'react-modal';
import ModalWindowHeader from '../modalWindowHeader';


Modal.setAppElement('#content');

class ChangeLecture extends Component {

    render() {
        const {t, isAddLabShowed, closeAddLab} = this.props;

        return (
            <Modal
                isOpen={isAddLabShowed}
                onRequestClose={closeAddLab}
                className="changeLectureModal"
                overlayClassName="Overlay"
            >
                <div className="changeLecture">
                    <ModalWindowHeader close={closeAddLab}/>
                    <div>
                        <div className="changeLecture__title">{t('courseName')}</div>
                        <input className="changeLecture__input"/>
                    </div>
                    <div className="changeLecture__times">
                        <div>
                            <div className="changeLecture__title">{t('time')}</div>
                            <input className="changeLecture__input"/>
                        </div>
                        <div>
                            <div className="changeLecture__title"> {t('duration')}</div>
                            <input className="changeLecture__input"/>
                        </div>
                    </div>
                    <span className="changeLecture__title">{t('lecturer')}</span>
                    <input className="changeLecture__input"/>
                    <span className="changeLecture__title">{t('city')}</span>
                    <input className="changeLecture__input"/>
                    <div className="changeLecture__comments">
                        <div className="changeLecture__title"> {t('comments')}</div>
                        <textarea className="changeLecture__input"/>
                    </div>
                    <button type="submit" className="changeLecture__btnSave">
                        {t('add')}
                    </button>
                </div>
            </Modal>
        )
    }
}
export default translate('translations')(ChangeLecture)
import React, {Component} from 'react';
import 'js/components/addLabForm/addLabFormStyle.scss';
import {translate} from 'react-i18next';
import Modal from 'react-modal';
import ModalWindowHeader from 'js/components/modalWindowHeader';


Modal.setAppElement('#content');

class AddLabForm extends Component {

    render() {
        const {t, isAddLabShowed, closeAddLab} = this.props;

        return (
            <Modal
                isOpen={isAddLabShowed}
                onRequestClose={closeAddLab}
                className="addLabModal"
                overlayClassName="Overlay"
            >
                <div className="addLab">
                    <ModalWindowHeader close={closeAddLab}/>
                    <div>
                        <span className="addLab__blockTitle">{t('courseName')}</span>
                        <input className="addLab__input"/>
                    </div>
                    <div>
                        <span className="addLab__blockTitle">{t('trainingDate')}</span>
                        <div className="addLab__dates">
                            <div>
                                <span className="title">{t('start')}</span>
                                <input className="addLab__input"/>
                            </div>
                            <div>
                                <span className="title">{t('end')}</span>
                                <input className="addLab__input"/>
                            </div>
                        </div>
                    </div>
                    <div>
                        <span className="addLab__blockTitle">{t('admissionDate')}</span>
                        <div className="addLab__dates">
                            <div>
                                <span className="title">{t('start')}</span>
                                <input className="addLab__input"/>
                            </div>
                            <div>
                                <span className="title">{t('end')}</span>
                                <input className="addLab__input"/>
                            </div>
                        </div>
                    </div>
                    <div>
                        <span className="addLab__blockTitle">{t('city')}</span>
                        <input className="addLab__input"/>
                    </div>
                    <div>
                        <span className="addLab__blockTitle">{t('courseType')}</span>
                        <input className="addLab__input"/>
                    </div>
                    <button type="submit" className="addLab__addBtn btn-default">
                        {t('add')}
                    </button>
                </div>
            </Modal>
        )
    }
}
export default translate('translations')(AddLabForm)
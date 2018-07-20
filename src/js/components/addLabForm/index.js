import React, {Component} from 'react';
import 'js/components/addLabForm/addLabFormStyle.scss';
import {translate} from 'react-i18next';
import Modal from 'react-modal';
import ModalWindowHeader from 'js/components/modalWindowHeader';

Modal.setAppElement('#content');

class LabForm extends Component {

    render() {
        const {t, isAddLabShowed, closeAddLab} = this.props;

        return (
            <Modal
                isOpen={isAddLabShowed}
                onRequestClose={closeAddLab}
                className="Modal"
                overlayClassName="Overlay"
            >
                <div className="addLab form-control">
                    <ModalWindowHeader close={closeAddLab}/>
                    <div>
                        <span className="addLab__blockTitle">{t('courseName')}</span>
                        <input className="form-control"/>
                    </div>
                    <div>
                        <span className="addLab__blockTitle">{t('trainingDate')}</span>
                        <div className="addLab__dates">
                            {t('start')}
                            <input className="form-control"/>
                            {t('end')}
                            <input className="form-control"/>
                        </div>
                    </div>
                    <div>
                        <span className="addLab__blockTitle">{t('admissionDate')}</span>
                        <div className="addLab__dates">
                            {t('start')}
                            <input className="form-control"/>
                            {t('end')}
                            <input className="form-control"/>
                        </div>
                    </div>
                    <div>
                        <span className="addLab__blockTitle">{t('city')}</span>
                        <input className="form-control"/>
                    </div>
                    <div>
                        <span className="addLab__blockTitle">{t('courseType')}</span>
                        <input className="form-control"/>
                    </div>
                    <button type="submit" className="addLab__addBtn btn-default">
                        {t('add')}</button>
                </div>
            </Modal>
        )
    }
}
export default translate('translations')(LabForm)
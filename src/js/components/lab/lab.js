import React, {Component} from 'react';
import 'js/components/lab/scss/style.css';
import { translate } from 'react-i18next';


class Lab extends Component {

    state = {
        isCurrent: this.props.current
    };

    render() {
        const {lab, t} = this.props;
        const labStatus = !this.state.isCurrent &&
                <div className="labContent__labStatus"/>;

        return (
            <div className="lab">
                <div className="labLogo">
                    <img className={this.state.isCurrent ? "labLogo__image labLogo_isNotCurrentLab": "labLogo__image"}
                         src={lab.image}/>
                </div>
                <div className="labContent">
                    <div className="labContent__labType">
                        <h3 className="labContent__title">{lab.trainingName}</h3>
                        <div className="labContent__dates">
                            {labStatus}
                            <div>
                               <span className="labContent__admissionDate">{t('admissionDate')}</span>
                                {lab.admissionDate}
                            </div>
                            </div>
                    </div>
                    <div className="labContent__trainingDates">
                        <span className="labContent__headerTrainingDate">{t('headerTrainingDate')}</span>
                        <div className="labContent__dates">
                            {lab.trainingDate}
                            </div>
                    </div>
                    <span className="labContent__city">{t('city')}</span>
                </div>
                <span className="lab__arrow"/>
            </div>
        )
    }
}
export default translate('translations')(Lab)
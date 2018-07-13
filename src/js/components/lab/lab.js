import React, {Component} from 'react';
import 'js/components/lab/scss/style.css';
import { translate } from 'react-i18next';

class Lab extends Component {


    render(){
        const {lab, current, t} = this.props;
        this.state = {
            isCurrent: current
        };
        const labStatus = !this.state.isCurrent &&
                <div className="labContent__labStatus">&nbsp;</div>



        return(

            <div className = "lab">
                <div className = "labLogo">
                    <img className = {this.state.isCurrent ? "labLogo__image labLogo_isNotCurrentLab": "labLogo__image"} src = {lab.image}/>
                </div>


                <div className="labContent">
                    <div className="labContent__labType">
                        <h3 className= "labContent__title">{lab.trainingName}</h3>
                        <div className="labContent__dates">
                            {labStatus}
                            <div>
                               <span className= "labContent__admissionDate">{t('admissionDate')}</span>
                                {lab.admissionDate}
                            </div>
                            </div>
                    </div>


                    <div className="labContent__trainingDates">
                        <span className = "labContent__headerTrainingDate">{t('headerTrainingDate')}</span>
                        <div className="labContent__dates">
                            {lab.trainingDate}
                            </div>
                    </div>

                    <span className="labContent__city">{t('city')}</span>
                </div>

                <span className="lab__arrow">&nbsp;</span>

            </div>
        )
    }


}


export default translate('translations')(Lab)
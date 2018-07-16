import React, {Component} from 'react';
import 'js/components/lab/labStyle.scss';
import { translate } from 'react-i18next';


class Lab extends Component {

    state = {
        isCurrent: true
    };

    componentWillMount(){
        const {lab} = this.props;
        const date = new Date(lab.admission_end_date.replace(/(\d+).(\d+)/, '$1 1 $2'));
        date.setMonth(date.getMonth() + 1);
        if (new Date() - date < 0 ){
            this.setState({isCurrent: false});
        }
    }

    static getImageURL(type){
        switch (type){
            case 'js':
                return '/img/media/FullStack-JS.svg';
            case '.net':
                return '/img/media/microsoft_net_logo.svg';
            case 'java':
                return '/img/media/java.svg';
            case 'qa':
                return '/img/media/qa.svg';
            case 'ruby':
                return '/img/media/ruby.svg';
            case 'salesforce':
                return '/img/media/salesforce.svg';
        }
    }

    render() {
        const {lab, t} = this.props;
        const labStatus = !this.state.isCurrent &&
                <div className="labContent__labStatus"/>;
        const imageURL = Lab.getImageURL(lab.type);
        return (
            <div className="lab">
                <div className="labLogo">
                    <img className={this.state.isCurrent ? "labLogo__image labLogo_isNotCurrentLab": "labLogo__image"}
                         src={imageURL}/>
                </div>
                <div className="labContent">
                    <div className="labContent__labType">
                        <h3 className="labContent__title">{lab.training_name}</h3>
                        <div className="labContent__dates">
                            {labStatus}
                            <div>
                               <span className="labContent__admissionDate">{t('admissionDate')}</span>
                                {lab.admission_start_date} - {lab.admission_end_date}
                            </div>
                            </div>
                    </div>
                    <div className="labContent__trainingDates">
                        <span className="labContent__headerTrainingDate">{t('headerTrainingDate')}</span>
                        <div className="labContent__dates">
                            {lab.training_date}
                            </div>
                    </div>
                    <span className="labContent__city">{t('city')}</span>
                </div>

                    <img className="lab__arrow" src="/img/media/list-arrow-right.svg"/>

            </div>
        )
    }
}
export default translate('translations')(Lab)
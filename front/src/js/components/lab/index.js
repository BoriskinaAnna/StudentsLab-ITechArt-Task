import React, {Component} from 'react';
import './labStyle.scss';
import { translate } from 'react-i18next';


class Lab extends Component {

    constructor(){
        super();

        this.state = {
            isCurrent: true
        };
    }

    componentWillMount(){
        const {lab} = this.props;
        const date = new Date(lab.admissionEnd);
        date.setMonth(date.getMonth() + 1);
        if (new Date() - date < 0 ){
            this.setState({isCurrent: false});
        }
    }

    static getImageURL(type){
        switch (type){
            case 'js':
                return 'img/media/FullStack-JS.svg';
            case '.net':
                return 'img/media/microsoft_net_logo.svg';
            case 'java':
                return 'img/media/java.svg';
            case 'qa':
                return 'img/media/qa.svg';
            case 'ruby':
                return 'img/media/ruby.svg';
            case 'salesforce':
                return 'img/media/salesforce.svg';
            default:
                throw new Error(`Image for ${type} type of lab not found`);
        }
    }

    getDate = (dateString) =>{
        const date = new Date (dateString);
        return '0' + date.getMonth() + '.' + date.getFullYear();
    };

    render() {
        const {lab, t} = this.props;
        const labStatus = !this.state.isCurrent &&
                <div className="labContent__labStatus"/>;
        const imageURL = Lab.getImageURL(lab.labType);

        return (
            <div className="lab">
                <div className="labLogo">
                    <img className={this.state.isCurrent ? "labLogo__image labLogo_isNotCurrentLab": "labLogo__image"}
                         src={imageURL} alt={lab.labType}/>
                </div>
                <div className="labContent">
                    <div className="labContent__labType">
                        {labStatus}
                        <h3 className="labContent__title">{lab.name}</h3>
                        <div className="labContent__dates">
                            <div>
                               <span className="labContent__admissionDate">{t('admissionDate')}</span>
                               {this.getDate(lab.admissionStart)} - {this.getDate(lab.admissionEnd)}
                            </div>
                        </div>
                    </div>
                    <div className="labContent__trainingDates">
                        <span className="labContent__headerTrainingDate">{t('trainingDate')}</span>
                        <div className="labContent__dates">
                            {this.getDate(lab.trainingStart)} - {this.getDate(lab.trainingEnd)}
                            </div>
                    </div>
                    <span className="labContent__city">{lab.city}</span>
                </div>
                <img className="lab__arrow" src="img/media/list-arrow-right.svg" alt="arrow"/>
            </div>
        )
    }
}
export default translate('translations')(Lab)
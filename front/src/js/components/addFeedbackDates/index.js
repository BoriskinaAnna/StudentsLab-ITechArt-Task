import React, {Component} from 'react';
import './addFeedbackDatesStyle.scss';
import {translate} from 'react-i18next';
import {Link} from 'react-router-dom';
import userService from '../services/userService';
import feedbackService from '../services/feedbackService';
import Calendar from './calendar';


class AddFeedbackDates extends Component {

    feedBackDates = [];

    currentUser = {
        role: undefined
    };

    constructor(props){
        super(props);

        this.state = {
            isFeedbackDatesLoaded: false,
            addDate: new Date(),
            changeDate: new Date(),
            changingDateId: undefined,
            isCurrentUserInfoLoaded: false
        };
    }

    getFeedbackDates = (labId) =>{
        feedbackService.getFeedbackDates(labId)
            .then(data =>{
                this.feedBackDates = data;
                this.setState({
                    isFeedbackDatesLoaded: true
                })
            });
    };

    addDateCalendarOnChange = addDate =>{
        this.setState({
            addDate: addDate
        })
    };

    updateDateCalendarOnChange = date =>{
        this.setState({
            changeDate: date
        })
    };

    addFeedbackDate = () =>{
        feedbackService.upsertFeedbackDate(this.state.addDate,  this.props.labId, this.state.changingDateId)
            .then( () => {
                this.setState({
                    isFeedbackDatesLoaded: false
                })
            });
    };

    updateFeedbackDate = () =>{
        feedbackService.upsertFeedbackDate(this.state.changeDate, this.props.labId, this.state.changingDateId)
            .then( () => {
                this.setState({
                    isFeedbackDatesLoaded: false,
                    changingDateId: undefined
                })
            });
    };

    cancelChanges = () => {
        this.setState({
            changingDateId: undefined
        })
    };

    getCurrentUserInfo = () =>{
        userService.getCurrentUserInfo()
            .then((data) => {
                this.currentUser.role = data.role;
                this.setState({
                    isCurrentUserInfoLoaded: true
                });
            });
    };

    render() {
        const {t, labId} = this.props;

        if(!(this.state.isFeedbackDatesLoaded && this.state.isCurrentUserInfoLoaded)) {
            if (!this.state.isFeedbackDatesLoaded){
                this.getFeedbackDates(labId);
            }

            if(!this.state.isCurrentUserInfoLoaded){
               this.getCurrentUserInfo();
            }

            return null;
        }
        else{
            const dateElements = this.feedBackDates.map((feedBackDate, index) =>{
                const  date = new Date(feedBackDate.date);

                const fillFeedback = this.currentUser.role === 'Mentor'
                    && <Link
                        to={{
                            pathname:'/feedback',
                            state: {
                                feedbackDateId : feedBackDate.id,
                                labId: labId
                            }
                        }}
                        className="feedbackDates__fillFeedbackBtn"
                    >
                        ({t('fillFeedback')})
                    </Link>;

                if (feedBackDate.id === this.state.changingDateId){
                    return   <li key = {index} className="feedbackDates__date">
                        <Calendar onChangeFunction={
                            this.updateDateCalendarOnChange}
                                  value={this.state.changeDate}
                        />

                        <button className="feedbackDates__btn" onClick={this.updateFeedbackDate}>
                            {t('change')}
                        </button>

                        <button className="feedbackDates__btn" onClick={this.cancelChanges}>
                            {t('cancel')}
                        </button>
                    </li>
                }
                else {
                    return <li key = {index}
                               className="feedbackDates__date"
                               onClick={() => this.setState({changingDateId: feedBackDate.id})}
                        >
                            {date.getDate().toString().length === 1?'0'+date.getDate():date.getDate()}
                            .
                            {date.getMonth().toString().length === 1?'0'+(date.getMonth() + 1):date.getMonth() + 1}
                            .
                            {date.getFullYear()}

                            {fillFeedback}
                        </li>
                }
            });

            const dates = this.feedBackDates.length === 0 ? t('nonFeedbackDates') : dateElements;

            return (
                <ol className="feedbackDates">

                    <div className="feedbackDates__addedDates">
                        {dates}
                    </div>

                    <div className="feedbackDates__addDate">
                        <li className="feedbackDates__date">
                            <Calendar onChangeFunction={
                                this.addDateCalendarOnChange}
                                      value={this.state.addDate}
                            />

                            <button className="feedbackDates__btn" onClick={this.addFeedbackDate}>
                                {t('add')}
                            </button>
                        </li>
                    </div>
                </ol>
            )
        }
    }
}
export default translate('translations')(AddFeedbackDates)
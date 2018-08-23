import React, {Component} from 'react';
import './addFeedbackDatesStyle.scss';
import {translate} from 'react-i18next';
import redirectAwareFetch from '../services/userService/redirectAwareFetch';
import Calendar from 'react-calendar';
import {Link} from 'react-router-dom';


let feedBackDates;

class AddFeedbackDates extends Component {

    constructor(props){
        super(props);
        this.state = {
            isDataLoaded: false,
            addDate: new Date(),
            changeDate: new Date(),
            changingDateId: -1
        };
    }

    getHttpGetOptions = () =>{
        return {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        };
    };

    getFeedbackDates = (labId) =>{
        return redirectAwareFetch(`/api/feedback/getFeedbackDates/${labId}`, this.getHttpGetOptions())
            .then(result =>{
                   return result.data;
                }
            );
    };

    getAddFeedbackDateOptions = (date) =>{
        return {
            method: 'POST',
            body: JSON.stringify({
                date: date,
                labId: this.props.labId,
                id: this.state.changingDateId
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        }
    };

    addDateCalendarValueChange = addDate =>{
        this.setState({
            addDate: addDate
        })
    };

    changeDateCalendarValueChange = date =>{
        this.setState({
            changeDate: date
        })
    };

    addFeedbackDate = () =>{
         redirectAwareFetch('/api/feedback/addOrUpdateFeedbackDate', this.getAddFeedbackDateOptions(this.state.addDate, 0))
            .then( () => {
                this.setState({
                    isDataLoaded: false
                })
            });
    };

    changeFeedbackDate = () =>{

        redirectAwareFetch('/api/feedback/addOrUpdateFeedbackDate', this.getAddFeedbackDateOptions(new Date(this.state.changeDate).toLocaleDateString()))
            .then( () => {
                this.setState({
                    isDataLoaded: false,
                    changingDateId: -1
                })
            });
    };

    render() {
        const {t, labId} = this.props;
        if(!this.state.isDataLoaded) {

            this.getFeedbackDates(labId)
                .then(data =>{
                    feedBackDates = data;
                    this.setState({
                        isDataLoaded: true
                    })
                });
            return null;
        }
        else{


            const dateElements = feedBackDates.map((feedBackDate, index) =>{

                const  date = new Date(feedBackDate.date);

                if( feedBackDate.id === this.state.changingDateId){

                    return   <li key = {index} className="feedbackDates__date">
                        <Calendar
                            onChange={this.changeDateCalendarValueChange}
                            showWeekNumbers
                            value={this.state.changeDate}
                            className="feedbackDates__calendar"
                        />
                        <button className="feedbackDates__addBtn" onClick={this.changeFeedbackDate}>
                            {t('change')}
                        </button>
                    </li>
                }
                else{

                    return <li key = {index}
                               className="feedbackDates__date"
                               onClick={() => this.setState({changingDateId: feedBackDate.id})}
                        >
                            {date.getDate().toString().length === 1?'0'+date.getDate():date.getDate()}
                            .
                            {date.getMonth().toString().length === 1?'0'+date.getMonth():date.getMonth()}
                            .
                            {date.getFullYear()}
                            <Link
                                to={{
                                    pathname:'/feedback',
                                    state: {
                                        feedbackDateId : feedBackDate.id,
                                        labId: labId
                                    }
                                }}
                                className="feedbackDates__fillFeedbackBtn">({t('fillFeedback')})</Link>
                        </li>
                }
            });

            return (
                <ol className="feedbackDates">

                    <div className="feedbackDates__addedDates">
                        {dateElements}
                    </div>

                    <div className="feedbackDates__addDate">

                        <li className="feedbackDates__date">

                            <Calendar
                                onChange={this.addDateCalendarValueChange}
                                showWeekNumbers
                                value={this.state.addDate}
                                className="feedbackDates__calendar"
                            />

                            <button className="feedbackDates__addBtn" onClick={this.addFeedbackDate}>
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
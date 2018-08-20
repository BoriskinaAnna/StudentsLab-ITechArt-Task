import React, {Component} from 'react';
import Lecture from '../lecture/';
import './scheduleStyle.scss';
import {translate} from 'react-i18next';
import AddFeedbackDates from '../addFeedbackDates';
import scheduleService from '../scheduleService';
import {withRouter} from 'react-router-dom';


let schedule;

class Schedule extends Component {

    constructor(props){
        super(props);
        this.state = {
            isAddFeedbackDatesShowed: false,
            isScheduleLoaded: false
        };

        scheduleService.getScheduleFromServer(this.props.location.state.labId)
            .then(data =>{
                schedule = data;
                this.setState({
                    isScheduleLoaded: true
                });
                console.log(schedule)
            });
    }

    render() {
        if(!this.state.isScheduleLoaded) {
            return null;
        }
        else {
            const {showChangeLecture, t} = this.props;

            const lectureElements = schedule.map((lecture, index) =>
                <div key = {index} className="schedule__lecture">
                    <Lecture lecture={lecture} showChangeLecture={showChangeLecture}/>
                </div>
            );

            const addFeedbackDatesBtnName = this.state.isAddFeedbackDatesShowed? t('add'):t('addFeedbackDates');

            const addFeedbackDates = this.state.isAddFeedbackDatesShowed&&<AddFeedbackDates labId={this.props.location.state.labId}/>;

            return (
                <div className="schedule">
                    {addFeedbackDates}
                    <div className="schedule__addFeedbackDates">
                        <button className="schedule__addFeedbackDatesBtn"
                                onClick = { () =>
                                    this.setState({
                                        isAddFeedbackDatesShowed: !this.state.isAddFeedbackDatesShowed
                                    })}
                        >
                            {addFeedbackDatesBtnName}
                        </button>
                    </div>
                    {lectureElements}
                </div>
            )
        }
    }
}
export default  withRouter(translate('translations')(Schedule))
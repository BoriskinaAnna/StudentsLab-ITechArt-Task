import React, {Component} from 'react';
import Lecture from '../lecture/';
import './scheduleStyle.scss';
import {translate} from "react-i18next";
import AddFeedbackDates from '../addFeedbackDates';


class Schedule extends Component {

    constructor(){
        super();
        this.state = {
            isAddFeedbackDatesShowed: false
        }
    }

    render() {
        const {schedule, showChangeLecture, t} = this.props;

        const lectureElements = schedule.map((lecture, index) =>
            <div key = {index} className="schedule__lecture">
                <Lecture lecture={lecture} showChangeLecture={showChangeLecture}/>
            </div>
        );

        const addFeedbackDatesBtnName = this.state.isAddFeedbackDatesShowed? t('add'):t('addFeedbackDates');

        const addFeedbackDates = this.state.isAddFeedbackDatesShowed&&<AddFeedbackDates/>;

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
export default translate('translations')(Schedule)
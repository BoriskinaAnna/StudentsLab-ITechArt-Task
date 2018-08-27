import React, {Component} from 'react';
import Lecture from '../lecture/';
import './scheduleStyle.scss';
import {translate} from 'react-i18next';
import AddFeedbackDates from '../addFeedbackDates';
import scheduleService from '../services/scheduleService';
import {Route, withRouter} from 'react-router-dom';
import Header from "../header";
import Footer from "../footer";
import userService from "../services/userService";


let schedule;

class Schedule extends Component {

    constructor(props){
        super(props);
        this.state = {
            isAddFeedbackDatesShowed: false,
            isScheduleLoaded: false
        };
    }

    render() {
        if(!this.state.isScheduleLoaded) {

            scheduleService.getScheduleFromServer(this.props.location.state.labId)
                .then(data =>{
                    schedule = data;
                    this.setState({
                        isScheduleLoaded: true
                    });
                });

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

            const addFeedbackDatesBtn = userService.getCurrentUser().id !== null
                && userService.getCurrentUser().role !== 'Student'
                &&  <button className="schedule__addFeedbackDatesBtn"
                            onClick = { () =>
                                this.setState({
                                    isAddFeedbackDatesShowed: !this.state.isAddFeedbackDatesShowed
                                })}
                >
                    {addFeedbackDatesBtnName}
                </button>;

            const addFeedbackDates = this.state.isAddFeedbackDatesShowed&&<AddFeedbackDates labId={this.props.location.state.labId}/>;

            return (
                <React.Fragment>
                    <Route exact path="/schedule"
                           component={() => (<Header labId={this.props.location.state.labId}/>)}
                    />

                    <div className="schedule">
                        {addFeedbackDates}
                        <div className="schedule__addFeedbackDates">
                            {addFeedbackDatesBtn}
                        </div>
                        {lectureElements}
                    </div>

                    <Route exact path="/schedule" component={() => (<Footer/>)}/>
                </React.Fragment>
            )
        }
    }
}
export default  withRouter(translate('translations')(Schedule))
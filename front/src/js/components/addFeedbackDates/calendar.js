import React from 'react';
import {Component} from 'react';
import Calendar from 'react-calendar';


class CalendarComponent extends Component {

    render() {
        const {onChangeFunction, value} = this.props;

        return (
            <Calendar
                onChange={onChangeFunction}
                showWeekNumbers
                value={value}
                className="feedbackDates__calendar"
            />
        )
    }
}

export default CalendarComponent
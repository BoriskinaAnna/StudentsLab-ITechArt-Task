import React, {Component} from 'react';
import Lecture from '../lecture/';
import './scheduleStyle.scss';


class Index extends Component {

    render() {
        const {schedule, showChangeLecture} = this.props;
        const lectureElements = schedule.map((lecture, index) =>
            <div key = {index} className="schedule__lecture">
                <Lecture lecture={lecture} showChangeLecture={showChangeLecture}/>
            </div>
        );

        return (
            <div className="schedule">
                {lectureElements}
            </div>
        )
    }
}
export default Index
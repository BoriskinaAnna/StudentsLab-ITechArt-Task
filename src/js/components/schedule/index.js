import React, {Component} from 'react';
import Lecture from 'js/components/lecture/';
import 'js/components/schedule/scheduleStyle.scss';


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
import React, {Component} from 'react';
import 'js/components/lecture/lectureStyle.scss';
import { translate } from 'react-i18next';


class Index extends Component {

    constructor(){
        super();
        this.state = {
            isChange: false
        };
        this.showChange = this.showChange.bind(this);
    }

    showChange(){
        this.setState({ isChange: true })
        console.log('1');
    }

    render() {
        const {lecture, t} = this.props;

        const duration =  this.state.isChange ?
            <input value={lecture.lectureDuration}/>:
            <span className="lecture__duration">{lecture.lectureDuration}</span>;
        const time =  this.state.isChange ?
            <input value={lecture.lectureTime}/>:
            <h5 className="lecture__time">{lecture.lectureTime}</h5>;
        const lecturer =  this.state.isChange ?
            <input value={lecture.lectureLecturer}/>:
            <h5 className="lecture__lecturer"> {lecture.lectureLecturer}</h5>;
        const place =  this.state.isChange ?
            <input value={lecture.lecturePlace}/>:
            <h5 className="lecture__place">{lecture.lecturePlace}</h5>;

        return (
            <div className="lecture">
                <div className="lecture__date">
                    <h3 className="lecture__day">
                       {lecture.lectureDay}
                    </h3>
                    <h4>
                        {lecture.lectureMonth}
                    </h4>
                </div>
                <div className="lecture__theme">
                    <h4>{lecture.lectureTheme}</h4>
                    <span>
                        {t('duration')}: {duration}
                    </span>
                </div>
                <div>
                    <span className="titles"> {t('time')}</span>
                    :
                    {time}
                </div>
                <div>
                    <span className="titles">  {t('lecturer')}</span>
                    :
                    {lecturer}
                </div>
                <div>
                    <span className="titles">{t('place')}</span>
                    :
                    {place}
                </div>
                <button onClick={this.showChange}>
                    \\
                </button>
            </div>
        )
    }
}
export default translate('translations')(Index)
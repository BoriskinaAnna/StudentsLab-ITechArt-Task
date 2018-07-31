import React, {Component} from 'react';
import './lectureStyle.scss';
import { translate } from 'react-i18next';


class Index extends Component {

    render() {
        const {lecture, t, showChangeLecture} = this.props;

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
                        {t('duration')}
                        :
                        <span className="lecture__duration">{lecture.lectureDuration}</span>;
                    </span>
                </div>
                <div>
                    <span className="titles"> {t('time')}</span>
                    :
                    <h5 className="lecture__time">{lecture.lectureTime}</h5>
                </div>
                <div>
                    <span className="titles">  {t('lecturer')}</span>
                    :
                    <h5 className="lecture__lecturer"> {lecture.lectureLecturer}</h5>
                </div>
                <div>
                    <span className="titles">{t('place')}</span>
                    :
                    <h5 className="lecture__place">{lecture.lecturePlace}</h5>
                </div>
                <button onClick={showChangeLecture} className="lecture__changeImage"/>
            </div>
        )
    }
}
export default translate('translations')(Index)
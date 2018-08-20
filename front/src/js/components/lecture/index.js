import React, {Component} from 'react';
import './lectureStyle.scss';
import { translate } from 'react-i18next';


class Index extends Component {

    render() {
        const {lecture, t, showChangeLecture } = this.props;
        const monthNames = [t('january'), t('february'), t('march'), t('april'), t('may'), t('june'),
            t('july'), t('august'), t('september'), t('october'), t('november'), t('december')
        ];
        const lectureDate = new Date(lecture.dateTime);
        const lectureDuration = new Date(lecture.duration);
        return (
            <div className="lecture">
                <div className="lecture__date">
                    <h3 className="lecture__day">
                        {lectureDate.getDate()}
                    </h3>
                    <h4>
                        {monthNames[lectureDate.getMonth()]}
                    </h4>
                </div>
                <div className="lecture__theme">
                    <h4>{lecture.theme}</h4>
                    <span>
                        {t('duration')}
                        :
                        <span className="lecture__duration">
                            {lectureDuration.getHours()}
                            :
                            {lectureDuration.getMinutes()}
                        </span>
                    </span>
                </div>
                <div>
                    <span className="titles"> {t('time')}</span>
                    :
                    <h5 className="lecture__time">
                        {lectureDate.getHours()}
                        :
                        {lectureDate.getMinutes()}
                    </h5>
                </div>
                <div>
                    <span className="titles">  {t('lecturer')}</span>
                    :
                    <h5 className="lecture__lecturer"> {lecture.lectorFirstName + ' ' + lecture.lectorLastName}</h5>
                </div>
                <div>
                    <span className="titles">{t('place')}</span>
                    :
                    <h5 className="lecture__place">{lecture.place}</h5>
                </div>
                <button onClick={showChangeLecture} className="lecture__changeImage"/>
            </div>
        )
    }
}
export default translate('translations')(Index)
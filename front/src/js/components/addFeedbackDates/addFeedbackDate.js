import React, {Component} from 'react';
import './addFeedbackDatesStyle.scss';
import {translate} from "react-i18next";


class AddFeedbackDate extends Component {

    constructor(){
        super();

    }

    render() {
        const {t} = this.props;

        return (
            <div>

            </div>
        )
    }
}
export default translate('translations')(AddFeedbackDate)
import React, {Component} from 'react';
import './addFeedbackDatesStyle.scss';
import {translate} from "react-i18next";
import redirectAwareFetch from "../userService/redirectAwareFetch";
import {FetchResultTypeEnum} from "../userService/fetchResultTypeEnum";
import userService from "../userService";


class AddFeedbackDates extends Component {

    constructor(){
        super();

    }

    getOptions = (method) =>{
        return {
            method: method,
            headers: {
                'Content-Type': 'application/json'
            }
        };
    };

    getFeedbackDates = () =>{
        redirectAwareFetch(`/api/account/getInfoAboutCurrentUser/`, this.getOptions('GET'))
            .then(result =>{
                    userService.initializeNewUser(
                        result.data.email,
                        result.data.firstName,
                        result.data.lastName,
                        result.data.id,
                        result.data.role
                    );
                }
            );
    };

    render() {
        const {t} = this.props;

        return (
            <div className="addFeedbackDates">
                <div>

                </div>
            </div>
        )
    }
}
export default translate('translations')(AddFeedbackDates)
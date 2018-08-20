import React, {Component} from 'react';
import './addFeedbackDatesStyle.scss';
import {translate} from 'react-i18next';
import redirectAwareFetch from '../userService/redirectAwareFetch';
import FeedBackDate from './addFeedbackDate';

let feedBackDates;

class AddFeedbackDates extends Component {

    constructor(props){
        super(props);

        this.state = {
            isDataLoaded: false
        };

        this.getFeedbackDates(this.props.labId)
            .then(data =>{
                feedBackDates = data;
                this.setState({
                    isDataLoaded: true
                })
            });
    }

    getOptions = (method) =>{
        return {
            method: method,
            headers: {
                'Content-Type': 'application/json'
            }
        };
    };

    getFeedbackDates = (Id) =>{
        redirectAwareFetch(`/api/lab/getFeedbackDates/${Id}`, this.getOptions('GET'))
            .then(result =>{
                   return result.data;
                }
            );
    };

    render() {

        if(!this.state.isDataLoaded) {
            return null;
        }
        else{
            const {t} = this.props;

            const dateElements = feedBackDates.map((feedBackDate, index) =>
                <div key = {index} className="feedback__date">
                    <FeedBackDate feedBackDate={feedBackDate}/>
                </div>
            );

            return (
                <ol className="addFeedbackDates">
                    <li>{dateElements}</li>
                </ol>
            )
        }
    }
}
export default translate('translations')(AddFeedbackDates)
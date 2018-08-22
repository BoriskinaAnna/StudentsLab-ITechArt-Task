import React, {Component} from 'react';
import {translate} from 'react-i18next';
import feedbackService from '../services/feedbackService';
import userService from "../services/userService";
import {withRouter} from 'react-router-dom';
import './feedbackStyle.scss';


let feedback;
let students;
let questions;
let answers;

class Feedback extends Component {

    constructor(){
        super();
        this.state = {
            currentQuestionId: -1,
            answerValue: '',
            isStudentsLoaded: false,
            isQuestionsLoaded: false,
            isUserSelectError: false,
            studentId: undefined
        }
    }

    answerValueChange = (evt) =>{
        this.setState({
            answerValue: evt.target.value
        })
    };

    getAnswer = () =>{
        feedbackService.getFeedbackAnswerFromServer(
            this.state.studentId,
            userService.getCurrentUser().id,
            this.props.location.state.feedbackDateId,
            this.state.currentQuestionId
        )
            .then(data =>{
                feedback = data;
                this.setState({
                    isDataLoaded: true
                })
            });

    };

    render() {
        if(!(this.state.isQuestionsLoaded&&this.state.isStudentsLoaded)){

            feedbackService.getStudentByMentorIdFromServer( userService.getCurrentUser().id)
                .then(data =>{
                    students = data;
                    this.setState({
                        isStudentsLoaded: true
                    })
                });
            feedbackService.getFeedbackQuestionsFromServer( this.props.location.state.labId)
                .then(data =>{
                    questions = data;
                    this.setState({
                        isQuestionsLoaded: true
                    })
                });

            return null;
        }
        else{
            const {t} = this.props;
            console.log(questions, students);
            const questionElements = questions.map((questionElement, index) => {
                if( questionElement.id === this.state.currentQuestionId) {
                    return <li key={index} className="feedback">
                        <div className="feedback__question"
                        >
                            {questionElement.question}
                        </div>
                        <textarea className="feedback__answer" value={this.state.answerValue} onChange={this.answerValueChange}/>
                    </li>
                }
                else{
                    return <li key={index} className="feedback">
                        <div className="feedback__question"
                             onClick={() => {
                                 console.log(this.state.studentId);
                                 if(this.state.studentId !== undefined) {
                                     this.setState({currentQuestionId: questionElement.id});
                                     this.getAnswer();
                                 }
                                 else{
                                     this.setState({isUserSelectError: true});
                                 }
                             }}
                        >
                            {questionElement.question}
                        </div>
                    </li>
                }

            });


            const studentElement = students.map((studentElement, index) =>{
                return <option key={index}  onClick={()=>this.setState({studentId: studentElement.id})} value={this.state.studentId}>
                    {studentElement.firstName} {studentElement.lastName}
                </option>
            });

            const chooseUser = this.state.isUserSelectError&&<span>Please, choose user</span>;

            return (
                <div className="feedbackContainer">
                    <select>
                        {studentElement}
                    </select>
                    {chooseUser}
                    <ol>
                        {questionElements}
                    </ol>
                </div>
            )
        }
    }
}
export default withRouter(translate('translations')(Feedback))
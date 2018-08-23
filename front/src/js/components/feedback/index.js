import React, {Component} from 'react';
import {translate} from 'react-i18next';
import feedbackService from '../services/feedbackService';
import userService from "../services/userService";
import {withRouter} from 'react-router-dom';
import './feedbackStyle.scss';


let answer, questions, students,
    feedback = {questionId: [], answers: []},
    studentId = undefined;


class Feedback extends Component {

    constructor(){
        super();
        this.state = {
            currentQuestionId: undefined,
            answerValue: '',
            isStudentsLoaded: false,
            isQuestionsLoaded: false,
            isAnswerLoaded: false,
            isUserSelectError: false
        }
    }



    answerValueChange = (evt) =>{
        this.setState({
            answerValue: evt.target.value
        })
    };

    getAnswer = (questionId) =>{
        feedbackService.getFeedbackAnswerFromServer(
            studentId,
            userService.getCurrentUser().id,
            this.props.location.state.feedbackDateId,
            questionId
        )
            .then(data =>{
                answer = data;
                this.setState({
                    isAnswerLoaded: true,
                    answerValue: answer.answer
                })
            });
    };

    selectChange = event =>{
        studentId = event.target.value;
        this.setState({currentQuestionId: undefined});
    };

    saveFeedback = () =>{

        feedback.questionId.push(this.state.currentQuestionId);
        feedback.answers.push(this.state.answerValue);

        feedbackService.saveFeedback(
            feedback,
            userService.getCurrentUser().id,
            this.props.location.state.feedbackDateId,
            studentId
        );

        this.setState({currentQuestionId: undefined});

    } ;

    render() {

        if (!(this.state.isQuestionsLoaded&&this.state.isStudentsLoaded)){

            if (!this.state.isStudentsLoaded){
                feedbackService.getStudentByMentorIdFromServer( userService.getCurrentUser().id)
                    .then(data =>{
                        students = data;
                        this.setState({
                            isStudentsLoaded: true
                        })
                    });
            }

            if (!this.state.isQuestionsLoaded){
                feedbackService.getFeedbackQuestionsFromServer( this.props.location.state.labId)
                    .then(data =>{
                        questions = data;
                        this.setState({
                            isQuestionsLoaded: true
                        })
                    });
            }

            return null;
        }
        else{
            const {t} = this.props;

            const questionElements = questions.map((questionElement, index) => {

                if( questionElement.questionId === this.state.currentQuestionId) {
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
                                 if (studentId !== undefined) {
                                     const changedAnswer = feedback.questionId.findIndex((value)=> value === questionElement.questionId);

                                     if (changedAnswer !== -1){
                                         this.setState({
                                             answerValue: feedback.answers[changedAnswer]
                                         })
                                     }
                                     else {
                                         this.getAnswer(questionElement.questionId);
                                     }

                                     if (this.state.currentQuestionId !== undefined){
                                         feedback.questionId.push(this.state.currentQuestionId);
                                         feedback.answers.push(this.state.answerValue);
                                     }
                                     this.setState({currentQuestionId: questionElement.questionId});
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
                if(index === 0){

                }
                return <option key={index} value={studentElement.id}>
                   {studentElement.firstName} {studentElement.lastName}
                </option>
            });

            const chooseUser = this.state.isUserSelectError&&<span>Please, choose user</span>;

            return (
                <div className="feedbackContainer">
                    <select onChange={this.selectChange} >
                        <option value={undefined}/>
                        {studentElement}
                    </select>
                    {chooseUser}
                    <ol>
                        {questionElements}
                    </ol>
                    <button onClick={this.saveFeedback}>
                        {t('save')}
                    </button>
                </div>
            )
        }
    }
}
export default withRouter(translate('translations')(Feedback))
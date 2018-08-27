import React, {Component} from 'react';
import {translate} from 'react-i18next';
import feedbackService from '../services/feedbackService';
import userService from "../services/userService";
import {Route, withRouter} from 'react-router-dom';
import './feedbackStyle.scss';
import Header from "../header";
import Footer from "../footer";


let answers, questions, students,
    feedback = {questionId: [], answers: []};


class Feedback extends Component {

    constructor(){
        super();
        this.state = {
            currentQuestionId: undefined,
            answerValue: '',
            isStudentsLoaded: false,
            isQuestionsLoaded: false,
            isAnswersLoaded: false,
            isUserSelectError: false,
            studentId: undefined
        }
    }

    answerValueChange = (evt) =>{
        this.setState({
            answerValue: evt.target.value
        })
    };

    getAnswers = (questionId) =>{

        feedbackService.getFeedbackAnswersFromServer(
            this.state.studentId,
            userService.getCurrentUser().id,
            this.props.location.state.feedbackDateId,
        )
            .then(data =>{
                answers = data;
                const currentAnswerIndex = answers.findIndex((value)=> value.questionId === questionId);

                if (currentAnswerIndex !== -1){
                    this.setState({
                        isAnswersLoaded: true,
                        answerValue: answers[currentAnswerIndex].answer
                    })
                }
                else{
                    this.setState({
                        isAnswersLoaded: true
                    })
                }

            });
    };

    selectChange = event =>{
        this.setState({
            studentId: event.target.value,
            isAnswersLoaded: false,
            currentQuestionId: undefined,
            isUserSelectError: false
        });
        feedback = {questionId: [], answers: []};
        answers = undefined;
    };

    saveFeedback = () =>{


        answers = undefined;

//repeat
        const changedAnswerIndex = feedback.questionId.findIndex((value)=> value === this.state.currentQuestionId);
        if (changedAnswerIndex !== -1){
            feedback.questionId[changedAnswerIndex] = this.state.currentQuestionId;
            feedback.answers[changedAnswerIndex] = this.state.answerValue;
        }
        else{
            feedback.questionId.push(this.state.currentQuestionId);
            feedback.answers.push(this.state.answerValue);
        }



        feedbackService.saveFeedback(
            feedback,
            userService.getCurrentUser().id,
            this.props.location.state.feedbackDateId,
            this.state.studentId
        );
        feedback = {questionId: [], answers: []};
        this.setState({currentQuestionId: undefined});

    } ;

    render() {

        if (!(this.state.isQuestionsLoaded && this.state.isStudentsLoaded)){

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
                    return <li key={index}>
                        <div className="feedback__text"
                        >
                            {questionElement.question}
                        </div>
                        <textarea className="feedback__answer" value={this.state.answerValue} onChange={this.answerValueChange}/>
                    </li>
                }
                else{
                    return <li key={index}>
                        <div className="feedback__text"
                             onClick={() => {
                                 if (this.state.studentId !== undefined) {
                                     const changeAnswerIndex = feedback.questionId.findIndex((value)=> value === questionElement.questionId );

                                     if (changeAnswerIndex !== -1){
                                         this.setState({
                                             answerValue: feedback.answers[changeAnswerIndex]
                                         })
                                     }
                                     else {
                                         if(answers === undefined) {
                                             this.getAnswers(questionElement.questionId);
                                         }
                                         else{
                                             const currentAnswerIndex = answers.findIndex((value)=> value.questionId ===  questionElement.questionId);

                                             if (currentAnswerIndex !== -1){
                                                 this.setState({
                                                     answerValue: answers[currentAnswerIndex].answer
                                                 })
                                             }
                                             else{
                                                 this.setState({
                                                     answerValue: ''
                                                 });
                                             }
                                         }
                                     }

                                     if (this.state.currentQuestionId !== undefined){
                                         const changedAnswerIndex = feedback.questionId.findIndex((value)=> value === this.state.currentQuestionId);
                                         if (changedAnswerIndex !== -1){
                                             feedback.questionId[changedAnswerIndex] = this.state.currentQuestionId;
                                             feedback.answers[changedAnswerIndex] = this.state.answerValue;
                                         }
                                         else{
                                             feedback.questionId.push(this.state.currentQuestionId);
                                             feedback.answers.push(this.state.answerValue);
                                         }
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
                    if(this.state.studentId === undefined){
                        this.setState({
                            studentId: studentElement.id
                        });
                    }
                }

                return <option key={index} value={studentElement.id}>
                   {studentElement.firstName} {studentElement.lastName}
                </option>
            });

            const chooseUser = this.state.isUserSelectError&&<span>{t('inputCanNotBeEmpty')}</span>;

            return (
                <React.Fragment>
                    <Route exact path="/feedback" component={() => (<Header/>)}/>

                    <div className="feedbackContainer">
                        <div className="feedback">
                            <span className="feedback__text">{t('chooseStudent')}</span>

                            <select className="feedback__chooseStudent" onChange={this.selectChange} >
                                {studentElement}
                            </select>

                            {chooseUser}

                            <ol className="feedback__questions">
                                {questionElements}
                            </ol>

                            <button className="feedback__saveBtn" onClick={this.saveFeedback}>
                                {t('save')}
                            </button>
                        </div>
                    </div>

                    <Route exact path="/feedback" component={() => (<Footer/>)}/>
                </React.Fragment>
            )
        }
    }
}
export default withRouter(translate('translations')(Feedback))
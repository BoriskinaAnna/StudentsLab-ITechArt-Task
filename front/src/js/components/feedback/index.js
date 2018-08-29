import React, {Component} from 'react';
import {translate} from 'react-i18next';
import feedbackService from '../services/feedbackService';
import userService from '../services/userService';
import {Route, withRouter} from 'react-router-dom';
import './feedbackStyle.scss';
import Header from '../header';
import Footer from '../footer';


class Feedback extends Component {

    answers = [];
    questions = [];
    students = [];
    feedback = {questionId: [], answers: []};

    currentUser = {
        id: undefined
    };

    constructor(){
        super();

        this.state = {
            currentQuestionId: undefined,
            answerValue: '',
            isStudentsLoaded: false,
            isQuestionsLoaded: false,
            isAnswersLoaded: false,
            isUserSelectError: false,
            studentId: undefined,
            isCurrentUserInfoLoaded: false
        }
    }

    answerValueChange = (evt) =>{
        this.setState({
            answerValue: evt.target.value
        })
    };

    getAnswers = (questionId) =>{
        feedbackService.getFeedbackAnswers(
            this.state.studentId,
            this.currentUser.id,
            this.props.location.state.feedbackDateId,
        )
            .then(data =>{
                this.answers = data;
                this.setAnswerValue(questionId);
                this.setState({
                    isAnswersLoaded: true
                });
            });
    };

    selectOnChange = event =>{
        this.setState({
            studentId: event.target.value,
            isAnswersLoaded: false,
            currentQuestionId: undefined,
            isUserSelectError: false
        });
        this.feedback = {questionId: [], answers: []};
        this.answers = [];
    };

    upsertFeedbackAnswers = () =>{
        this.answers = [];
        this.upsertFeedbackAnswersLocal();
        feedbackService.upsertFeedbackAnswers(
            this.feedback,
            this.currentUser.id,
            this.props.location.state.feedbackDateId,
            this.state.studentId
        );
        this.feedback = {questionId: [], answers: []};
        this.setState({currentQuestionId: undefined});
    } ;

    getCurrentUserInfo = () =>{
        userService.getCurrentUserInfo()
            .then((data) => {
                this.setState({
                    isCurrentUserInfoLoaded: true
                });
                this.currentUser.id = data.id;
            });
    };

    getStudentByMentorId = () =>{
        feedbackService.getStudentByMentorId(this.currentUser.id)
            .then(data =>{
                this.students = data;
                this.setState({
                    isStudentsLoaded: true
                })
            });
    };

    getFeedbackQuestions = () =>{
        feedbackService.getFeedbackQuestions(this.props.location.state.labId)
            .then(data =>{
                this.questions = data;
                this.setState({
                    isQuestionsLoaded: true
                })
            });
    };

    setAnswerValue = currentQuestionId =>{
        const changeAnswerIndex = this.feedback.questionId.findIndex((value)=>
            value === currentQuestionId
        );

        if (changeAnswerIndex !== -1){
            this.setState({
                answerValue: this.feedback.answers[changeAnswerIndex]
            })
        }
        else {
            if (this.answers.length === 0) {
                this.getAnswers(currentQuestionId);
            }
            else {
                const currentAnswerIndex = this.answers.findIndex((value)=>
                    value.questionId ===  currentQuestionId
                );

                if (currentAnswerIndex !== -1){
                    this.setState({
                        answerValue: this.answers[currentAnswerIndex].answer
                    })
                }
                else {
                    this.setState({
                        answerValue: ''
                    });
                }
            }
        }
    };

    upsertFeedbackAnswersLocal = () =>{
        const changedAnswerIndex = this.feedback.questionId.findIndex((value)=>
            value === this.state.currentQuestionId
        );
        if (changedAnswerIndex !== -1){
            this.feedback.questionId[changedAnswerIndex] = this.state.currentQuestionId;
            this.feedback.answers[changedAnswerIndex] = this.state.answerValue;
        }
        else{
            this.feedback.questionId.push(this.state.currentQuestionId);
            this.feedback.answers.push(this.state.answerValue);
        }
    };

    questionOnClick = currentQuestionId =>{
        if (this.state.studentId !== undefined){
           this.setAnswerValue(currentQuestionId);
           if (this.state.currentQuestionId !== undefined) {
                this.upsertFeedbackAnswersLocal();
           }
           this.setState({currentQuestionId: currentQuestionId});
        }
        else {
            this.setState({isUserSelectError: true});
        }
    };

    render() {

        if (!(this.state.isQuestionsLoaded && this.state.isStudentsLoaded && this.state.isCurrentUserInfoLoaded)){
            if (!this.state.isCurrentUserInfoLoaded){
               this.getCurrentUserInfo();
            }
            if (!this.state.isStudentsLoaded && this.currentUser.id !== undefined ){
               this.getStudentByMentorId();
            }
            if (!this.state.isQuestionsLoaded){
               this.getFeedbackQuestions();
            }

            return null;
        }
        else {
            const {t} = this.props;

            const questionElements = this.questions.map((questionElement, index) => {

                if( questionElement.questionId === this.state.currentQuestionId) {
                    return <li key={index}>
                        <div className="feedback__text">
                            {questionElement.question}
                            </div>
                        <textarea className="feedback__answer"
                                  value={this.state.answerValue}
                                  onChange={this.answerValueChange}
                        />
                    </li>
                }
                else {
                    return <li key={index}>
                        <div className="feedback__text"
                             onClick={() => this.questionOnClick(questionElement.questionId)}
                        >
                            {questionElement.question}
                        </div>
                    </li>
                }
            });

            const feedbackQuestions = this.questions.length === 0 ? t('nonFeedbackQuestions'): questionElements;

            const studentElement = this.students.map((studentElement, index) =>{
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

            const userNotSelected = this.state.isUserSelectError
                && <span>{t('inputCanNotBeEmpty')}</span>;

            return (
                <React.Fragment>
                    <Route exact path="/feedback" component={() => (<Header/>)}/>

                    <div className="feedbackContainer">
                        <div className="feedback">
                            <span className="feedback__text">{t('chooseStudent')}</span>

                            <select className="feedback__chooseStudent" onChange={this.selectOnChange} >
                                {studentElement}
                            </select>

                            {userNotSelected}

                            <ol className="feedback__questions">
                                {feedbackQuestions}
                            </ol>

                            <button className="feedback__saveBtn" onClick={this.upsertFeedbackAnswers}>
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
import React, {Component} from 'react';
import {translate} from 'react-i18next';
import feedbackService from '../services/feedbackService';
import userService from "../services/userService";
import {Route, withRouter} from 'react-router-dom';
import './feedbackStyle.scss';
import Header from "../header";
import Footer from "../footer";


let answer, questions, students,
    feedback = {questionId: [], answers: []};


class Feedback extends Component {

    constructor(){
        super();
        this.state = {
            currentQuestionId: undefined,
            answerValue: '',
            isStudentsLoaded: false,
            isQuestionsLoaded: false,
            isAnswerLoaded: false,
            isUserSelectError: false,
            studentId: undefined
        }
    }



    answerValueChange = (evt) =>{
        this.setState({
            answerValue: evt.target.value
        })
    };

    getAnswer = (questionId) =>{
        feedbackService.getFeedbackAnswerFromServer(
            this.state.studentId,
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
        this.setState({
            studentId: event.target.value,
            isAnswerLoaded: false,
            currentQuestionId: undefined,
            isUserSelectError: false
        });
        feedback = {questionId: [], answers: []};
    };

    saveFeedback = () =>{

        feedback.questionId.push(this.state.currentQuestionId);
        feedback.answers.push(this.state.answerValue);

        feedbackService.saveFeedback(
            feedback,
            userService.getCurrentUser().id,
            this.props.location.state.feedbackDateId,
            this.state.studentId
        );

        this.setState({currentQuestionId: undefined});

        feedback = {questionId: [], answers: []};

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
                                 if (this.state.studentId !== undefined) {
                                     const changedAnswerIndex = feedback.questionId.findIndex((value)=> value === questionElement.questionId);

                                     if (changedAnswerIndex !== -1){
                                         this.setState({
                                             answerValue: feedback.answers[changedAnswerIndex]
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
            console.log(students);
            const studentElement = students.map((studentElement, index) =>{
                //if(index === 0){
              //      this.setState({
                //        studentId: studentElement.id
                 //   });
              //  }
                return <option key={index} value={studentElement.id}>
                   {studentElement.firstName} {studentElement.lastName}
                </option>
            });

            const chooseUser = this.state.isUserSelectError&&<span>Please, choose user</span>;

            return (
                <React.Fragment>
                    <Route exact path="/feedback" component={() => (<Header/>)}/>

                    <div className="feedbackContainer">
                        <select onChange={this.selectChange} >
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

                    <Route exact path="/feedback" component={() => (<Footer/>)}/>
                </React.Fragment>
            )
        }
    }
}
export default withRouter(translate('translations')(Feedback))
import redirectAwareFetch from "../userService/redirectAwareFetch";


class FeedbackService{

    getOptions = () =>{
        return {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                "Accept": "application/json"
            }
        };
    };

    getStudentByMentorIdFromServer = (mentorId) =>{
        console.log(1);
        return redirectAwareFetch(`/api/lab/GetMentorStudents/${mentorId}`, this.getOptions())
            .then(result =>{
                return result.data;
            })
    };

    getFeedbackQuestionsFromServer = (labId) =>{
        console.log(2);
        return redirectAwareFetch(`/api/feedback/getFeedbackQuestions/${labId}`, this.getOptions())
            .then(result =>{
                return result.data;
            })
    };

    getFeedbackAnswerFromServer = (studentId, mentorId, feedbackDateId, feedbackQuestionId) =>{
        console.log(3);
        return redirectAwareFetch(`/api/feedback/GetFeedbackAnswer/${studentId}/${mentorId}/${feedbackDateId}/${feedbackQuestionId}`, this.getOptions())
            .then(result =>{
                return result.data;
            })
    };

    getPostOptions = (feedback, mentorId, dateId, studentId) =>{
        console.log(4);
        return {
            method: 'POST',
            body: JSON.stringify({
                questionId: feedback.questionId,
                answers: feedback.answers,
                mentorId: mentorId,
                feedbackDateId: dateId,
                studentId: studentId
            }),
            headers: {
                'Content-Type': 'application/json',
                "Accept": "application/json"
            }
        };
    };

    saveFeedback = (feedback, mentorId, dateId, studentId) =>{
        console.log(5);
        redirectAwareFetch(`/api/feedback/AddOrUpdateFeedbackAnswer/`, this.getPostOptions(feedback, mentorId, dateId, studentId));
        console.log(10);

    };
}

const feedbackService = new FeedbackService();

export default feedbackService;
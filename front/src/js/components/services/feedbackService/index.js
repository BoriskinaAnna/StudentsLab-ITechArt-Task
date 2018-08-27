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
        return redirectAwareFetch(`/api/lab/GetMentorStudents/${mentorId}`, this.getOptions())
            .then(result =>{
                console.log(result);
                return result.data;
            })
    };

    getFeedbackQuestionsFromServer = (labId) =>{
        return redirectAwareFetch(`/api/feedback/getFeedbackQuestions/${labId}`, this.getOptions())
            .then(result =>{
                return result.data;
            })
    };

    getFeedbackAnswersFromServer = (studentId, mentorId, feedbackDateId) =>{
        return redirectAwareFetch(`/api/feedback/getFeedbackAnswers/${studentId}/${mentorId}/${feedbackDateId}`, this.getOptions())
            .then(result =>{
                return result.data;
            })
    };

    getPostOptions = (feedback, mentorId, dateId, studentId) =>{
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
        redirectAwareFetch(`/api/feedback/AddOrUpdateFeedbackAnswer/`, this.getPostOptions(feedback, mentorId, dateId, studentId));
    };
}

const feedbackService = new FeedbackService();

export default feedbackService;
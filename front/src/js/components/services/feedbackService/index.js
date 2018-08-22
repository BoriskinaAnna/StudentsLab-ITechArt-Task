import redirectAwareFetch from "../userService/redirectAwareFetch";


class FeedbackService{

    getOptions = () =>{
        return {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        };
    };

    getStudentByMentorIdFromServer = (mentorId) =>{
        return redirectAwareFetch(`/api/lab/GetMentorStudents/${mentorId}`, this.getOptions())
            .then(result =>{
                return result.data;
            })
    };

    getFeedbackQuestionsFromServer = (labId) =>{
        return redirectAwareFetch(`/api/lab/getFeedbackQuestions/${labId}`, this.getOptions())
            .then(result =>{
                return result.data;
            })
    };

    getFeedbackAnswerFromServer = (studentId, mentorId, feedbackDateId, feedbackQuestionId) =>{
        return redirectAwareFetch(`/api/lab/GetFeedbackAnswer//${studentId}/${mentorId}/${feedbackDateId}/${feedbackQuestionId}`, this.getOptions())
            .then(result =>{
                return result.data;
            })
    };
}

const feedbackService = new FeedbackService();

export default feedbackService;
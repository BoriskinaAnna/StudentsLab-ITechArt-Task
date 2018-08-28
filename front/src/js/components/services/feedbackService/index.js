import redirectAwareFetch from '../userService/redirectAwareFetch';


class FeedbackService{

    headers = {
        'Content-Type': 'application/json',
        "Accept": 'application/json'
    };

    getHttpGetOptions = () =>{
        return {
            method: 'GET',
            headers: this.headers
        };
    };

    getAddFeedbackDateOptions = (date, labId, id) =>{
        return {
            method: 'POST',
            body: JSON.stringify({
                date: date,
                labId: labId,
                id: id
            }),
            headers: this.headers
        }
    };

    getSaveFeedbackOptions = (feedback, mentorId, dateId, studentId) =>{
        return {
            method: 'POST',
            body: JSON.stringify({
                questionId: feedback.questionId,
                answers: feedback.answers,
                mentorId: mentorId,
                feedbackDateId: dateId,
                studentId: studentId
            }),
            headers: this.headers
        };
    };

    getRequest = (url) =>{
        return redirectAwareFetch(url, this.getHttpGetOptions())
            .then(result =>{
                return result.data;
            })
    };

    addOrUpdateFeedbackDate = (date, labId, id, url) =>{
        return redirectAwareFetch(url, this.getAddFeedbackDateOptions(new Date(date).toLocaleDateString(), labId, id))
    };

    getFeedbackDates = (labId) =>{
        return this.getRequest(`/api/feedback/getFeedbackDates/${labId}`);
    };

    getStudentByMentorId = (mentorId) =>{
        return this.getRequest(`/api/lab/getMentorStudents/${mentorId}`);
    };

    getFeedbackQuestions = (labId) =>{
        return this.getRequest(`/api/feedback/getFeedbackQuestions/${labId}`);
    };

    getFeedbackAnswers = (studentId, mentorId, feedbackDateId) =>{
        return this.getRequest(`/api/feedback/getFeedbackAnswers/${studentId}/${mentorId}/${feedbackDateId}`);
    };

    saveFeedback = (feedback, mentorId, dateId, studentId) =>{
        redirectAwareFetch(`/api/feedback/putFeedbackAnswer`,
            this.getSaveFeedbackOptions(feedback, mentorId, dateId, studentId)
        );
    };
}

const feedbackService = new FeedbackService();

export default feedbackService;
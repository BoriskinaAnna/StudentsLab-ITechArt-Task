import redirectAwareFetch from '../userService/redirectAwareFetch';


class FeedbackService{

    headers = {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
    };

    getHttpGetOptions = () =>{
        return {
            method: 'GET',
            headers: this.headers
        };
    };

    getAddFeedbackDateOptions = (date, labId, id) =>{
        return {
            method: 'PUT',
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
            method: 'PUT',
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
            .catch(error => console.log(error));
    };

    upsertFeedbackDate = (date, labId, id) =>{
        return redirectAwareFetch('/api/labs/feedbacks/dates', this.getAddFeedbackDateOptions(new Date(date).toLocaleDateString(), labId, id))
    };

    getFeedbackDates = (labId) =>{
        return this.getRequest(`/api/labs/${labId}/feedbacks/dates`);
    };

    getStudentByMentorId = (mentorId) =>{
        return this.getRequest(`/api/labs/mentors/${mentorId}/students`);
    };

    getFeedbackQuestions = (labId) =>{
        return this.getRequest(`/api/labs/${labId}/feedbacks/questions`);
    };

    getFeedbackAnswers = (studentId, mentorId, feedbackDateId) =>{
        return this.getRequest(`/api/labs/feedbacks/dates/${feedbackDateId}/mentors/${mentorId}/students/${studentId}`);
    };

    upsertFeedbackAnswers = (feedback, mentorId, dateId, studentId) =>{
        redirectAwareFetch('/api/labs/feedbacks/answers',
            this.getSaveFeedbackOptions(feedback, mentorId, dateId, studentId)
        );
    };
}

const feedbackService = new FeedbackService();

export default feedbackService;
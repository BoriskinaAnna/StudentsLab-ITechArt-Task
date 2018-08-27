CREATE PROCEDURE [dbo].[GetFeedbackAnswers]
	@MentorId INT,
	@StudentId INT,
	@FeedbackDateId INT
AS
	SELECT 
		fa.Answer,
		fa.Id AS AnswerId,
		fa.FeedbackQuestionId AS QuestionId
	FROM FeedbackAnswer fa
	WHERE
		fa.FeedbackDateId = @FeedbackDateId
		AND fa.MentorId = @MentorId
		AND fa.StudentId = @StudentId

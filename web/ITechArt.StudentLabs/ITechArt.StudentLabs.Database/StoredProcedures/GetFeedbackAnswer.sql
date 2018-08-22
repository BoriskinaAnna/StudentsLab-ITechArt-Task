CREATE PROCEDURE [dbo].[GetFeedbackAnswer]
	@FeedbackQuestionId INT,
	@MentorId INT,
	@StudentId INT,
	@FeedbackDateId INT
AS
	SELECT 
		fa.Answer,
		fa.Id AS AnswerId
	FROM FeedbackAnswer fa
	WHERE
		fa.FeedbackDateId = @FeedbackDateId
		AND fa.MentorId = @MentorId
		AND fa.StudentId = @StudentId
		AND fa.FeedbackQuestionId = @FeedbackQuestionId

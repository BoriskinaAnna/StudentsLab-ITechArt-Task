CREATE PROCEDURE [dbo].[AddOrUpdateFeedbackAnswer]
    @MentorId int,
    @FeedbackQuestionId INT,
    @FeedbackDateId INT,
    @StudentId INT,
    @Answer NVARCHAR(4000)
AS
	MERGE FeedbackAnswer AS target
    USING
        (SELECT @MentorId, @FeedbackQuestionId, @FeedbackDateId, @StudentId, @Answer)
    AS source
        ( MentorId, FeedbackQuestionId, FeedbackDateId, StudentId, Answer)
    ON (target.MentorId = source.MentorId 
        AND target.FeedbackQuestionId = source.FeedbackQuestionId
        AND target.FeedbackDateId = source.FeedbackDateId
        AND target.StudentId = source.StudentId
    )
    WHEN MATCHED THEN
        UPDATE SET
            MentorId = source.MentorId,
            FeedbackQuestionId = source.FeedbackQuestionId,
            FeedbackDateId = source.FeedbackDateId,
            StudentId = source.StudentId,
            Answer = source.Answer
            
    WHEN NOT MATCHED THEN
        INSERT (MentorId,  FeedbackQuestionId, FeedbackDateId, StudentId, Answer)
        VALUES
        (
            source.MentorId,
            source.FeedbackQuestionId,
            source.FeedbackDateId,
            source.StudentId,
            source.Answer
        );

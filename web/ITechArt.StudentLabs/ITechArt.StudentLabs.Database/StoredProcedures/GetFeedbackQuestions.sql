CREATE PROCEDURE [dbo].[GetFeedbackQuestions]
    @LabId INT
AS
    SELECT
       q.Id  AS QuestionId,
       q.Question

    FROM Question q
        INNER JOIN FeedbackQuestion fq
            on fq.LabId = @LabId
    WHERE q.Id = fq.QuestionId

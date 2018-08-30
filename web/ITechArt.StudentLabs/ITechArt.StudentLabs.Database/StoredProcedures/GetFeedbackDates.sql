CREATE PROCEDURE [dbo].[GetFeedbackDates]
    @Id int
AS
    SELECT
        f.Id,
        f.Date
    FROM FeedbackDate f
    WHERE f.LabId = @Id

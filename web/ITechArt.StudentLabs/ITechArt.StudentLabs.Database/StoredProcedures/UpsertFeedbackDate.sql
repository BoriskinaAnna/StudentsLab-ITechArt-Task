CREATE PROCEDURE [dbo].[UpsertFeedbackDate]
    @Date DATE,
    @LabId INT,
    @Id int
AS
    MERGE FeedbackDate AS target
    USING
        (SELECT @Id, @LabId, @Date)
    AS source
        (Id, LabId, [Date])
    ON (target.Id = source.Id)
    WHEN MATCHED THEN
        UPDATE SET
            Date = source.Date

    WHEN NOT MATCHED THEN
        INSERT (LabId,  [Date])
        VALUES
        (
            source.LabId,
            source.Date
        );
    select SCOPE_IDENTITY()

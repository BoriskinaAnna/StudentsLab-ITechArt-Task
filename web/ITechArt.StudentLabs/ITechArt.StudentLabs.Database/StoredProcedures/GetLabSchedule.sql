CREATE PROCEDURE [dbo].[GetLabSchedule]
		 @Id int
AS
    SELECT
        l.Id,
        l.DateTime,
		l.Theme,
		l.Duration,
		p.Name AS Place,
		u.FirstName AS LectorFirstName,
		u.LastName AS LectorLastName
		
    FROM Lecture l
		INNER JOIN Place p
            on p.Id = l.PlaceId
		INNER JOIN [User] u
            on u.Id = l.LectorId
    WHERE l.LabId = @Id

CREATE PROCEDURE [dbo].[GetStudentsByMentorId]
    @MentorId int
AS
    SELECT
        u.Id,
        u.FirstName,
        u.LastName

    FROM [User] u
        INNER JOIN MentorStudentLink m
            on m.MentorId = @MentorId

    WHERE u.Id = m.StudentId

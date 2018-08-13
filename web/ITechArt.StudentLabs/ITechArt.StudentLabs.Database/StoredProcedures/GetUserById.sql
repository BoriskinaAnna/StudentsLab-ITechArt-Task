CREATE PROCEDURE [dbo].[GetUserById]
	 @Id int
AS
    SELECT
        u.Id,
        u.Email,
        u.PasswordHash,
        u.Salt,
        u.FirstName,
        u.LastName
    FROM [User] u
    WHERE Id = @Id

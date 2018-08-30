CREATE PROCEDURE [dbo].[GetUserById]
    @Id int
AS
    SELECT
        u.Id,
        u.Email,
        r.Name AS Role,
        u.PasswordHash,
        u.Salt,
        u.FirstName,
        u.LastName

    FROM [User] u
        INNER JOIN UserRole ur
            on ur.UserId = u.Id
        INNER JOIN Role r
            on r.Id = ur.RoleId
    WHERE u.Id = @Id

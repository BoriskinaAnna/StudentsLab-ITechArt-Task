CREATE PROCEDURE [dbo].[GetUser]
    @Email NVARCHAR(256)
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
    WHERE Email = @Email

CREATE PROCEDURE [dbo].[AddUser]
	@Firstname NVARCHAR(255),
	@LastName NVARCHAR(255),
	@Email NVARCHAR(255),
	@PasswordHash BINARY(256),
	@Salt BINARY(64),
	@Role  NVARCHAR(30)
AS
	INSERT INTO [dbo].[User] (Firstname, LastName, Email, PasswordHash, Salt) 
	VALUES (@Firstname, @LastName, @Email, @PasswordHash, @Salt);
	SELECT SCOPE_IDENTITY()
	INSERT INTO [dbo].UserRole (UserId, RoleId)
	VALUES(
		(SELECT id FROM [dbo].[User] WHERE Email = @Email), 
		(SELECT id FROM [dbo].Role WHERE Name = @Role)
	);
	

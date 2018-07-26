CREATE TABLE [dbo].[UserRole]
(
	[Id] INT NOT NULL PRIMARY KEY, 
    [UserId] INT NOT NULL, 
    [RoleId] INT NOT NULL,
    CONSTRAINT [PK_UserRole] PRIMARY KEY CLUSTERED ([Id] ASC),
    CONSTRAINT [FK_UserRole_Role] FOREIGN KEY([RoleId]) REFERENCES [dbo].[Role] ([Id]),
	CONSTRAINT [FK_UserRole_User] FOREIGN KEY([UserId]) REFERENCES [dbo].[User] ([Id]),
    CONSTRAINT [UX_UserRole_UserId_RoleId] UNIQUE NONCLUSTERED ([RoleId] ASC, [UserId] ASC)
);

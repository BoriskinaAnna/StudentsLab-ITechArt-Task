CREATE TABLE [dbo].[Role] (
    [Id]   INT           IDENTITY (1, 1) NOT NULL,
    [Name] NVARCHAR (30) NOT NULL,
    CONSTRAINT [PK_UserPosition] PRIMARY KEY CLUSTERED ([Id] ASC),
    CONSTRAINT [UX_Role_Name] UNIQUE NONCLUSTERED ([Name] ASC)
);


CREATE TABLE [dbo].[Role] (
    [Id]   INT           IDENTITY (1, 1) NOT NULL,
    [Name] NVARCHAR (30) NOT NULL,
    CONSTRAINT [PK_UserPosition] PRIMARY KEY CLUSTERED ([Id] ASC),
    CONSTRAINT [UX_Role_Id_Name] UNIQUE NONCLUSTERED ([Id] ASC, [Name] ASC)
);


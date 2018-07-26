CREATE TABLE [dbo].[Place] (
    [Id]   INT           IDENTITY (1, 1) NOT NULL,
    [Name] NVARCHAR (35) NOT NULL,
    CONSTRAINT [PK_Place] PRIMARY KEY CLUSTERED ([Id] ASC)
);


CREATE TABLE [dbo].[User] (
    [Id]           INT            IDENTITY (1, 1) NOT NULL,
    [FirstName]    NVARCHAR (255) NOT NULL,
    [LastName]     NVARCHAR (255) NOT NULL,
    [Email]        NVARCHAR (255) NOT NULL,
    [PasswordHash] BINARY (256)   NULL,
    [Salt]         BINARY (64)    NULL,
    CONSTRAINT [PK_Worker] PRIMARY KEY CLUSTERED ([Id] ASC)
);


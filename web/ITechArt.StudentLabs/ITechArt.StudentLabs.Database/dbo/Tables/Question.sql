CREATE TABLE [dbo].[Question] (
    [Id]       INT             IDENTITY (1, 1) NOT NULL,
    [Question] NVARCHAR (4000) NOT NULL,
    CONSTRAINT [PK_Question] PRIMARY KEY CLUSTERED ([Id] ASC)
);

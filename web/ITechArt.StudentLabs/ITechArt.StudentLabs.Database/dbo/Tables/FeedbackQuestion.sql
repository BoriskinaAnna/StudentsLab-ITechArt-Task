CREATE TABLE [dbo].[FeedbackQuestion] (
    [Id]         INT IDENTITY (1, 1) NOT NULL,
    [QuestionId] INT NOT NULL,
    [LabId]      INT NOT NULL,
    CONSTRAINT [PK_FeedbackQuestion] PRIMARY KEY CLUSTERED ([Id] ASC),
    CONSTRAINT [FK_FeedbackQuestion_Lab] FOREIGN KEY ([LabId]) REFERENCES [dbo].[Lab] ([Id]),
    CONSTRAINT [FK_FeedbackQuestion_Question] FOREIGN KEY ([QuestionId]) REFERENCES [dbo].[Question] ([Id]),
	CONSTRAINT [UX_FeedbackQuestion_QuestionId_LabId] UNIQUE NONCLUSTERED ([QuestionId] ASC, [LabId] ASC)
);


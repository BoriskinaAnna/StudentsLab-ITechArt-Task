CREATE TABLE [dbo].[FeedbackAnswer] (
    [Id]                 INT             IDENTITY (1, 1) NOT NULL,
    [MentorId]           INT             NOT NULL,
    [FeedbackQuestionId] INT             NOT NULL,
    [FeedbackDateId]     INT             NOT NULL,
    [StudentId]          INT             NOT NULL,
    [Answer]             NVARCHAR (4000) NOT NULL,
    CONSTRAINT [PK_FeedbackAnswer] PRIMARY KEY CLUSTERED ([Id] ASC),
    CONSTRAINT [FK_FeedbackAnswer_FeedbackDate] FOREIGN KEY ([FeedbackDateId]) REFERENCES [dbo].[FeedbackDate] ([Id]),
    CONSTRAINT [FK_FeedbackAnswer_FeedbackQuestion] FOREIGN KEY ([FeedbackQuestionId]) REFERENCES [dbo].[FeedbackQuestion] ([Id]),
    CONSTRAINT [FK_FeedbackAnswer_Mentor] FOREIGN KEY ([MentorId]) REFERENCES [dbo].[User] ([Id]),
    CONSTRAINT [FK_FeedbackAnswer_Student] FOREIGN KEY ([StudentId]) REFERENCES [dbo].[User] ([Id]),
    CONSTRAINT [UX_FeedbackAnswer_MentorId_FeedbackQuestionId_FeedbackDateId_StudentId] UNIQUE NONCLUSTERED (
       [MentorId] ASC, 
       [FeedbackDateId] ASC, 
       [FeedbackQuestionId] ASC,
       [StudentId] ASC
    )
);


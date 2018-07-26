CREATE TABLE [dbo].[FeedbackDate] (
    [Id]    INT  IDENTITY (1, 1) NOT NULL,
    [LabId] INT  NOT NULL,
    [Date]  DATE NOT NULL,
    CONSTRAINT [PK_FeedbackDate] PRIMARY KEY CLUSTERED ([Id] ASC),
    CONSTRAINT [FK_FeedbackDate_Lab] FOREIGN KEY ([LabId]) REFERENCES [dbo].[Lab] ([Id]),
    CONSTRAINT [UX_FeedbackDate_LabId_Date] UNIQUE NONCLUSTERED ([Date] ASC, [LabId] ASC)
);


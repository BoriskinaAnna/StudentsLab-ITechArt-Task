CREATE TABLE [dbo].[MentorStudentLink]
(
    [Id] INT IDENTITY (1, 1) NOT NULL, 
    [MentorId] INT NOT NULL, 
    [StudentId] INT NOT NULL,

    CONSTRAINT [PK_MentorStudentLink] PRIMARY KEY CLUSTERED ([Id] ASC),
    CONSTRAINT [FK_MentorStudentLink_Student] FOREIGN KEY([MentorId]) REFERENCES [dbo].[User] ([Id]),
    CONSTRAINT [FK_MentorStudentLink_Mentor] FOREIGN KEY([StudentId]) REFERENCES [dbo].[User] ([Id]),
    CONSTRAINT [UX_MentorStudentLink_MentorId_StudentId] UNIQUE NONCLUSTERED ([MentorId] ASC, [StudentId] ASC)
)

CREATE TABLE [dbo].[Attendance] (
    [Id]        INT IDENTITY (1, 1) NOT NULL,
    [UserId]    INT NOT NULL,
    [LectureId] INT NOT NULL,
    CONSTRAINT [PK_Attendance] PRIMARY KEY CLUSTERED ([Id] ASC),
    CONSTRAINT [FK_Attendance_Lecture] FOREIGN KEY ([LectureId]) REFERENCES [dbo].[Lecture] ([Id]),
    CONSTRAINT [FK_Attendance_User] FOREIGN KEY ([UserId]) REFERENCES [dbo].[User] ([Id]),
    CONSTRAINT [UX_Attendance_UserId_LectureId] UNIQUE NONCLUSTERED ([UserId] ASC, [LectureId] ASC)
);


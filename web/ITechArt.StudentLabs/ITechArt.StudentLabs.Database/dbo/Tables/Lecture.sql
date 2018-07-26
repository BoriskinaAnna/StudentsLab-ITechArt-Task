CREATE TABLE [dbo].[Lecture] (
    [Id]        INT            IDENTITY (1, 1) NOT NULL,
    [LabId]     INT            NOT NULL,
    [PlaceId]   INT            NOT NULL,
    [LectorId]  INT            NULL,
    [DateTime]      DATETIME       NOT NULL,
    [Theme]     NVARCHAR (255) NOT NULL,
    [Duraction] TIME (7)       NULL,
    CONSTRAINT [PK_Lecture] PRIMARY KEY CLUSTERED ([Id] ASC),
    CONSTRAINT [FK_Lecture_Lab] FOREIGN KEY ([LabId]) REFERENCES [dbo].[Lab] ([Id]) ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT [FK_Lecture_Place] FOREIGN KEY ([PlaceId]) REFERENCES [dbo].[Place] ([Id]) ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT [FK_Lecture_User] FOREIGN KEY ([LectorId]) REFERENCES [dbo].[User] ([Id]),
	CONSTRAINT [UX_Lecture_LabId_DateTime] UNIQUE NONCLUSTERED ([DateTime] ASC, [LabId] ASC)
);


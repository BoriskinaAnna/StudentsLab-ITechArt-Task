CREATE TABLE [dbo].[Lab] (
    [Id]             INT           IDENTITY (1, 1) NOT NULL,
    [TypeId]         INT           NOT NULL,
    [CityId]         INT           NOT NULL,
    [Name]           NVARCHAR (60) NOT NULL,
    [AdmissionStart] DATE          NOT NULL,
    [AdmissionEnd]   DATE          NOT NULL,
    [TrainingStart]  DATE          NOT NULL,
    [TrainingEnd]    DATE          NOT NULL,
    [IsDeveloped] BIT NOT NULL, 
    CONSTRAINT [PK_Lab] PRIMARY KEY CLUSTERED ([Id] ASC),
    CONSTRAINT [FK_Lab_City] FOREIGN KEY ([CityId]) REFERENCES [dbo].[City] ([Id]),
    CONSTRAINT [FK_Lab_LabType] FOREIGN KEY ([TypeId]) REFERENCES [dbo].[LabType] ([Id]) ON DELETE CASCADE ON UPDATE CASCADE
);


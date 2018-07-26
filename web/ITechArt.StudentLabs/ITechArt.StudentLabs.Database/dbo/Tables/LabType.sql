CREATE TABLE [dbo].[LabType] (
    [Id]   INT           IDENTITY (1, 1) NOT NULL,
    [Name] NVARCHAR (20) NOT NULL,
    CONSTRAINT [PK_LabType] PRIMARY KEY CLUSTERED ([Id] ASC),
    CONSTRAINT [UX_LabType_Id_Name] UNIQUE NONCLUSTERED ([Id] ASC, [Name] ASC)
);


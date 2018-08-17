CREATE PROCEDURE [dbo].[GetLabs]
AS
      SELECT
        l.Id,
        l.Name,
		l.AdmissionStart,
        l.AdmissionEnd,
		c.Name AS City,
		l.IsDraft,
		l.TrainingEnd,
		l.TrainingStart,
		lt.Name AS LabType
    FROM [Lab] l
		INNER JOIN City c
            on c.Id = l.CityId
		INNER JOIN LabType lt
            on lt.Id = l.TypeId

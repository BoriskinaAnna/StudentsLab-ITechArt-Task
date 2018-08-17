using System;
using System.Collections.Generic;
using System.Text;

namespace ITechArt.StudentsLab.DataAccessLayer.Models.DataTransferObjects
{
    public class LectureModel
    {
        public int Id { get; }

        public int LabId { get; }

        public string Lector { get; }

        public string Place { get; }

        public string Theme { get; }

        public DateTime DateTime { get; }

        public DateTime Durstion { get; }

        public LectureModel(
            int id,
            int labId,
            string lector,
            string place,
            string theme,
            DateTime dateTime,
            DateTime durstion
        )
        {
            Id = id;
            LabId = labId;
            Lector = lector;
            Place = place;
            Theme = theme;
            DateTime = dateTime;
            Durstion = durstion;
        }
    }
}

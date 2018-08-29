using System;
using System.Collections.Generic;
using System.Text;

namespace ITechArt.StudentsLab.DataAccessLayer.Models.DataTransferObjects
{
    public class LectureModel
    {
        public int Id { get; }

        public string LectorFirstName { get; }

        public string LectorLastName { get; }

        public string Place { get; }

        public string Theme { get; }

        public DateTime DateTime { get; }

        public TimeSpan Duration { get; }

        public LectureModel(
            int id,
            string lectorFirstName,
            string lectorLastName,
            string place,
            string theme,
            DateTime dateTime,
            TimeSpan duration
        )
        {
            Id = id;
            LectorFirstName = lectorFirstName;
            LectorLastName = lectorLastName;
            Place = place;
            Theme = theme;
            DateTime = dateTime;
            Duration = duration;
        }
    }
}

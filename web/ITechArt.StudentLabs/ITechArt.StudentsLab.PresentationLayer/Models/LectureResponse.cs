using System;

namespace ITechArt.StudentsLab.PresentationLayer.Models
{
    public class LectureResponse
    {
        public int Id { get; }

        public string LectorFirstName { get; }

        public string LectorLastName { get; }

        public string Place { get; }

        public string Theme { get; }

        public DateTime DateTime { get; }

        public TimeSpan Duration { get; }

        public LectureResponse(
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

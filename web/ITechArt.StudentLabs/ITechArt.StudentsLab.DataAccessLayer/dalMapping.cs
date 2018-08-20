using AutoMapper;
using ITechArt.StudentsLab.DataAccessLayer.Models.Entities;
using ITechArt.StudentsLab.DataAccessLayer.Models.DataTransferObjects;

namespace ITechArt.StudentsLab.DataAccessLayer
{
    public class DalMapping
    {
        public static void Initialize(IMapperConfigurationExpression configuration)
        {
            configuration.CreateMap<Lab, LabModel>();
            configuration.CreateMap<Lecture, LectureModel>();
        }
    }
}

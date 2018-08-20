using AutoMapper;
using ITechArt.StudentsLab.PresentationLayer.Models;
using BlLabModel = ITechArt.StudentsLab.BusinessLayer.Models.LabModel;
using BlLectureModel = ITechArt.StudentsLab.BusinessLayer.Models.LectureModel;

namespace ITechArt.StudentsLab.PresentationLayer
{
    public class PlMapping
    {
        public static void Initialize(IMapperConfigurationExpression configuration)
        {
            configuration.CreateMap<LabModel, BlLabModel>();
            configuration.CreateMap<LectureModel, BlLectureModel>();
        }
    }
}

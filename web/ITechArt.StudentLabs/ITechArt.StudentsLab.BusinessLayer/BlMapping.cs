using AutoMapper;
using DalLabModel = ITechArt.StudentsLab.DataAccessLayer.Models.DataTransferObjects.LabModel;
using LabModel = ITechArt.StudentsLab.BusinessLayer.Models.LabModel;

namespace ITechArt.StudentsLab.BusinessLayer
{
    public class BlMapping
    {
        public static void Initialize(IMapperConfigurationExpression configuration)
        {
            configuration.CreateMap<DalLabModel, LabModel>();
        }
    }
}

﻿using AutoMapper;
using DalLabModel = ITechArt.StudentsLab.DataAccessLayer.Models.DataTransferObjects.LabModel;
using LabModel = ITechArt.StudentsLab.BusinessLayer.Models.LabModel;
using DalLectureModel = ITechArt.StudentsLab.DataAccessLayer.Models.DataTransferObjects.LectureModel;
using LectureModel = ITechArt.StudentsLab.BusinessLayer.Models.LectureModel;
using DalFeedbackModel = ITechArt.StudentsLab.DataAccessLayer.Models.DataTransferObjects.FeedbackDateModel;
using FeedbackModel = ITechArt.StudentsLab.BusinessLayer.Models.FeedbackDateModel;

namespace ITechArt.StudentsLab.BusinessLayer
{
    public class BlMapping
    {
        public static void Initialize(IMapperConfigurationExpression configuration)
        {
            configuration.CreateMap<DalLabModel, LabModel>();
            configuration.CreateMap<DalLectureModel, LectureModel>();
            configuration.CreateMap<DalFeedbackModel, FeedbackModel>();
        }
    }
}
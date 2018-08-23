using ITechArt.StudentsLab.PresentationLayer.Models;
using System.Collections.Generic;
using ITechArt.StudentsLab.BusinessLayer.Contracts;
using AutoMapper;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using BlLabModel = ITechArt.StudentsLab.BusinessLayer.Models.LabModel;
using BlUserNameModel = ITechArt.StudentsLab.BusinessLayer.Models.UserNameModel;
using BlFeedbackDateModel = ITechArt.StudentsLab.BusinessLayer.Models.FeedbackDateModel;
using BlFeedbackRequestModel = ITechArt.StudentsLab.BusinessLayer.Models.FeedbackAnswerRequestModel;
using BlFeedbackResponseModel = ITechArt.StudentsLab.BusinessLayer.Models.FeedbackAnswerResponseModel;
using BlFeedbackQuestionModel = ITechArt.StudentsLab.BusinessLayer.Models.FeedbackQuestionModel;
using BlFeedbackAnswerPostRequestModel = ITechArt.StudentsLab.BusinessLayer.Models.FeedbackAnswerPostRequestModel;
using System.Linq;
using System;


namespace ITechArt.StudentsLab.PresentationLayer.Controllers
{
    [Route("api/[controller]/[action]")]
    [ApiController]
    public class LabController : Controller
    {
        private readonly ILabService _labService;
        public LabController(ILabService labService)
        {
            _labService = labService;
        }
        
        [HttpGet]
        public async Task<IActionResult> Get()
        {
            IEnumerable<BlLabModel> labs = await _labService.GetLabs();
            return Ok(
                labs.Select(Mapper.Map<LabModel>)
            );
        }

        [HttpGet]
        [Route("{labId:int}")]
        public async Task<IActionResult> GetFeedbackDates(int labId)
        {
            IEnumerable<BlFeedbackDateModel> feedbackDates = await _labService.GetFeedbackDates(labId);
            return Ok(
                feedbackDates.Select(Mapper.Map<FeedbackDateModel>)
            );
        }

        [HttpPost]
        public async Task<IActionResult> AddOrUpdateFeedbackDate(FeedbackDateModel model)
        {
            BlFeedbackDateModel feedbackDateResponse = 
                await _labService.AddOrUpdateFeedbackDate(Mapper.Map<BlFeedbackDateModel>(model));
            return Ok(
                Mapper.Map<FeedbackDateModel>(feedbackDateResponse)
            );
        }

        [HttpGet]
        [Route("{studentId:int}/{mentorId:int}/{feedbackDateId:int}/{feedbackQuestionId:int}")]
        public async Task<IActionResult> GetFeedbackAnswer(int studentId, int mentorId, int feedbackDateId, int feedbackQuestionId)
        {
            BlFeedbackRequestModel blFeedbackRequest = new BlFeedbackRequestModel(
                feedbackQuestionId, 
                studentId,
                mentorId, 
                feedbackDateId
            );

           BlFeedbackResponseModel feedbackResponse = await _labService.GetFeedbackAnswer(blFeedbackRequest);

            return Ok(
                Mapper.Map<FeedbackAnswerResponseModel>(feedbackResponse)
            );
        }

        [HttpGet]
        [Route("{mentorId:int}")]
        public async Task<IActionResult> GetMentorStudents(int mentorId)
        {
            IEnumerable<BlUserNameModel> feedbackResponse = await _labService.GetMerntorStudents(mentorId);

            return Ok(
                feedbackResponse.Select(Mapper.Map<UserNameModel>)
            );
        }

        [HttpGet]
        [Route("{labId:int}")]
        public async Task<IActionResult> GetFeedbackQuestions(int labId)
        {
            IEnumerable<BlFeedbackQuestionModel> feedbackResponse = await _labService.GetFeedbackQuestions(labId);

            return Ok(
                feedbackResponse.Select(Mapper.Map<FeedbackQuestionModel>)
            );
        }

        [HttpPost]
        public async Task<IActionResult> AddOrUpdateFeedbackAnswer(FeedbackAnswerPostRequestModel model)
        {
            await _labService.AddOrUpdateFeedbackAnswer(Mapper.Map<BlFeedbackAnswerPostRequestModel>(model));
            return Ok();
        }
    }
}
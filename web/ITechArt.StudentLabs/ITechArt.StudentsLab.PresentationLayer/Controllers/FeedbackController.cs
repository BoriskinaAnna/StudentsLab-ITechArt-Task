using ITechArt.StudentsLab.PresentationLayer.Models;
using System.Collections.Generic;
using ITechArt.StudentsLab.BusinessLayer.Contracts;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using BlFeedbackDateModel = ITechArt.StudentsLab.BusinessLayer.Models.FeedbackDateModel;
using BlFeedbackRequestModel = ITechArt.StudentsLab.BusinessLayer.Models.FeedbackAnswerRequestModel;
using BlFeedbackResponseModel = ITechArt.StudentsLab.BusinessLayer.Models.FeedbackAnswerResponseModel;
using BlFeedbackQuestionModel = ITechArt.StudentsLab.BusinessLayer.Models.FeedbackQuestionModel;
using BlFeedbackAnswerPostRequestModel = ITechArt.StudentsLab.BusinessLayer.Models.FeedbackAnswerPostRequestModel;
using Mapster;
using System;

namespace ITechArt.StudentsLab.PresentationLayer.Controllers
{
    [Route("api")]
    [ApiController]
    public class FeedbackController : Controller
    {
        private readonly IFeedbackService _feedbackService;


        public FeedbackController(IFeedbackService feedbackService)
        {
            _feedbackService = feedbackService;
        }

        [HttpGet("labs/{labId:int}/feedbacks/dates")]
        public async Task<IActionResult> GetFeedbackDates(int labId)
        {
            IEnumerable<BlFeedbackDateModel> feedbackDates = await _feedbackService.GetFeedbackDates(labId);

            return Ok(
                feedbackDates.Adapt<IEnumerable<FeedbackDateModel>>()
            );
        }

        [HttpPut("labs/feedbacks/dates")]
        public async Task<IActionResult> UpsertFeedbackDate(FeedbackDateModel model)
        {
            BlFeedbackDateModel feedbackDateResponse =
                await _feedbackService.UpsertFeedbackDate(model.Adapt<BlFeedbackDateModel>());

            return Ok(
                feedbackDateResponse.Adapt<FeedbackDateModel>()
            );
        }

        [HttpGet("labs/feedbacks/dates/{feedbackDateId:int}/mentors/{mentorId:int}/students/{studentId:int}")]
        public async Task<IActionResult> GetFeedbackAnswers(int studentId, int mentorId, int feedbackDateId)
        {
            BlFeedbackRequestModel blFeedbackRequest = new BlFeedbackRequestModel(
                studentId,
                mentorId,
                feedbackDateId
            );

            IEnumerable <BlFeedbackResponseModel> feedbackResponse = await _feedbackService.GetFeedbackAnswers(blFeedbackRequest);

            return Ok(
                feedbackResponse.Adapt<IEnumerable<FeedbackAnswerResponseModel>>()
            );
        }

        [HttpGet("labs/{labId:int}/feedbacks/questions")]
        public async Task<IActionResult> GetFeedbackQuestions(int labId)
        {
            IEnumerable<BlFeedbackQuestionModel> feedbackResponse = await _feedbackService.GetFeedbackQuestions(labId);

            return Ok(
                feedbackResponse.Adapt<IEnumerable<FeedbackQuestionModel>>()
            );
        }

        [HttpPut("labs/feedbacks/answers")]
        public async Task<IActionResult> UpsertFeedbackAnswer(FeedbackAnswerPostRequestModel model)
        {
            await _feedbackService.UpsertFeedbackAnswer(model.Adapt<BlFeedbackAnswerPostRequestModel>());

            return Ok();
        }

    }
}
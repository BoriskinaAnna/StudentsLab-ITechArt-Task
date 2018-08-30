using ITechArt.StudentsLab.PresentationLayer.Models;
using System.Collections.Generic;
using ITechArt.StudentsLab.BusinessLayer.Contracts;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using ITechArt.StudentsLab.BusinessLayer.Models;
using Mapster;

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
            IEnumerable<FeedbackDateModel> feedbackDates = await _feedbackService.GetFeedbackDates(labId);

            return Ok(
                feedbackDates.Adapt<IEnumerable<FeedbackDateResponse>>()
            );
        }

        [HttpPut("labs/feedbacks/dates")]
        public async Task<IActionResult> UpsertFeedbackDate(FeedbackDateResponse model)
        {
            FeedbackDateModel feedbackDateResponse =
                await _feedbackService.UpsertFeedbackDate(model.Adapt<FeedbackDateModel>());

            return Ok(
                feedbackDateResponse.Adapt<FeedbackDateResponse>()
            );
        }

        [HttpGet("labs/feedbacks/dates/{feedbackDateId:int}/mentors/{mentorId:int}/students/{studentId:int}")]
        public async Task<IActionResult> GetFeedbackAnswers(int studentId, int mentorId, int feedbackDateId)
        {
            FeedbackAnswerGetRequestModel blFeedbackRequest = new FeedbackAnswerGetRequestModel(
                studentId,
                mentorId,
                feedbackDateId
            );

            IEnumerable <FeedbackAnswerResponseModel> feedbackResponse = await _feedbackService.GetFeedbackAnswers(blFeedbackRequest);

            return Ok(
                feedbackResponse.Adapt<IEnumerable<FeedbackAnswerResponseModel>>()
            );
        }

        [HttpGet("labs/{labId:int}/feedbacks/questions")]
        public async Task<IActionResult> GetFeedbackQuestions(int labId)
        {
            IEnumerable<FeedbackQuestionModel> feedbackResponse = await _feedbackService.GetFeedbackQuestions(labId);

            return Ok(
                feedbackResponse.Adapt<IEnumerable<FeedbackQuestionResponse>>()
            );
        }

        [HttpPut("labs/feedbacks/answers")]
        public async Task<IActionResult> UpsertFeedbackAnswer(FeedbackAnswerPostRequest model)
        {
            await _feedbackService.UpsertFeedbackAnswer(model.Adapt<FeedbackAnswerPostRequestModel>());

            return Ok();
        }

    }
}
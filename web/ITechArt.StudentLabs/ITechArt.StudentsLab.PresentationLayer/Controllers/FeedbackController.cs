﻿using ITechArt.StudentsLab.PresentationLayer.Models;
using System.Collections.Generic;
using ITechArt.StudentsLab.BusinessLayer.Contracts;
using AutoMapper;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using BlFeedbackDateModel = ITechArt.StudentsLab.BusinessLayer.Models.FeedbackDateModel;
using BlFeedbackRequestModel = ITechArt.StudentsLab.BusinessLayer.Models.FeedbackAnswerRequestModel;
using BlFeedbackResponseModel = ITechArt.StudentsLab.BusinessLayer.Models.FeedbackAnswerResponseModel;
using BlFeedbackQuestionModel = ITechArt.StudentsLab.BusinessLayer.Models.FeedbackQuestionModel;
using BlFeedbackAnswerPostRequestModel = ITechArt.StudentsLab.BusinessLayer.Models.FeedbackAnswerPostRequestModel;
using System.Linq;

namespace ITechArt.StudentsLab.PresentationLayer.Controllers
{
    [Route("api/[controller]/[action]")]
    [ApiController]
    public class FeedbackController : Controller
    {
        private readonly IFeedbackService _feedbackService;


        public FeedbackController(IFeedbackService feedbackService)
        {
            _feedbackService = feedbackService;
        }

        [HttpGet]
        [Route("{labId:int}")]
        public async Task<IActionResult> GetFeedbackDates(int labId)
        {
            IEnumerable<BlFeedbackDateModel> feedbackDates = await _feedbackService.GetFeedbackDates(labId);
            return Ok(
                feedbackDates.Select(Mapper.Map<FeedbackDateModel>)
            );
        }

        [HttpPost]
        public async Task<IActionResult> AddOrUpdateFeedbackDate(FeedbackDateModel model)
        {
            BlFeedbackDateModel feedbackDateResponse =
                await _feedbackService.AddOrUpdateFeedbackDate(Mapper.Map<BlFeedbackDateModel>(model));
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

            BlFeedbackResponseModel feedbackResponse = await _feedbackService.GetFeedbackAnswer(blFeedbackRequest);

            return Ok(
                Mapper.Map<FeedbackAnswerResponseModel>(feedbackResponse)
            );
        }

        [HttpGet]
        [Route("{labId:int}")]
        public async Task<IActionResult> GetFeedbackQuestions(int labId)
        {
            IEnumerable<BlFeedbackQuestionModel> feedbackResponse = await _feedbackService.GetFeedbackQuestions(labId);

            return Ok(
                feedbackResponse.Select(Mapper.Map<FeedbackQuestionModel>)
            );
        }

        [HttpPost]
        public async Task<IActionResult> AddOrUpdateFeedbackAnswer(FeedbackAnswerPostRequestModel model)
        {
            await _feedbackService.AddOrUpdateFeedbackAnswer(Mapper.Map<BlFeedbackAnswerPostRequestModel>(model));
            return Ok();
        }

    }
}
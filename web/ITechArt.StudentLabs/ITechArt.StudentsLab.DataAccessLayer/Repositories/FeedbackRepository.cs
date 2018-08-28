using ITechArt.StudentsLab.DataAccessLayer.Contracts;
using ITechArt.StudentsLab.DataAccessLayer.Models.DataTransferObjects;
using System.Collections.Generic;
using System.Threading.Tasks;
using ITechArt.StudentsLab.BusinessLayer.Contracts;
using System.Data.SqlClient;
using ITechArt.StudentsLab.DataAccessLayer.Models.Entities;
using Dapper;
using AutoMapper;
using System.Data;
using System.Linq;
using System;

namespace ITechArt.StudentsLab.DataAccessLayer.Repositories
{
    internal class FeedbackRepository: IFeedbackRepository
    {
        private readonly IDalSettings _settings;


        public FeedbackRepository(IDalSettings settings)
        {
            _settings = settings;
        }

        public async Task<IEnumerable<FeedbackDateModel>> GetFeedbackDates(int labId)
        {
            using (SqlConnection connection = new SqlConnection(_settings.DefaultConnectionString))
            {
                IEnumerable<FeedbackDate> feedbackDates = await connection.QueryAsync<FeedbackDate>(
                    "GetFeedbackDates",
                    new { Id = labId },
                    commandType: CommandType.StoredProcedure);

                return feedbackDates.Select(Mapper.Map<FeedbackDateModel>);
            }
        }

        public async Task<int> AddOrUpdateFeedbackDates(FeedbackDateModel feedbackDate)
        {
            using (SqlConnection connection = new SqlConnection(_settings.DefaultConnectionString))
            {
                int id = await connection.ExecuteScalarAsync<int>(
                    "AddOrUpdateFeedbackDate",
                    new
                    {
                        Id = feedbackDate.Id,
                        Date = feedbackDate.Date.Date,
                        LabId = feedbackDate.LabId
                    },
                    commandType: CommandType.StoredProcedure
                );

                return id;
            }
        }

        public async Task AddOrUpdateFeedbackAnswers(FeedbackAnswerPostRequestModel feedbackAnswers)
        {
            using (SqlConnection connection = new SqlConnection(_settings.DefaultConnectionString))
            {
                for (int i = 0; i < feedbackAnswers.Answers.Length; i++)
                {
                    await connection.ExecuteScalarAsync<int>(
                        "AddOrUpdateFeedbackAnswer",
                        new
                        {
                            MentorId = feedbackAnswers.MentorId,
                            FeedbackQuestionId = feedbackAnswers.QuestionId[i],
                            FeedbackDateId = feedbackAnswers.FeedbackDateId,
                            StudentId = feedbackAnswers.StudentId,
                            Answer = feedbackAnswers.Answers[i]
                        },
                        commandType: CommandType.StoredProcedure
                   );
                }
            }
        }

        public async Task<IEnumerable<FeedbackAnswerResponseModel>> GetFeedbackAnswers(FeedbackAnswerRequestModel feedbackRequest)
        {
            using (SqlConnection connection = new SqlConnection(_settings.DefaultConnectionString))
            {
                IEnumerable <FeedbackAnswer> feedback = await connection.QueryAsync<FeedbackAnswer>(
                    "GetFeedbackAnswers",
                    new
                    {
                        MentorId = feedbackRequest.MentorId,
                        StudentId = feedbackRequest.StudentId,
                        FeedbackdateId = feedbackRequest.FeedbackDateId
                    },
                    commandType: CommandType.StoredProcedure
                );

                return feedback.Select(Mapper.Map<FeedbackAnswerResponseModel>);
            }
        }

        public async Task<IEnumerable<FeedbackQuestionModel>> GetFeedbackQuestions(int labId)
        {
            using (SqlConnection connection = new SqlConnection(_settings.DefaultConnectionString))
            {
                IEnumerable<FeedbackQuestion> feedback = await connection.QueryAsync<FeedbackQuestion>(
                    "GetFeedbackQuestions",
                    new { LabId = labId },
                    commandType: CommandType.StoredProcedure
                );

                return feedback.Select(Mapper.Map<FeedbackQuestionModel>);
            }
        }
    }
}

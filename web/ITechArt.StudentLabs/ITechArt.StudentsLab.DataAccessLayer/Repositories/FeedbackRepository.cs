using ITechArt.StudentsLab.DataAccessLayer.Contracts;
using System.Collections.Generic;
using System.Threading.Tasks;
using ITechArt.StudentsLab.BusinessLayer.Contracts;
using System.Data.SqlClient;
using ITechArt.StudentsLab.DataAccessLayer.Models.Entities;
using Dapper;
using System.Data;

namespace ITechArt.StudentsLab.DataAccessLayer.Repositories
{
    internal class FeedbackRepository : IFeedbackRepository
    {
        private readonly IDalSettings _settings;


        public FeedbackRepository(IDalSettings settings)
        {
            _settings = settings;
        }

        public async Task<IEnumerable<FeedbackDate>> GetFeedbackDates(int labId)
        {
            using (SqlConnection connection = new SqlConnection(_settings.DefaultConnectionString))
            {
                IEnumerable<FeedbackDate> feedbackDates = await connection.QueryAsync<FeedbackDate>(
                  "GetFeedbackDates",
                  new { Id = labId },
                  commandType: CommandType.StoredProcedure
                );

                return feedbackDates;
            }
        }

        public async Task<int> UpsertFeedbackDates(FeedbackDate feedbackDate)
        {
            using (SqlConnection connection = new SqlConnection(_settings.DefaultConnectionString))
            {
                int id = await connection.ExecuteScalarAsync<int>(
                    "UpsertFeedbackDate",
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

        public async Task UpsertFeedbackAnswers(FeedbackAnswerPostRequest feedbackAnswers)
        {
            using (SqlConnection connection = new SqlConnection(_settings.DefaultConnectionString))
            {
                for (int i = 0; i < feedbackAnswers.Answers.Length; i++)
                {
                    await connection.ExecuteScalarAsync<int>(
                        "UpsertFeedbackAnswer",
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

        public async Task<IEnumerable<FeedbackAnswerResponse>> GetFeedbackAnswers(FeedbackAnswerGetRequest feedbackRequest)
        {
            using (SqlConnection connection = new SqlConnection(_settings.DefaultConnectionString))
            {
                IEnumerable<FeedbackAnswerResponse> feedback = await connection.QueryAsync<FeedbackAnswerResponse>(
                    "GetFeedbackAnswers",
                    new
                    {
                        MentorId = feedbackRequest.MentorId,
                        StudentId = feedbackRequest.StudentId,
                        FeedbackdateId = feedbackRequest.FeedbackDateId
                    },
                    commandType: CommandType.StoredProcedure
                );

                return feedback;
            }
        }

        public async Task<IEnumerable<FeedbackQuestion>> GetFeedbackQuestions(int labId)
        {
            using (SqlConnection connection = new SqlConnection(_settings.DefaultConnectionString))
            {
                IEnumerable<FeedbackQuestion> feedback = await connection.QueryAsync<FeedbackQuestion>(
                    "GetFeedbackQuestions",
                    new { LabId = labId },
                    commandType: CommandType.StoredProcedure
                );

                return feedback;
            }
        }
    }
}

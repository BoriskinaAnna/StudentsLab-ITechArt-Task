using System.Threading.Tasks;
using ITechArt.StudentsLab.DataAccessLayer.Models;

namespace ITechArt.StudentsLab.DataAccessLayer.Contracts
{
    public interface IUserRepository
    {
        Task<UserResponse> GetUser(string email);
        Task<int> UpsertUser(UserRequest userRequest);
    }
}

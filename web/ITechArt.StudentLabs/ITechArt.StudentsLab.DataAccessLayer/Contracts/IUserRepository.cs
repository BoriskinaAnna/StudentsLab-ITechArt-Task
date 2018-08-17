using System.Threading.Tasks;
using ITechArt.StudentsLab.DataAccessLayer.Models.DataTransferObjects;

namespace ITechArt.StudentsLab.DataAccessLayer.Contracts
{
    public interface IUserRepository
    {
        Task<UserResponse> GetUserByEmail(string email);
        Task<int> UpsertUser(UserRequest userRequest);
        Task<UserResponse> GetUserById(int id);
        
    }
}

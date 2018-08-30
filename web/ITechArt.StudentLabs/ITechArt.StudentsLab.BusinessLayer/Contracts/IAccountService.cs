using System.Threading.Tasks;
using ITechArt.StudentsLab.BusinessLayer.Models;

namespace ITechArt.StudentsLab.BusinessLayer.Contracts
{
    public interface IAccountService
    {
        Task<UserModel> Login(string email, string password);

        Task<UserModel> Register(RegisterUserModel registerModel);
    }
}

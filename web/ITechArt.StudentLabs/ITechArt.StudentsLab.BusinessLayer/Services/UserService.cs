using System.Threading.Tasks;
using ITechArt.StudentsLab.BusinessLayer.Contracts;
using ITechArt.StudentsLab.BusinessLayer.Models;
using ITechArt.StudentsLab.DataAccessLayer.Models.DataTransferObjects;
using ITechArt.StudentsLab.DataAccessLayer.Contracts;
namespace ITechArt.StudentsLab.BusinessLayer.Services
{
    public class UserService: IUserService
    {
        private readonly IUserRepository _userRepository;


        public UserService(IUserRepository userRepository)
        {
            _userRepository = userRepository;
        }
        public async Task<UserModel> GetUserById(int id)
        {
            UserResponse user = await _userRepository.GetUserById(id);

            if(user != null)
            {
                UserModel userModel = new UserModel
                (
                    user.Id,
                    user.FirstName,
                    user.LastName,
                    user.Email, 
                    user.Role
                );

                return userModel;
            }
            return null;
         
        }

    }
}

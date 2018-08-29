using System;
using System.Security.Claims;

namespace ITechArt.StudentsLab.PresentationLayer.Extensions
{
    public static  class UserExtention
    {
        public static int GetUserId(this ClaimsPrincipal user)
        {
            Claim userClaim = user.FindFirst(ClaimTypes.NameIdentifier);

            if (userClaim == null)
            {
                return 0;
            }

            if (!int.TryParse(userClaim.Value, out int userId))
            {
                return 0;
            }

            return userId;
        } 
    }
}

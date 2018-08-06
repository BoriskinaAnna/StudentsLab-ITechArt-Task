using JetBrains.Annotations;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ITechArt.StudentsLab.PresentationLayer.Models
{
    public class LoginModel
    {
        [NotNull]
        public string Email { get; set; }
        [NotNull]
        public string Password { get; set; }
    }
}

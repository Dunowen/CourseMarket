using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace CourseMarket.Model
{
    public class Users
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Facebook { get; set; }
        public string PhoneNumber { get; set; }
        public string Email { get; set; }
        public string Others { get; set; }
        public string Password { get; set; }
        public string LoginName { get; set; }
        public DateTime RegistrationDate { get; set; }

        public int RoleId { get; set; }
        public virtual UserRoles UserRoles { get; set; }

        [NotMapped]
        public virtual ICollection<Deals> Deals { get; set; }
    }
}

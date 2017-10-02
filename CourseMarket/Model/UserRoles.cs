using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace CourseMarket.Model
{
    public class UserRoles
    {
        public int Id { get; set; }
        public string Name { get; set; }

        [NotMapped]
        public virtual ICollection<Users> Users { get; set; }
    }
}

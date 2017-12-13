using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace CourseMarket.Model
{
    public class CourseTypes
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public bool IsDeleted { get; set; }

        [NotMapped]
        public virtual ICollection<Courses> Courses { get; set; }
    }
}

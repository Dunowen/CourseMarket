using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace CourseMarket.Model
{
    public class Subjects
    {
        public int? Id { get; set; }
        public string Name { get; set; }
        public string Code { get; set; }
        public bool? IsDeleted { get; set; }

        public int UniversityId { get; set; }
        public virtual Universities University { get; set; }

        [NotMapped]
        public virtual ICollection<Courses> Courses { get; set; }
    }
}

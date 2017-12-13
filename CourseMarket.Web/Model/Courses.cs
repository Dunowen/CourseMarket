using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace CourseMarket.Model
{
    public class Courses
    {
        public int Id { get; set; }
        public string Code { get; set; }
        public bool IsDeleted { get; set; }

        public int SubjectId { get; set; }
        public virtual Subjects Subject { get; set; }

        public int TimeId { get; set; }
        public virtual Times Time { get; set; }

        public int CourseTypeId { get; set; }
        public virtual CourseTypes CourseType { get; set; }

        [NotMapped]
        public virtual ICollection<DealPairs> DealPairs { get; set; }
    }
}

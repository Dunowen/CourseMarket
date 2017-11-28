using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace CourseMarket.Model
{
    public class SubDeals
    {
        public int Id { get; set; }

        public int? OfferCourseId { get; set; }
        public virtual Courses OfferCourse { get; set; }    

        public int LookingForCourseId { get; set; }
        public virtual Courses LookingForCourse { get; set; }

        [NotMapped]
        public virtual ICollection<DealPairs> DealPairs { get; set; }
    }
}

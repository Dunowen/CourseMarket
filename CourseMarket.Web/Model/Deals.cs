using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace CourseMarket.Model
{
    public class Deals
    {
        public int Id { get; set; }
        public DateTime Deadline { get; set; }
        public string Comment { get; set; }
        public bool IsDeleted { get; set; }

        [NotMapped]
        public virtual ICollection<DealPairs> DealPairs { get; set; }

        public int DealTypeId { get; set; }
        public virtual DealTypes DealTypes { get; set; }

        public int DealStateId { get; set; }
        public virtual DealStates DealStates { get; set; }

        public int UserId { get; set; }
        public virtual Users Users { get; set; }
    }
}

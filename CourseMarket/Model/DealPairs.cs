using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CourseMarket.Model
{
    public class DealPairs
    {
        public int Id { get; set; }

        public int SubDealId { get; set; }
        public virtual SubDeals SubDeals { get; set; }

        public int DealId { get; set; }
        public virtual Deals Deal { get; set; }
    }
}

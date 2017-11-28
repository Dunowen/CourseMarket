using CourseMarket.Model;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CourseMarket.Data
{
    public class CourseMarketDBContext : DbContext
    {
        public DbSet<Courses> Courses { get; set; }
        public DbSet<CourseTypes> CourseTypes { get; set; }
        public DbSet<DealPairs> DealPairs { get; set; }
        public DbSet<Deals> Deals { get; set; }
        public DbSet<DealStates> DealStates { get; set; }
        public DbSet<DealTypes> DealTypes { get; set; }
        public DbSet<SubDeals> SubDeals { get; set; }
        public DbSet<Subjects> Subjects { get; set; }
        public DbSet<Times> Times { get; set; }
        public DbSet<Universities> Universities { get; set; }
        public DbSet<Users> Users { get; set; }

        public CourseMarketDBContext(DbContextOptions<CourseMarketDBContext> options) : base(options)
        {
            Database.EnsureCreated();

            if (!this.Universities.Any())
                InitData();
        }

        private void InitData()
        {
            this.Universities.Add(new Universities
            {
                Name = "Corvinus egyetem",
                Tag = "BCE",
                IsDeleted = false
            });
            this.SaveChanges();
        }
    }
}

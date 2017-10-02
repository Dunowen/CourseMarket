using CourseMarket.Data;
using CourseMarket.Model;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CourseMarket.Services
{
    public class UniversitiesService : IUniversitiesService
    {
        private readonly CourseMarketDBContext context;
        public UniversitiesService(CourseMarketDBContext context)
        {
            this.context = context;
        }

        public async Task<IEnumerable<Universities>> GetUniversities()
        {
            var uni = await context.Universities.Where(u => u.IsDeleted != true).ToArrayAsync();
            return uni;
        }

        public async Task<Universities> GetUniversities(int id)
        {
            var uni = await context.Universities.Where(u => u.IsDeleted != true && u.Id == id).SingleOrDefaultAsync();
            return uni;
        }
    }

    public interface IUniversitiesService
    {
        Task<IEnumerable<Universities>> GetUniversities();
        Task<Universities> GetUniversities(int id);
    }
}

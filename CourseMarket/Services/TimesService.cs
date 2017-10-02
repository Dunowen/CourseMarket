using CourseMarket.Data;
using CourseMarket.Model;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CourseMarket.Services
{
    public class TimesService : ITimesService
    {
        private readonly CourseMarketDBContext context;
        public TimesService(CourseMarketDBContext context)
        {
            this.context = context;
        }

        public async Task<IEnumerable<Times>> GetTimes()
        {
            var times = await context.Times.Where(time => time.IsDeleted != true).ToArrayAsync();
            return times;
        }

        public async Task<Times> GetTimes(int id)
        {
            var times = await context.Times.Where(time => time.IsDeleted != true && time.Id == id).SingleOrDefaultAsync();
            return times;
        }
    }

    public interface ITimesService
    {
        Task<IEnumerable<Times>> GetTimes();
        Task<Times> GetTimes(int id);
    }
}

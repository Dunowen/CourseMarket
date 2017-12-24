using CourseMarket.Data;
using CourseMarket.Model;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CourseMarket.Services
{
    public class SubjectsService : ISubjectsService
    {
        private readonly CourseMarketDBContext context;

        public SubjectsService(CourseMarketDBContext context)
        {
            this.context = context;
        }

        public async Task<Subjects> CreateSubject(Subjects subject)
        {
            await context.Subjects.AddAsync(subject);
            await context.SaveChangesAsync();
            return subject;
        }

        public async Task<IEnumerable<Subjects>> GetSubjects()
        {
            var subject = await context.Subjects.Where(s => s.IsDeleted != true).ToArrayAsync();
            return subject;
        }

        public async Task<Subjects> GetSubject(int id)
        {
            var subject = await context.Subjects.Where(s => s.IsDeleted != true && s.Id == id).SingleOrDefaultAsync();
            return subject;
        }

        public Task<Subjects> UpdateSubject(Subjects subject)
        {
            throw new NotImplementedException();
        }

        public async Task<Subjects> GetSubject(string code)
        {
            var subject = await context.Subjects.Where(s => s.IsDeleted != true && s.Code == code).SingleOrDefaultAsync();
            return subject;
        }
    }

    public interface ISubjectsService
    {
        Task<IEnumerable<Subjects>> GetSubjects();
        Task<Subjects> GetSubject(int id);
        Task<Subjects> CreateSubject(Subjects subject);
        Task<Subjects> UpdateSubject(Subjects subject);
        Task<Subjects> GetSubject(string code);
    }
}

using CourseMarket.Model;
using CourseMarket.Services;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CourseMarket.Controllers
{
    [Route("api/[controller]")]
    public class SubjectsController : Controller
    {
        private readonly ISubjectsService subjectsService;

        public SubjectsController(ISubjectsService subjectsService)
        {
            this.subjectsService = subjectsService;
        }

        [HttpPost]
        public async Task<IActionResult> Post([FromBody]Subjects subject)
        {
            Subjects test = await subjectsService.GetSubject(subject.Code);
            if (test == null)
            {
                try
                {
                    await subjectsService.CreateSubject(subject);

                    var res = new ResponseContainer<Subjects>()
                    {
                        Success = true,
                        Data = subject
                    };

                    return CreatedAtAction("Post", res);
                }
                catch (Exception ex)
                {
                    var res = new ResponseContainer<Subjects>()
                    {
                        Success = false,
                        Exception = ex
                    };
                    return CreatedAtAction("Post", res);
                }
            }
            else
            {
                var res = new ResponseContainer<Subjects>()
                {
                    Success = false,
                    Message = "Már van ilyen kóddal rendelkező tantárgy."
                };
                return BadRequest(res);
            }
        }
    }
}

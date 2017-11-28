using CourseMarket.Model;
using CourseMarket.Services;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Threading.Tasks;

namespace CourseMarket.Controllers
{
    [Route("api/[controller]")]
    public class UniversitiesController : Controller
    {
        private readonly IUniversitiesService universitiesService;

        public UniversitiesController(IUniversitiesService universitiesService)
        {
            this.universitiesService = universitiesService;
        }

        [HttpGet]
        public async Task<IActionResult> Get()
        {
            try
            {
                var uni = await universitiesService.GetUniversities();
                var res = new ResponseContainer<Universities>()
                {
                    Data = uni
                };
                return Ok(res);
            }
            catch (Exception ex)
            {
                var res = new ResponseContainer<Universities>()
                {
                    Exception = ex
                };
                return BadRequest(res);
            }
        }

        [HttpGet("{id}")]
        public async Task<IActionResult> Get(int id)
        {
            var uni = await universitiesService.GetUniversities(id);
            return Ok(uni);
        }
    }
}

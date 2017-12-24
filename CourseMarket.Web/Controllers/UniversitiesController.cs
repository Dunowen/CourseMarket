using CourseMarket.Model;
using CourseMarket.Services;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Threading.Tasks;

namespace CourseMarket.Controllers
{
    [Authorize]
    [Route("api/[controller]")]
    public class UniversitiesController : Controller
    {
        private readonly IUniversitiesService UniversitiesService;

        public UniversitiesController(IUniversitiesService universitiesService)
        {
            this.UniversitiesService = universitiesService;
        }

        [HttpGet]
        public async Task<IActionResult> Get()
        {
            try
            {
                var uni = await UniversitiesService.GetUniversities();
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
            var uni = await UniversitiesService.GetUniversities(id);
            return Ok(uni);
        }
    }
}

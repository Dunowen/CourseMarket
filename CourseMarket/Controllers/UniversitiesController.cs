using CourseMarket.Services;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
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
            var uni = await universitiesService.GetUniversities();
            return Ok(uni);
        }

        [HttpGet("{id}")]
        public async Task<IActionResult> Get(int id)
        {
            var uni = await universitiesService.GetUniversities(id);
            return Ok(uni);
        }
    }
}

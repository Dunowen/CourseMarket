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
    public class TimesController : Controller
    {
        private readonly ITimesService timesService;

        public TimesController(ITimesService timesService)
        {
            this.timesService = timesService;
        }

        [HttpGet]
        public async Task<IActionResult> Get()
        {
            try
            {
                var times = await timesService.GetTimes();
                var res = new ResponseContainer<Times>()
                {
                    Data = times
                };
                return Ok(res);
            }
            catch (Exception ex)
            {
                var res = new ResponseContainer<Times>()
                {
                    Exception = ex
                };
                return BadRequest(res);
            }
        }

        [HttpGet("{id}")]
        public async Task<IActionResult> Get(int id)
        {
            try
            {
                var times = await timesService.GetTimes(id);
                var res = new ResponseContainer<Times>()
                {
                    Data = times
                };
                return Ok(res);
            }
            catch (Exception ex)
            {
                var res = new ResponseContainer<Times>()
                {
                    Exception = ex
                };
                return BadRequest(res);
            }
        }
    }
}

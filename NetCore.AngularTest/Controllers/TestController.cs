using Microsoft.AspNetCore.Mvc;
using Portal.Smsis.Host.Models;
using System.Collections.Generic;

namespace NetCore.AngularTest.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class TestController : ControllerBase
    {
        public TestController()
        {
                
        }

        [HttpGet]
        public IEnumerable<TestData> Get()
        {
            var data = new TestData[]
            {
                new TestData
                {
                    Id = 1,
                    Name = "Name_1",
                },
                new TestData
                {
                    Id = 2,
                    Name = "Name_2",
                },
            };

            return data;
        }

        [HttpPost]
        public IActionResult Post()
        {
            return Ok();
        }
    }
}

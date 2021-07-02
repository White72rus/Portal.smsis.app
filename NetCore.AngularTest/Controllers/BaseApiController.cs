using Microsoft.AspNetCore.Mvc;
using Portal.Smsis.DAL.Interfaces;
using System.Text.Json;

namespace Portal.Smsis.Host.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class BaseApiController : ControllerBase
    {
        private readonly INumberingByRegionEFRepository _numberingByRegionEF;
        public BaseApiController(INumberingByRegionEFRepository numberingByRegionEF)
        {
            _numberingByRegionEF = numberingByRegionEF;
        }

        [HttpGet]
        public IActionResult Get()
        {
            var temp = _numberingByRegionEF.GetAllData();

            return Ok(JsonSerializer.Serialize(temp));
        }

        [HttpPost]
        public IActionResult Post()
        {

            return Ok();
        }
    }
}

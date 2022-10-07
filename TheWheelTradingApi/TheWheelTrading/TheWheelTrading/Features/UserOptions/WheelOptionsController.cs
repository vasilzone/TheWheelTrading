using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;
using TheWheelTrading.Features.UserOptions;

namespace TheWheelTrading.Features.Login
{  
    [ApiController]
    [Route("api/[controller]")]
    public class WheelOptionsController : Controller
    {
        private IConfiguration _config;
        private GetOptionsQuery _getOptionsQuery;

        public WheelOptionsController(IConfiguration config, GetOptionsQuery getOptionsQuery)
        {
            _config = config;
            _getOptionsQuery = getOptionsQuery;
        }

        [AllowAnonymous]
        [HttpGet]
        public async Task<IActionResult> Get()
        {
            return Ok(await _getOptionsQuery.GetOptions());
        } 
    }
}
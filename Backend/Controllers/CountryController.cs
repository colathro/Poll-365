using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Backend.DataAccess;
using Backend.Models;

namespace Backend.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CountryController : ControllerBase
    {

        private readonly PollContext _context;

        public CountryController(PollContext context)
        {
            _context = context;
        }

        // GET api/values
        [HttpGet]
        public ActionResult<List<Country>> Get()
        {
            return _context.Countries.ToList();
        }

        // GET api/values/5
        [HttpGet("{id}")]
        public ActionResult<Country> Get(int id)
        {
            return _context.Countries
                            .Single(b => b.Id == id);
        }
    }
}

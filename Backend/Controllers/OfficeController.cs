using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Backend.DataAccess;
using Backend.Models;

namespace Backend.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class OfficeController : ControllerBase
    {
        private readonly PollContext _context;

        public OfficeController(PollContext context)
        {
            _context = context;
        }

        // GET api/values
        [HttpGet]
        public ActionResult<List<Office>> Get()
        {
            return _context.Offices.Include(Office => Office.Country).ToList();
        }

        // GET api/values/5
        [HttpGet("{id}")]
        public ActionResult<Office> Get(int id)
        {
            return _context.Offices
                            .Single(b => b.Id == id);
        }

        [HttpGet("country/{id}")]
        public ActionResult<List<Office>> GetByCountry(int id)
        {
            string sql = $"SELECT * FROM Office WHERE Office.CountryId = {id}";
            return _context.Offices.FromSql(sql).Include(b => b.Country).OrderBy(b => b.Name).ToList();
        }
    }
}

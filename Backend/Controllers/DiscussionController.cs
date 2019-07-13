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
    public class DiscussionController : ControllerBase
    {
        private readonly PollContext _context;

        public DiscussionController(PollContext context)
        {
            _context = context;
        }    

        // GET api/values
        [HttpGet]
        public ActionResult<List<Discussion>> Get()
        {
            return _context.Discussions.ToList();
        }

        // GET api/values/5
        [HttpGet("{id}")]
        public ActionResult<Discussion> Get(int id)
        {
            return _context.Discussions
                            .Single(b => b.Id == id);
        }

        [HttpPost]
        public void Post([FromBody] Discussion Discussion)
        {
            _context.Discussions.Add(Discussion);
            _context.SaveChanges();
        }
    }
}

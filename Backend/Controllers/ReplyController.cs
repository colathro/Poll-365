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
    public class ReplyController : ControllerBase
    {
        private readonly PollContext _context;

        public ReplyController(PollContext context)
        {
            _context = context;
        }

        // GET api/values
        [HttpGet]
        public ActionResult<List<Reply>> Get()
        {
            return _context.Replies.ToList();
        }

        // GET api/values/5
        [HttpGet("{id}")]
        public ActionResult<Reply> Get(int id)
        {
            return _context.Replies
                            .Single(b => b.Id == id);
        }

        [HttpPost]
        public void Post([FromBody] Reply Reply)
        {
            _context.Replies.Add(Reply);
            _context.SaveChanges();
        }
    }
}

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
        public ActionResult<List<Reply>> Get(int id)
        {
            return _context.Replies
                            .Where(r => r.DiscussionId == id).OrderBy(r => r.ReplyOrder).ToList();
        }

        [HttpPost]
        public void Post([FromBody] Reply reply)
        {
            reply.CreatedOn = DateTime.UtcNow;
            reply.ReplyOrder = GetLatestReplyNumber(reply.DiscussionId);

            _context.Replies.Add(reply);
            _context.SaveChanges();
        }

        private int GetLatestReplyNumber(int discussionId)
        {
            try 
            {
                var result = _context.Replies.Where(d => d.DiscussionId == discussionId).OrderByDescending(d => d.ReplyOrder).First();
                int ret = result.ReplyOrder;
                return ret += 1;
            }
            catch (InvalidOperationException e)
            {
                return 0;
            }
        }
    }
}

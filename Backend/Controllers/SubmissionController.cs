using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using Microsoft.AspNetCore.Mvc;
using Backend.DataAccess;
using Backend.Models;

namespace Backend.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class SubmissionController : ControllerBase
    {
        private readonly PollContext _context;

        public SubmissionController(PollContext context)
        {
            _context = context;
        }

        // GET api/values
        [HttpGet]
        public ActionResult<List<Submission>> Get()
        {
            return _context.Submissions.Include(submission => submission.Office).ToList();
        }

        // GET api/values/5
        [HttpGet("{id}")]
        public ActionResult<Submission> Get(int id)
        {
            return _context.Submissions
                            .Single(b => b.Id == id);
        }

        [HttpPost]
        public void Post([FromBody] Submission submission)
        {
            _context.Submissions.Add(submission);
            _context.SaveChanges();
        }
    }
}

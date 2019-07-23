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
            return _context.Submissions.ToList();
        }

        // GET api/values/5
        [HttpGet("{id}")]
        public ActionResult<Submission> Get(int id)
        {
            return _context.Submissions
                            .Single(b => b.Id == id);
        }

        [HttpPost]
        public IActionResult Post([FromBody] SubmissionBody submission)
        {
            try
            {
                submission.Submission.CreatedOn = DateTime.UtcNow;
                _context.Submissions.Add(submission.Submission);
                _context.SaveChanges();

                ParseAnswerList(submission.Answers);

                foreach (var item in submission.Answers)
                {
                    item.CreatedOn = DateTime.UtcNow;
                    item.SubmissionId = submission.Submission.Id;
                    _context.Answers.Add(item);
                }
                _context.SaveChanges();

                submission.Discussion.SubmissionId = submission.Submission.Id;
                submission.Discussion.CreatedOn = DateTime.UtcNow;
                _context.Discussions.Add(submission.Discussion);

                _context.SaveChanges();
            }
            catch (Exception e)
            {
                return StatusCode(500);
            }
            return StatusCode(201);
        }

        static private void ParseAnswerList(List<Answer> answers)
        {
            foreach (var answer in answers)
            {
                if (answer.Value < 1 || answer.Value > 10)
                {
                    throw new System.ArgumentException("Submitted Value for Answer Out of Range", "original");
                }
            }
        }
    }
}

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
    public class AnswerController : ControllerBase
    {
        private readonly PollContext _context;

        public AnswerController(PollContext context)
        {
            _context = context;
        }

        // GET api/values
        [HttpGet]
        public ActionResult<List<Answer>> Get()
        {
            return _context.Answers.Include(Answer => Answer.Question).ToList();
        }

        // GET api/values/5
        [HttpGet("{id}")]
        public ActionResult<Answer> Get(int id)
        {
            return _context.Answers
                            .Single(b => b.Id == id);
        }

        [HttpPost]
        public void Post([FromBody] Answer answer)
        {
            _context.Answers.Add(answer);
            _context.SaveChanges();
        }
    }
}

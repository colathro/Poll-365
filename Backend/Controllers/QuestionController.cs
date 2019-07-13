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
    public class QuestionController : ControllerBase
    {
        private readonly PollContext _context;

        public QuestionController(PollContext context)
        {
            _context = context;
        }

        // GET api/values
        [HttpGet]
        public ActionResult<List<Question>> Get()
        {
            return _context.Questions.ToList();
        }

        // GET api/values/5
        [HttpGet("{id}")]
        public ActionResult<Question> Get(int id)
        {
            return _context.Questions
                            .Single(b => b.Id == id);
        }
    }
}

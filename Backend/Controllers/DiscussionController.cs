using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Backend.DataAccess;
using Backend.Models;
using Microsoft.EntityFrameworkCore;
using System.Data.SqlClient;
using System.Linq;

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

        // GET api/values/5
        [HttpGet("{id}")]
        public ActionResult<Discussion> Get(int id)
        {
            return _context.Discussions
                            .Single(b => b.Id == id);
        }

        [HttpGet]
        public ActionResult<List<Discussion>> GetTop([FromQuery] PagingUrlQuery urlQuery)
        {
            string sql = @"SELECT * FROM Discussion";
            if (urlQuery.PageNumber.HasValue)
            {
                sql += $" ORDER BY Discussion.CreatedOn DESC OFFSET {urlQuery.PageSize} * ({urlQuery.PageNumber}  - 1) ROWS FETCH NEXT {urlQuery.PageSize} ROWS ONLY";
            }
            return _context.Discussions.FromSql(sql).ToList();
        }
    }
}

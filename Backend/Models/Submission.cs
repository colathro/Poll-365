using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace Backend.Models
{
    public class Submission : Base
    {
        public int Id { get; set; }

        public int OfficeId { get; set; }
    }
}
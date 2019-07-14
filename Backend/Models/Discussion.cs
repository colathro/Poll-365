using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace Backend.Models
{
    public class Discussion : Base
    {
        public int Id { get; set; }

        [MaxLength(50000)]
        public string Text { get; set; }

        public Submission Submission { get; set; }
    }
}
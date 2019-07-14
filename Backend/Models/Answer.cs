using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace Backend.Models
{
    public class Answer : Base
    {
        public int Id { get; set; }

        public int Value { get; set; }

        public Submission Submission { get; set; }

        public Question Question { get; set; }
    }
}
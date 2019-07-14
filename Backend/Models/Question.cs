using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace Backend.Models
{
    public class Question : Base
    {
        public int Id { get; set; }

        [MaxLength(2048)]
        public string Text { get; set; }
    }
}
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace Backend.Models
{
    public class Office : Base
    {
        public int Id { get; set; }

        [MaxLength(1024)]
        public string Name { get; set; }

        public Country Country { get; set; }
    }
}
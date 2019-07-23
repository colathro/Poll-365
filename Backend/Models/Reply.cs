using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace Backend.Models
{
    public class Reply : Base
    {
        public int Id { get; set; }

        [MaxLength(50000)]
        public string Text { get; set; }

        public int ReplyOrder { get; set; }

        public int DiscussionId { get; set; }
    }
}
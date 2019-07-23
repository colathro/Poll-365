using Backend.Models;
using System;
using System.Collections.Generic;
using System.Linq;

namespace Backend.DataAccess
{
    public class SubmissionBody
    {
        public List<Answer> Answers;

        public Discussion Discussion;

        public Submission Submission;
    }
}
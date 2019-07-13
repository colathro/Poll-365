using Microsoft.EntityFrameworkCore;
using Backend.Controllers;
using Backend.Models;

namespace Backend.DataAccess
{
    public class PollContext : DbContext
    {
        public PollContext(DbContextOptions<PollContext> options) : base(options)
        {
        }

        public DbSet<Answer> Answers { get; set; }
        public DbSet<Country> Countries { get; set; }
        public DbSet<Discussion> Discussions { get; set; }
        public DbSet<Office> Offices { get; set; }
        public DbSet<Question> Questions { get; set; }
        public DbSet<Reply> Replies { get; set; }
        public DbSet<Submission> Submissions { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Answer>().ToTable("Answer");
            modelBuilder.Entity<Country>().ToTable("Country");
            modelBuilder.Entity<Discussion>().ToTable("Discussion");
            modelBuilder.Entity<Office>().ToTable("Office");
            modelBuilder.Entity<Question>().ToTable("Question");
            modelBuilder.Entity<Reply>().ToTable("Reply");
            modelBuilder.Entity<Submission>().ToTable("Submission");
        }
    }
}
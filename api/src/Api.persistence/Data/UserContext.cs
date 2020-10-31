using System;
using System.ComponentModel.DataAnnotations;
using Microsoft.Extensions.Configuration;
using Microsoft.EntityFrameworkCore;
using src.Api.domain.Entity;

namespace src.Api.persistence.Data
{
  public class UserContext : DbContext
  {
    public UserContext(DbContextOptions<UserContext> options) : base(options)
    { }

    [Key]
    private String id;
    public DbSet<User> Users { get; set; }
    public DbSet<Character> Character { get; set; }
    public IConfiguration Configuration { get; }

    protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
    {
      if (!optionsBuilder.IsConfigured)
      {
        optionsBuilder.UseNpgsql(
          Configuration.GetConnectionString("DefaultConnection"),
          b => b.MigrationsAssembly("Api.web")
          );
      }
    }
    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
      modelBuilder.Entity<User>().ToTable("User").HasKey("id");
    }

  }
}
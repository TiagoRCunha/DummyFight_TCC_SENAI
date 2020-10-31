using System;
using System.ComponentModel.DataAnnotations;
using Microsoft.Extensions.Configuration;
using Microsoft.EntityFrameworkCore;
using src.Api.domain.Entity;

namespace src.Api.persistence.Data
{
  public class CharacterContext : DbContext
  {
    public CharacterContext(DbContextOptions<CharacterContext> options) : base(options)
    { }

    [Key]
    private String id;
    public DbSet<Character> Characters { get; set; }
    public IConfiguration Configuration { get; }

    protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
            => optionsBuilder.UseNpgsql(
                Configuration.GetConnectionString("DefaultConnection"),
                b => b.MigrationsAssembly("Api.web")
                );
    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
      modelBuilder.Entity<Character>().ToTable("Character").Ignore("Status").HasKey("id");
    }

  }
}
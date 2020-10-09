using System;
using System.ComponentModel.DataAnnotations;
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

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
      // FIXME The property 'id' cannot be added to the type 'User' because there was no property type specified and there is no corresponding CLR property or field. To add a shadow state property the property type must be specified.
      modelBuilder.Entity<User>().ToTable("User").HasKey("id");
    }

  }
}
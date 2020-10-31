using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using src.Api.domain.Entity;

namespace src.Api.persistence.EntityConfig
{
  public class UserConfig : IEntityTypeConfiguration<User>
  {
    public void Configure(EntityTypeBuilder<User> builder)
    {
      builder.ToTable("User");

      builder.Property(user => user.id)
        .HasColumnName("oid")
        .IsRequired();

      builder.Property(user => user.email)
        .IsRequired();

      builder.Property(user => user.username)
        .HasMaxLength(30)
        .IsRequired();

      builder.Property(user => user.points)
        .HasDefaultValue(0)
        .IsRequired();

      builder.Property(user => user.tag)
        .HasDefaultValue("user")
        .IsRequired();

      builder.Property(user => user.character)
        .HasColumnName("character_id");
    }
  }
}
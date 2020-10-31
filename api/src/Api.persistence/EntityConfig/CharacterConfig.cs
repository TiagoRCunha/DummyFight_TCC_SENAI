using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using src.Api.domain.Entity;

namespace src.Api.persistence.EntityConfig
{
  public class CharacterConfig : IEntityTypeConfiguration<Character>
  {
    public void Configure(EntityTypeBuilder<Character> builder)
    {
      builder.ToTable("Character");

      builder.Property(character => character.id)
        .HasColumnName("oid")
        .IsRequired();

      builder.Property(character => character.firstname)
        .HasMaxLength(15)
        .IsRequired();

      builder.Property(character => character.lastname)
        .HasMaxLength(15)
        .IsRequired();

      builder.Property(character => character.grade)
        .HasDefaultValue("novice")
        .IsRequired();

      builder.Property(character => character.experience)
        .HasDefaultValue(0)
        .IsRequired();

      builder.Property(character => character.status)
        .HasColumnName("status_id");

      builder.Property(character => character.skills)
        .HasColumnName("skills_id");

      builder.Property(character => character.equipaments)
        .HasColumnName("equipament_id");

      builder.Property(character => character.potions)
        .HasColumnName("potion_id");

      builder.Property(character => character.defence)
        .HasDefaultValue(0.0);

      builder.Property(character => character.attack)
        .HasDefaultValue(0.0);

      builder.Property(character => character.power)
        .HasDefaultValue(0.0);

      builder.Property(character => character.stamina)
        .HasDefaultValue(0.0);
    }
  }
}
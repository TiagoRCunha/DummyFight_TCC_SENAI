using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using src.Api.domain.Entity;

namespace src.Api.web.Models
{
  [Table("Character")]
  public class Characters : Character
  {
    [Key]
    public new String id { get; set; }

    [MaxLength(15, ErrorMessage = "Este campo deve conter entre 3 a 15 caracteres")]
    [MinLength(3, ErrorMessage = "Este campo deve conter entre 3 a 15 caracteres")]
    public new String firstname { get; set; }

    [MaxLength(15, ErrorMessage = "Este campo deve conter entre 3 a 15 caracteres")]
    [MinLength(3, ErrorMessage = "Este campo deve conter entre 3 a 15 caracteres")]
    public new String lastname { get; set; }
    public new String grade { get; set; }
    public new Int64 experience { get; set; }
    [NotMappedAttribute]
    public new Status status { get; set; }
    [NotMappedAttribute]
    public new Skill skills { get; set; }
    [NotMappedAttribute]
    public new Equipaments equipaments { get; set; }
    [NotMappedAttribute]
    public new Potion potions { get; set; }
    public new Single defence { get; set; }
    public new Single attack { get; set; }
    public new Single power { get; set; }
    public new Single stamina { get; set; }
  }
}
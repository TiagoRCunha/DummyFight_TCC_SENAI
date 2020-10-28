using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using src.Api.domain.Entity;

namespace src.Api.web.Models
{
  [Table("User")]
  public class Users : User
  {
    [Key]
    public new String id { get; set; }

    [MaxLength(30, ErrorMessage = "Este campo deve conter entre 3 a 30 caracteres")]
    [MinLength(3, ErrorMessage = "Este campo deve conter entre 3 a 30 caracteres")]
    public new String username { get; set; }
    [Required]
    String password { get; set; }
    public new String tag { get; set; }
    [EmailAddress]
    [Required]
    public new String email { get; set; }
    public new Int64 points { get; set; }
    public new Character character { get; set; }
  }
}
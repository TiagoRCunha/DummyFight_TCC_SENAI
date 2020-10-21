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
    public String id { get; set; }

    [MaxLength(30, ErrorMessage = "Este campo deve conter entre 3 a 30 caracteres")]
    [MinLength(3, ErrorMessage = "Este campo deve conter entre 3 a 30 caracteres")]
    public String name { get; set; }
    String password { get; set; }
    public String tag { get; set; }
    public String email { get; set; }
    public Int64 points { get; set; }
  }
}
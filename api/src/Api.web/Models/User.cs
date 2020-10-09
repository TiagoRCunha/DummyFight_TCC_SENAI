using System.ComponentModel.DataAnnotations;

namespace src.Api.web.Models
{
    public class User
    {
      [Key]
      public int id {get; set;}

      [MaxLength(30, ErrorMessage = "Este campo deve conter entre 3 a 30 caracteres")]
      [MinLength(3, ErrorMessage = "Este campo deve conter entre 3 a 30 caracteres")]
      public string username {get; set;}
    }
}
using System;
using System.ComponentModel.DataAnnotations.Schema;

namespace src.Api.domain.Entity
{
  public class User : Entity
  {
    public String username { get; set; }
    String password { get; set; }
    public String tag { get; set; }
    public String email { get; set; }
    public Int64 points { get; set; }
    [ForeignKey("character_id")]
    public Character character { get; set; }
  }
}
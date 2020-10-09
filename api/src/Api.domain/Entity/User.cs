using System;

namespace src.Api.domain.Entity
{
  public class User
  {
    String name { get; set; }
    String password { get; set; }
    String tag { get; set; }
    String email { get; set; }
    Character character { get; set; }
    Int64 points { get; set; }
  }
}
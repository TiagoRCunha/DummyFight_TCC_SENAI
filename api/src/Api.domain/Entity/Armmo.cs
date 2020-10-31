using System;

namespace src.Api.domain.Entity
{
  public class Armmo : Entity
  {
    Int64 quantity { get; set; }
    String type { get; set; }
    String name { get; set; }
    Int64 attack { get; set; }

  }
}
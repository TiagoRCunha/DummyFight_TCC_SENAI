using System;

namespace src.Api.domain.Interfaces
{
  public interface Weapon : IEntity
  {
    Int64 durability { get; }
    Int64 attack { get; set; }
    Int64 price { get; set; }
    String name { get; set; }
    String description { get; set; }
    Int64 fragmentSlot { get; set; }
    String tag { get; set; }
  }
}
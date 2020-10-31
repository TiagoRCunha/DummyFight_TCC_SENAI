using System;

namespace src.Api.domain.Interfaces
{
  public interface Equipament
  {
    Int64 durability { get; set; }
    Int64 defence { get; set; }
    Int64 price { get; set; }
    String name { get; set; }
    String description { get; set; }
    Int64 fragmentSlot { get; set; }
    String tag { get; set; }
  }
}
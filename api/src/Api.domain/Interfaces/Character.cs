using System;

namespace src.Api.domain.Interfaces
{
  public interface ICharacter : IEntity
  {
    String firstname { get; set; }
    String lastname { get; set; }
    String grade { get; set; }
    Int64 experience { get; set; }
    Status status { get; set; }
    Skills skills { get; set; }
    Equipaments equipaments { get; set; }
    Potions potions { get; set; }
    Single defence { get; set; }
    Single attack { get; set; }
    Single power { get; set; }
    Single stamina { get; set; }

  }
}
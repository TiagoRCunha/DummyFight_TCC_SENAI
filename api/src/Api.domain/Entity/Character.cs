using System;

namespace src.Api.domain.Entity
{
  public class Character : Entity
  {
    public String firstname { get; set; }
    public String lastname { get; set; }
    public String grade { get; set; }
    public long experience { get; set; }
    public Status status { get; set; }
    public Skill skills { get; set; }
    public Equipaments equipaments { get; set; }
    public Potion potions { get; set; }
    public float defence { get; set; }
    public float attack { get; set; }
    public float power { get; set; }
    public float stamina { get; set; }

  }
}
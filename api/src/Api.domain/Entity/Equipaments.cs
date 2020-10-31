using src.Api.domain.Interfaces;

namespace src.Api.domain.Entity
{
  public class Equipaments : Entity, IEquipaments
  {
    public Head head { get; set; }
    public Body body { get; set; }
    public Hands hands { get; set; }
    public Legs legs { get; set; }
    public Feet feet { get; set; }
    public Neck neck { get; set; }
    public PrimaryWeapon primaryWeapon { get; set; }
    public SecondWeapon secondWeapon { get; set; }
    public Armmo armmo { get; set; }
    public Belt belt { get; set; }
  }

}
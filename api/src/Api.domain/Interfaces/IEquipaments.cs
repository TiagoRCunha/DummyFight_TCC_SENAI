using src.Api.domain.Entity;

namespace src.Api.domain.Interfaces
{
  public interface IEquipaments
  {
    Head head { get; set; }
    Body body { get; set; }
    Hands hands { get; set; }
    Legs legs { get; set; }
    Feet feet { get; set; }
    Neck neck { get; set; }
    PrimaryWeapon primaryWeapon { get; set; }
    SecondWeapon secondWeapon { get; set; }
    Armmo armmo { get; set; }
    Belt belt { get; set; }
  }
}
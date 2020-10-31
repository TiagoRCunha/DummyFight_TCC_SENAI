using src.Api.domain.Interfaces;

namespace src.Api.domain.Entity
{
  public class SecondWeapon : Entity, Weapon
  {
    public long durability => throw new System.NotImplementedException();

    public long attack { get => throw new System.NotImplementedException(); set => throw new System.NotImplementedException(); }
    public long price { get => throw new System.NotImplementedException(); set => throw new System.NotImplementedException(); }
    public string name { get => throw new System.NotImplementedException(); set => throw new System.NotImplementedException(); }
    public string description { get => throw new System.NotImplementedException(); set => throw new System.NotImplementedException(); }
    public long fragmentSlot { get => throw new System.NotImplementedException(); set => throw new System.NotImplementedException(); }
    public string tag { get => throw new System.NotImplementedException(); set => throw new System.NotImplementedException(); }

  }
}
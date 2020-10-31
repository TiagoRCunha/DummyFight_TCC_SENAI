using System;
using src.Api.domain.Interfaces;

namespace src.Api.domain.Entity
{
  public class Status : Entity, IStatus
  {
    public Int64 strength => throw new System.NotImplementedException();

    public Int64 dexterity => throw new System.NotImplementedException();

    public Int64 constitution => throw new System.NotImplementedException();

    public Int64 wisdom => throw new System.NotImplementedException();

    public Int64 inteligence => throw new System.NotImplementedException();
  }
}
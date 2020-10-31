using System;

namespace src.Api.domain.Interfaces
{
  public interface IStatus
  {
    Int64 strength { get; }
    Int64 dexterity { get; }
    Int64 constitution { get; }
    Int64 wisdom { get; }
    Int64 inteligence { get; }
  }
}
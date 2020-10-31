using System;
using System.ComponentModel.DataAnnotations.Schema;

namespace src.Api.domain.Entity
{
  public abstract class Entity
  {

    [Column("oid")]
    public virtual String id { get; protected set; }
  }
}
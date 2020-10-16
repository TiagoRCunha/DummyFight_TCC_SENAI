export abstract class Entity<T> {
  protected readonly _id: String

  constructor(id?: String) {
    this._id = id ? id : ''
  }
}

export abstract class Entity<T> {
  protected readonly _id: String
  public props: T

  constructor(props: T, id?: String) {
    this._id = id ? id : ''
    this.props = props
  }
}

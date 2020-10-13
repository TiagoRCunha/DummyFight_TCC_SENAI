export interface DomainMapper<A, B> {
  mapApiModelToDomain(apiModel: A): B
}

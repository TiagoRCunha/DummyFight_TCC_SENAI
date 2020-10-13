export interface ApiMapper<A, B> {
  mapDomainToApiModel(domain: A): B
}

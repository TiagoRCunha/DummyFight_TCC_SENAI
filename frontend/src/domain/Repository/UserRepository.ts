import mock from '../../mocks/version_01.json'
import { User } from '../Entities'
// import { UserMapping } from '../Mappers/domain/UserMapping'

export interface UserRepository {
  getUser(id: string): Promise<User>
}

export class UserRepositoryImpl implements UserRepository {
  // private userMapping: UserMapping

  constructor() {
    // this.userMapping = new UserMapping()
  }

  public async getUser(id: string): Promise<User> {
    return new Promise((resolve, reject) => {
      const apiId = mock.id

      if (id === apiId) {
        // this.userMapping.mapApiModelToDomain(mock)
        resolve()
      }

      reject()
    })
  }
}

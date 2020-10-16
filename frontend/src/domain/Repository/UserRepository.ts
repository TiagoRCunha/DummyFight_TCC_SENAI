import { User } from '../Entities'
import mock from '../../mocks/version_01.json'

export interface UserRepository {
  getUser(id: string): Promise<User>
}

export class UserRepositoryImpl implements UserRepository {
  public async getUser(id: string): Promise<User> {
    return new Promise((resolve, reject) => {
      const apiId = mock.id

      if (id === apiId) {
        // map api to domain
        resolve()
      }

      reject()
    })
  }
}

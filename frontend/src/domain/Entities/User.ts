import { Character } from './Character'
import { Entity } from '@domain/Shared'

export interface User {
  name: String
  password: String
  tag: String
  email: String
  character: Character
  points: Number
}

export class User extends Entity<User> {}

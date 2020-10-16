import { Character } from './Character'

export interface User {
  name: String
  password: String
  tag: String
  email: String
  character: Character
  points: Number
}

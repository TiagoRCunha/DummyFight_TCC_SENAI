import { Skills, Equipaments, Status, Potions } from '.'

export interface Character {
  firstname: String
  lastname: String
  grade: String
  experience: Number
  status: Status
  skills: Skills
  equipaments: Equipaments
  potions: Potions
  defence: Number
  attack: Number
  power: Number
  stamina: Number
  Id: String
}

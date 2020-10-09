export interface Equipament {
  image: String
  durability: Number
  defence: Number
  price: Number
  name: String
  description: String
  fragmentSlot: Number
  tag: String
}

export interface Weapon extends Equipament {
  attack: Number
}

export interface Head extends Equipament {}
export interface Neck extends Equipament {}
export interface Body extends Equipament {}
export interface Hands extends Equipament {}
export interface Legs extends Equipament {}
export interface Feet extends Equipament {}
export interface PrimaryWeapon extends Weapon {
  twoHanded: Boolean
  needArmmo: Boolean
}
export interface SecondWeapon extends Weapon {}
export interface Armmo {}
export interface Belt extends Equipament {}

export interface Equipaments {
  head: Head
  body: Body
  hands: Hands
  legs: Legs
  feet: Feet
  neck: Neck
  primaryWeapon: PrimaryWeapon
  secondWeapon: SecondWeapon
  armmo: Armmo
  belt: Belt
}

export class Equipaments implements Equipaments {}

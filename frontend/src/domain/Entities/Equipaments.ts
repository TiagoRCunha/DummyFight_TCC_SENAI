export interface Head {}
export interface Neck {}
export interface Body {}
export interface Hands {}
export interface Legs {}
export interface Feet {}
export interface Weapon {}
export interface PrimaryWeapon extends Weapon {}
export interface SecondWeapon extends Weapon {}
export interface Armmo {}
export interface Belt {}

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

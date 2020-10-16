import { User } from '../../Entities'
import { DomainMapper } from './DomainMapper'
import { components } from '../../../mocks/UserApiModel'

export class UserMapping
  implements DomainMapper<components['schemas']['User'], User> {
  mapApiModelToDomain(user: components['schemas']['User']): User {
    const armmoApiModel = user.character.equipaments.armmo
    const beltApiModel = user.character.equipaments.belt
    const bodyApiModel = user.character.equipaments.body
    const feetApiModel = user.character.equipaments.feet
    const handsApiModel = user.character.equipaments.hands
    const headApiModel = user.character.equipaments.head
    const legsApiModel = user.character.equipaments.legs
    const neckApiModel = user.character.equipaments.neck
    const primaryWeaponApiModel = user.character.equipaments.primaryWeapon
    const secondWeaponApiModel = user.character.equipaments.secondWeapon

    const result: User = {
      //_id: user.id,
      character: {
        Id: user.character.id,
        attack: user.character.attack,
        defence: user.character.defence,
        equipaments: {
          armmo: { id: armmoApiModel },
          belt: {
            defence: beltApiModel ? beltApiModel.defence : 0,
            description: beltApiModel ? beltApiModel.description : '',
            durability: beltApiModel ? beltApiModel.durability : 0,
            fragmentSlot: beltApiModel ? beltApiModel.fragmentSlot : 0,
            image: beltApiModel ? beltApiModel.image : '',
            name: beltApiModel ? beltApiModel.name : '',
            price: beltApiModel ? beltApiModel.price : 0,
            tag: beltApiModel ? beltApiModel.tag : ''
          },
          body: {
            defence: bodyApiModel ? bodyApiModel.defence : 0,
            description: bodyApiModel ? bodyApiModel.description : '',
            durability: bodyApiModel ? bodyApiModel.durability : 0,
            fragmentSlot: bodyApiModel ? bodyApiModel.fragmentSlot : 0,
            image: bodyApiModel ? bodyApiModel.image : '',
            name: bodyApiModel ? bodyApiModel.name : '',
            price: bodyApiModel ? bodyApiModel.price : 0,
            tag: bodyApiModel ? bodyApiModel.tag : ''
          },
          feet: {
            defence: feetApiModel ? feetApiModel.defence : 0,
            description: feetApiModel ? feetApiModel.description : '',
            durability: feetApiModel ? feetApiModel.durability : 0,
            fragmentSlot: feetApiModel ? feetApiModel.fragmentSlot : 0,
            image: feetApiModel ? feetApiModel.image : '',
            name: feetApiModel ? feetApiModel.name : '',
            price: feetApiModel ? feetApiModel.price : 0,
            tag: feetApiModel ? feetApiModel.tag : ''
          },
          hands: {
            defence: handsApiModel ? handsApiModel.defence : 0,
            description: handsApiModel ? handsApiModel.description : '',
            durability: handsApiModel ? handsApiModel.durability : 0,
            fragmentSlot: handsApiModel ? handsApiModel.fragmentSlot : 0,
            image: handsApiModel ? handsApiModel.image : '',
            name: handsApiModel ? handsApiModel.name : '',
            price: handsApiModel ? handsApiModel.price : 0,
            tag: handsApiModel ? handsApiModel.tag : ''
          },
          head: {
            defence: headApiModel ? headApiModel.defence : 0,
            description: headApiModel ? headApiModel.description : '',
            durability: headApiModel ? headApiModel.durability : 0,
            fragmentSlot: headApiModel ? headApiModel.fragmentSlot : 0,
            image: headApiModel ? headApiModel.image : '',
            name: headApiModel ? headApiModel.name : '',
            price: headApiModel ? headApiModel.price : 0,
            tag: headApiModel ? headApiModel.tag : ''
          },
          legs: {
            defence: legsApiModel ? legsApiModel.defence : 0,
            description: legsApiModel ? legsApiModel.description : '',
            durability: legsApiModel ? legsApiModel.durability : 0,
            fragmentSlot: legsApiModel ? legsApiModel.fragmentSlot : 0,
            image: legsApiModel ? legsApiModel.image : '',
            name: legsApiModel ? legsApiModel.name : '',
            price: legsApiModel ? legsApiModel.price : 0,
            tag: legsApiModel ? legsApiModel.tag : ''
          },
          neck: {
            defence: neckApiModel ? neckApiModel.defence : 0,
            description: neckApiModel ? neckApiModel.description : '',
            durability: neckApiModel ? neckApiModel.durability : 0,
            fragmentSlot: neckApiModel ? neckApiModel.fragmentSlot : 0,
            image: neckApiModel ? neckApiModel.image : '',
            name: neckApiModel ? neckApiModel.name : '',
            price: neckApiModel ? neckApiModel.price : 0,
            tag: neckApiModel ? neckApiModel.tag : ''
          },
          primaryWeapon: {
            defence: primaryWeaponApiModel ? primaryWeaponApiModel.defence : 0,
            description: primaryWeaponApiModel
              ? primaryWeaponApiModel.description
              : '',
            durability: primaryWeaponApiModel
              ? primaryWeaponApiModel.durability
              : 0,
            fragmentSlot: primaryWeaponApiModel
              ? primaryWeaponApiModel.fragmentSlot
              : 0,
            image: primaryWeaponApiModel ? primaryWeaponApiModel.image : '',
            name: primaryWeaponApiModel ? primaryWeaponApiModel.name : '',
            price: primaryWeaponApiModel ? primaryWeaponApiModel.price : 0,
            tag: primaryWeaponApiModel ? primaryWeaponApiModel.tag : '',
            attack: primaryWeaponApiModel ? primaryWeaponApiModel.attack : 0,
            needArmmo: primaryWeaponApiModel
              ? primaryWeaponApiModel.needArmmo
              : false,
            twoHanded: primaryWeaponApiModel
              ? primaryWeaponApiModel.twoHanded
              : false
          },
          secondWeapon: {
            defence: secondWeaponApiModel ? secondWeaponApiModel.defence : 0,
            description: secondWeaponApiModel
              ? secondWeaponApiModel.description
              : '',
            durability: secondWeaponApiModel
              ? secondWeaponApiModel.durability
              : 0,
            fragmentSlot: secondWeaponApiModel
              ? secondWeaponApiModel.fragmentSlot
              : 0,
            image: secondWeaponApiModel ? secondWeaponApiModel.image : '',
            name: secondWeaponApiModel ? secondWeaponApiModel.name : '',
            price: secondWeaponApiModel ? secondWeaponApiModel.price : 0,
            tag: secondWeaponApiModel ? secondWeaponApiModel.tag : '',
            attack: secondWeaponApiModel ? secondWeaponApiModel.attack : 0
          }
        },
        experience: user.character.experience,
        firstname: user.character.firstname,
        grade: user.character.grade,
        image: user.character.image,
        lastname: user.character.lastname,
        potions: {
          Id: user.character.potions ? user.character.potions.id : ''
        },
        power: user.character.power,
        skills: user.character.skills,
        stamina: user.character.stamina,
        status: {
          Id: user.character.status.id
        }
      },
      email: user.email,
      name: user.name,
      password: user.password,
      points: user.points,
      tag: user.tag
    }

    return result
  }
}

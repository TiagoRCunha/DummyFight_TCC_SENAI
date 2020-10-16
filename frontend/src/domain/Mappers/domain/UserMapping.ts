import { components } from '../../../mocks/UserApiModel'
import { User } from '../../Entities'
import { DomainMapper } from './DomainMapper'

export class UserMapping
  implements DomainMapper<components['schemas']['User'], User> {
  mapApiModelToDomain(user: components['schemas']['User']): User {
    const {
      attack,
      defence,
      equipaments,
      experience,
      firstname,
      grade,
      id,
      image,
      lastname,
      power,
      skills,
      stamina,
      status,
      potions
    } = user.character

    const {
      armmo,
      belt,
      body,
      feet,
      hands,
      head,
      legs,
      neck,
      primaryWeapon,
      secondWeapon
    } = equipaments

    const result: User = {
      character: {
        Id: id,
        attack,
        defence: defence,
        equipaments: {
          armmo: { id: armmo },
          belt: {
            defence: belt ? belt.defence : 0,
            description: belt ? belt.description : '',
            durability: belt ? belt.durability : 0,
            fragmentSlot: belt ? belt.fragmentSlot : 0,
            image: belt ? belt.image : '',
            name: belt ? belt.name : '',
            price: belt ? belt.price : 0,
            tag: belt ? belt.tag : ''
          },
          body: {
            defence: body ? body.defence : 0,
            description: body ? body.description : '',
            durability: body ? body.durability : 0,
            fragmentSlot: body ? body.fragmentSlot : 0,
            image: body ? body.image : '',
            name: body ? body.name : '',
            price: body ? body.price : 0,
            tag: body ? body.tag : ''
          },
          feet: {
            defence: feet ? feet.defence : 0,
            description: feet ? feet.description : '',
            durability: feet ? feet.durability : 0,
            fragmentSlot: feet ? feet.fragmentSlot : 0,
            image: feet ? feet.image : '',
            name: feet ? feet.name : '',
            price: feet ? feet.price : 0,
            tag: feet ? feet.tag : ''
          },
          hands: {
            defence: hands ? hands.defence : 0,
            description: hands ? hands.description : '',
            durability: hands ? hands.durability : 0,
            fragmentSlot: hands ? hands.fragmentSlot : 0,
            image: hands ? hands.image : '',
            name: hands ? hands.name : '',
            price: hands ? hands.price : 0,
            tag: hands ? hands.tag : ''
          },
          head: {
            defence: head ? head.defence : 0,
            description: head ? head.description : '',
            durability: head ? head.durability : 0,
            fragmentSlot: head ? head.fragmentSlot : 0,
            image: head ? head.image : '',
            name: head ? head.name : '',
            price: head ? head.price : 0,
            tag: head ? head.tag : ''
          },
          legs: {
            defence: legs ? legs.defence : 0,
            description: legs ? legs.description : '',
            durability: legs ? legs.durability : 0,
            fragmentSlot: legs ? legs.fragmentSlot : 0,
            image: legs ? legs.image : '',
            name: legs ? legs.name : '',
            price: legs ? legs.price : 0,
            tag: legs ? legs.tag : ''
          },
          neck: {
            defence: neck ? neck.defence : 0,
            description: neck ? neck.description : '',
            durability: neck ? neck.durability : 0,
            fragmentSlot: neck ? neck.fragmentSlot : 0,
            image: neck ? neck.image : '',
            name: neck ? neck.name : '',
            price: neck ? neck.price : 0,
            tag: neck ? neck.tag : ''
          },
          primaryWeapon: {
            defence: primaryWeapon ? primaryWeapon.defence : 0,
            description: primaryWeapon ? primaryWeapon.description : '',
            durability: primaryWeapon ? primaryWeapon.durability : 0,
            fragmentSlot: primaryWeapon ? primaryWeapon.fragmentSlot : 0,
            image: primaryWeapon ? primaryWeapon.image : '',
            name: primaryWeapon ? primaryWeapon.name : '',
            price: primaryWeapon ? primaryWeapon.price : 0,
            tag: primaryWeapon ? primaryWeapon.tag : '',
            attack: primaryWeapon ? primaryWeapon.attack : 0,
            needArmmo: primaryWeapon ? primaryWeapon.needArmmo : false,
            twoHanded: primaryWeapon ? primaryWeapon.twoHanded : false
          },
          secondWeapon: {
            defence: secondWeapon ? secondWeapon.defence : 0,
            description: secondWeapon ? secondWeapon.description : '',
            durability: secondWeapon ? secondWeapon.durability : 0,
            fragmentSlot: secondWeapon ? secondWeapon.fragmentSlot : 0,
            image: secondWeapon ? secondWeapon.image : '',
            name: secondWeapon ? secondWeapon.name : '',
            price: secondWeapon ? secondWeapon.price : 0,
            tag: secondWeapon ? secondWeapon.tag : '',
            attack: secondWeapon ? secondWeapon.attack : 0
          }
        },
        experience: experience,
        firstname: firstname,
        grade: grade,
        image: image,
        lastname: lastname,
        potions: {
          Id: potions ? potions.id : ''
        },
        power: power,
        skills: skills,
        stamina: stamina,
        status: {
          Id: status.id
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

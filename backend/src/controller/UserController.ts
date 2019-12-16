import { Request, Response } from 'express'
import User from '../schema/User'

class UserController {
  public async index (_: Request, res: Response): Promise<Response> {
    const users = await User.find()

    return res.json(users)
  }

  public async store (_: Request, res: Response): Promise<Response> {
    const user = await User.create(_.body)

    return res.json(user)
  }
}

export default new UserController()

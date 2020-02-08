import { Request, Response, ErrorRequestHandler } from 'express'
import User, { UserInterface } from '../schema/User'

class UserController {
  // TODO testar se este metodo mostra somente um usuario
  public async show(req: Request, res: Response): Promise<Response> {
    const user = await User.findOne({ _id: req.params.id })
    return res.json(user)
  }
  // TODO testar se este metodo vai mostrar somente usuarios que tenham o campo deleted: false
  public async index(req: Request, res: Response): Promise<any> {
    const users = await User.find().where('deleted', !true)

    return res.json(users)
    console.log(req)
  }
  // TODO testar se este metodo vai criar um usuario
  public async store(req: Request, res: Response): Promise<Response> {
    const user = await User.create(req.body)

    return res.json(user)
  }
  // TODO testar se este metodo vai mudar o campo deleted para true
  public async destroy(req: Request, res: Response): Promise<Response> {
    const user = await User.findOne(
      { _id: req.params.id },
      (err: ErrorRequestHandler, data: UserInterface) => {
        if (!data.deleted) {
          data.deleted = true
          data.save(err => {
            console.log(
              'Cannot update the field deleted from user because of: ',
              err
            )
          })
        } else {
          console.log('Cannot access field of data: ', err)
        }
      }
    )

    return res.json(user)
  }
}

export default new UserController()

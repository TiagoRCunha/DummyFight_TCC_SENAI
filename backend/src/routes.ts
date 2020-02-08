import { Router, Response } from 'express'
import UserController from './controller/UserController'

const routes = Router()

routes.get('/', (req, res: Response) => {
  res.send({ message: 'Ok' })
})
routes.get('/users/:id', UserController.show)
routes.get('/users/', UserController.index)
routes.post('/users', UserController.store)
routes.delete('/users/:id', UserController.destroy)

export default routes

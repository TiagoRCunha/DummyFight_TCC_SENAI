import { Router } from 'express'
import UserController from './controller/UserController'

const routes = Router()
// TODO testar se o servidor esta rodando
routes.get('/', function(req, res) {
  res.send('OK')
  console.dir(res.headersSent)
})
routes.get('/users/:id', UserController.show)
routes.get('/users/', UserController.index)
routes.post('/users', UserController.store)
routes.delete('/users/:id', UserController.destroy)

export default routes

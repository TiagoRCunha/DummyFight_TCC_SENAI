import env from '../config/api'
import server from './server'
import SocketServer from './io'

SocketServer.connect()

server.listen(3333, () => {
  console.log(`[SERVER] Running at http://${env.API_HOST}:${env.API_PORT}`)
})

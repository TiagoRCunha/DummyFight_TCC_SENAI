import env from '../config/api'
import server from './server'

server.listen(3000, () => {
  console.log(`[SERVER] Running at http://${env.API_HOST}:${env.API_PORT}`)
})

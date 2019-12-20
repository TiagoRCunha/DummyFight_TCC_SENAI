import env from '../config/api'
import express from 'express'
import corsConfig from './middleware/cors'
import mongoose from 'mongoose'
import routes from './routes'

class Server {
  public express: express.Application

  public constructor () {
    this.express = express()

    this.middlewares()
    this.database()
    this.routes()
  }

  private middlewares (): void {
    this.express.use(express.json())

    this.express.use(corsConfig)
  }

  private database (): void {
    mongoose.connect(`${env.DB_ORN}${env.DB_COL}`, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    })
  }

  private routes (): void {
    this.express.use(routes)
  }
}

export default new Server().express

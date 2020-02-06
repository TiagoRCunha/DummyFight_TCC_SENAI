import env from '../config/api'
import express from 'express'
import corsConfig from './middleware/cors'
import mongoose from 'mongoose'
import routes from './routes'

class Server {
  public express: express.Application

  public constructor() {
    this.express = express()

    this.middlewares()
    this.database()
    this.routes()
  }

  private middlewares(): void {
    this.express.use(express.json())

    this.express.use(corsConfig)
  }
  // TODO testar se a API esta conectando com o banco
  private database(): void {
    mongoose.connect(`mongodb://${env.DB_ORN}:${env.DB_PORT}`, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
    })
  }

  private routes(): void {
    this.express.use(routes)
  }
}

export default new Server().express

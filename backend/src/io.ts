import server from './server'
import http from 'http'
import * as socketio from 'socket.io'

class SocketServer {
  public io: socketio.Server
  public http: http.Server
  /*
   * constructor
   */
  public constructor() {
    this.http = new http.Server(server)

    this.io = socketio.listen(this.http)
    
    this.connect()
  }
  /**
   * socket
   */

  public connect(): void {
    this.io.origins(["*"])
    this.io.on('connection', (socket: any) => {
      console.log("[SOCKET] user connected with id => ", socket.id)
    })
  }
}

export default new SocketServer()
import socketClient from 'socket.io-client'

const SERVER = 'http://lacalhost:5500'

let socket

export const connectWithWebSocket = () => {
  socket = socketClient(SERVER)

  socket.on('connection', () => {
    console.log('succesfully connected with wss server')
    console.log('socket.io')
  })
}

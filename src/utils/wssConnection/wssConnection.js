// import socketClient from 'socket.io-client'
// const SERVER = 'http://lacalhost:5500/'

// let socket

// export const connectWithWebSocket = () => {
//     socket = socketClient(SERVER)
  
//     socket.on('connection', (socket) => {
//         console.log('succesfully connected with wss server')
//         console.log('socket.id')
//       })
//     }
import {io} from 'socket.io-client';
import { USER_ACTIVE } from '../../store/reducers/dashboardSlice';
import store from '../../store/store'

const broadcastEventTypes = {
  USER_ACTIVE: 'USER_ACTIVE',
  GROUP_CALL_ROOMS: 'GROUP_CALL_ROOMS'
}

export let socket = io("http://localhost:5500", { transports: ["websocket"]});
export const initSocketConnection = () => {
  console.log('succesfully connected with wss server');
  console.log(socket.id);
  return socket.connect();

};
socket.on('broadcast', (data)=> {
  handleBroadcastEvent(data);
})

export const registerNewUser = (username) => {

  socket.emit('newUser', {
    username: username,
    socketId: socket.id
  });
}

const handleBroadcastEvent = (data) => {
  switch (data.event) {
    case broadcastEventTypes.USER_ACTIVE:
      const activeUsers = data.activeUsers.filter(activeUser => activeUser.socketId !== socket.id);
  store.dispatch(USER_ACTIVE(activeUsers))
  break;
    default:
  break;
  }
}
// registerNewUser();
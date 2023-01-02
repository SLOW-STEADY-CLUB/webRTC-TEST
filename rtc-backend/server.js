const express = require(`express`);
const socket = require(`socket.io`);

const PORT = 5500
const app = express();
const server = app.listen(PORT, () => {
  console.log(`server is listening on port ${PORT}`);
  console.log(`http://localhost:${PORT}`);
})

app.get('/', (req,res)=>{
  console.log('연결성공')
  res.send('<h1>Hello World</h1>');
})

const io = socket(server, {
  cors: {
    origin: '*',
    methods: ['GET', 'POST']
  },
})

let peers = [];

io.on('connection', (socket) => {
  socket.emit('connection', null);
  console.log('new user connected');
  console.log(socket.id)

  socket.on('newUser', (data) => {
    console.log(data);
    peers.push({
      username: data.username,
      socketId: data.socketId
    });
    console.log('register new user');
    console.log(peers);
  })
});

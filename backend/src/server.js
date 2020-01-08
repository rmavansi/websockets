import express from 'express';
import http from 'http';
import socketIo from 'socket.io';
// import axios from 'axios';

import index from './routes/index';

const port = process.env.PORT || 4001;

const app = express();
app.use(index);
const server = http.createServer(app);
const io = socketIo(server);

const getApiAndEmit = async socket => {
  try {
    const res = 'test';

    socket.emit('FromAPI', res);
  } catch (error) {
    console.error(`Error: ${error.code}`);
  }
};

server.listen(port, () => console.log(`Listening on port ${port}`));

let interval;

io.on('connection', socket => {
  console.log(`New client connected: ${socket.id}`);
  if (interval) {
    clearInterval(interval);
  }
  interval = setInterval(() => getApiAndEmit(socket), 3000);
  socket.on('disconnect', () => {
    console.log(`Client disconnected: ${socket.id}`);
  });

  socket.on('sendMessage', data => {
    console.log(data);
  });
});

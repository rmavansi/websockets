import 'dotenv/config';
import express from 'express';
import 'express-async-errors';
import socketIo from 'socket.io';
import http from 'http';

import commands from './Utils/commands';

const port = process.env.PORT;

const app = express();

const server = http.createServer(app);
const io = socketIo(server);

server.listen(port, () => console.log(`Listening on ${port}`));

interface Chat {
  name: string;
  message: string;
}

const chat = [] as Chat[];

io.on('connection', socket => {
  console.log(`New client connected: ${socket.id}`);

  if(chat.length===0 || chat[0].name!=="Bot") {
    chat.push({ name: 'Bot', message: '/commands to see commands' });
  }

  socket.emit('oldMessages', chat);

  socket.on('disconnect', () => {
    console.log(`Client disconnected: ${socket.id}`);
  });

  socket.on('sendMessage', data => {
    chat.push({ name: data.name, message: data.message });

    commands({ message: data.message, chat });

    socket.broadcast.emit('returnMessage', chat);
    socket.emit('returnMessage', chat);
  });
});

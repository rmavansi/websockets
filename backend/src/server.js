// import express from 'express';
// import http from 'http';
// import socketIo from 'socket.io';
// // import axios from 'axios';

// import index from './routes/index';

// const port = process.env.PORT || 4001;

// const app = express();
// app.use(index);
// const server = http.createServer(app);
// const io = socketIo(server);

// server.listen(port, () => console.log(`Listening on port ${port}`));

// const chat = [];

// io.on('connection', socket => {
//   console.log(`New client connected: ${socket.id}`);

//   socket.emit('oldMessages', chat);

//   socket.on('disconnect', () => {
//     console.log(`Client disconnected: ${socket.id}`);
//   });

//   socket.on('sendMessage', data => {
//     chat.push({ id: socket.id, message: data });
//     socket.broadcast.emit('returnMessage', chat);
//     socket.emit('returnMessage', chat);
//   });
// });

import app from './app';

app.listen(3333);

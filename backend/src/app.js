import express from 'express';
import Youch from 'youch';
import 'express-async-errors';
import cors from 'cors';
import socketIo from 'socket.io';
import http from 'http';

const port = process.env.PORT || 4001;

const app = express();
const server = http.createServer(app);
const io = socketIo(server);

server.listen(port, () => console.log(`Listening on port ${port}`));

const chat = [];

io.on('connection', socket => {
  console.log(`New client connected: ${socket.id}`);

  socket.emit('oldMessages', chat);

  socket.on('disconnect', () => {
    console.log(`Client disconnected: ${socket.id}`);
  });

  socket.on('sendMessage', data => {
    chat.push({ name: data.name, message: data.message });
    socket.broadcast.emit('returnMessage', chat);
    socket.emit('returnMessage', chat);
  });
});

class App {
  constructor() {
    this.server = express();
    this.exceptionHandler();
  }

  middlewares() {
    this.server.use(cors());
    this.server.use(express.json());
  }

  exceptionHandler() {
    this.server.use(async (err, req, res, next) => {
      if (process.env.NODE_ENV === 'development') {
        const errors = await new Youch(err, req).toJSON();

        return res.status(500).json(errors);
      }
      return res.status(500).json({ error: 'Internal server error' });
    });
  }
}

export default new App().server;

import socketIOClient from 'socket.io-client';

const socket = socketIOClient(
  'api-estudo-websockets-8a07rl3bp.vercel.app:4001'
);

export default socket;

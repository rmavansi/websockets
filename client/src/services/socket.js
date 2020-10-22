import socketIOClient from 'socket.io-client';

const socket = socketIOClient(
  'wss://api-estudo-websockets-deploy.herokuapp.com/'
  // 'http://localhost:4001'
);

export default socket;

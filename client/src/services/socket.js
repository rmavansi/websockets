import socketIOClient from 'socket.io-client';

const socket = socketIOClient(
  'api-estudo-websockets-9llpbwa6g.vercel.app/:4001'
);

export default socket;

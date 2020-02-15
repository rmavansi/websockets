import React, { useState, useEffect } from 'react';
import socketIOClient from 'socket.io-client';
import { MdKeyboardArrowRight, MdPersonOutline } from 'react-icons/md';

import Input from '../Input';

import {
  Container,
  ChatHeader,
  ChatDiv,
  ChatInput,
  ChatFooter,
} from './styles';

export default function Chat() {
  const [response, setResponse] = useState(false);
  const [chat, setChat] = useState(false);
  const [endpoint, setEndpoint] = useState('http://127.0.0.1:4001');
  const [socket, setSocket] = useState(socketIOClient(endpoint));

  useEffect(() => {
    socket.on('FromAPI', data => setResponse(data));
    socket.on('returnMessage', data => setChat(data));
  }, []);

  function handleSubmit(event) {
    // const value = {
    //   name: event.target.name.value,
    //   message: event.target.message.value,
    // };
    // socket.emit('sendMessage', value);
    socket.emit('sendMessage', event.target.message.value);
    event.preventDefault();
  }

  return (
    <Container>
      <ChatHeader>
        <MdKeyboardArrowRight size={20} />
        <div>STREAM CHAT</div>
        <MdPersonOutline size={20} />
      </ChatHeader>
      <ChatDiv>{chat}</ChatDiv>
      <form onSubmit={handleSubmit}>
        <ChatInput>
          <input autoComplete="off" name="name" placeholder="Send a message" />
          {/* <Input placeHolder="Send a message" /> */}
        </ChatInput>
        <ChatFooter>
          <div />
          <button type="button">Chat</button>
        </ChatFooter>
      </form>
    </Container>
  );
}

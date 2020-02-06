import React, { useState, useEffect } from 'react';
import socketIOClient from 'socket.io-client';
import { MdArrowForward } from 'react-icons/md';

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
        <div>{MdArrowForward}</div>
        <div>STREAM CHAT</div>
        <div> Icon</div>
      </ChatHeader>
      <ChatDiv>{chat}</ChatDiv>
      <form onSubmit={handleSubmit}>
        <ChatInput>
          {/* <input autoComplete="off" name="name" placeholder="Type your name" /> */}
          <Input placeHolder="Send a message" />
        </ChatInput>
        <ChatFooter>
          <div> Icons</div>
          <button type="button">Chat</button>
        </ChatFooter>
      </form>
    </Container>
  );
}

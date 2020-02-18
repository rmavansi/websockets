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
  const [message, setMessage] = useState('');
  const [chat, setChat] = useState('');
  const [endpoint, setEndpoint] = useState('http://127.0.0.1:4001');
  const [socket, setSocket] = useState(socketIOClient(endpoint));

  useEffect(() => {
    socket.on('FromAPI', data => setResponse(data));
    socket.on('returnMessage', data =>
      setChat(data.map(mes => `${mes.id}: ${mes.message}`))
    );
    socket.on('oldMessages', data =>
      setChat(data.map(mes => `${mes.id}: ${mes.message}\n`))
    );
  }, []);

  function handleSubmit(event) {
    event.preventDefault();
    socket.emit('sendMessage', event.target.message.value);
    setMessage('');
  }

  function handleChange(e) {
    setMessage(e.target.value);
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
          <input
            autoComplete="off"
            name="message"
            placeholder="Send a message"
            onChange={handleChange}
            value={message}
          />
        </ChatInput>
        <ChatFooter>
          <div />
          <button type="button" onSubmit={handleSubmit}>
            Chat
          </button>
        </ChatFooter>
      </form>
    </Container>
  );
}

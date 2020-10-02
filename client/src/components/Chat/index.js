import React, { useState, useEffect } from 'react';
import socketIOClient from 'socket.io-client';
import {
  MdKeyboardArrowRight,
  MdPersonOutline,
  MdTimelapse,
  MdTagFaces,
} from 'react-icons/md';

import { useChat } from '../../context/chat';

import Input from '../Input';

import {
  Container,
  ChatHeader,
  ChatDiv,
  ChatInput,
  ChatFooter,
  ClickableIcon,
  ChatForm,
} from './styles';

export default function Chat() {
  const [response, setResponse] = useState(false);
  const [message, setMessage] = useState('');
  const [chat, setChat] = useState('');
  const [endpoint, setEndpoint] = useState('http://127.0.0.1:4001');
  const [socket, setSocket] = useState(socketIOClient(endpoint));
  const [isFocused, setIsFocused] = useState(false);
  const { isChatClosed, setIsChatClosed } = useChat();

  useEffect(() => {
    socket.on('FromAPI', data => setResponse(data));
    socket.on('returnMessage', data =>
      setChat(data.map(mes => ` ${mes.id}: ${mes.message}\n `))
    );
    socket.on('oldMessages', data =>
      setChat(data.map(mes => ` ${mes.id}: ${mes.message} `))
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

  function handleIsChatClosed() {
    setIsChatClosed(!isChatClosed);
  }

  return (
    <Container isChatClosed={isChatClosed}>
      <ChatHeader>
        <ClickableIcon isChatClosed={isChatClosed}>
          <MdKeyboardArrowRight size={20} onClick={handleIsChatClosed} />
        </ClickableIcon>
        <div>STREAM CHAT</div>
        <ClickableIcon>
          <MdPersonOutline size={20} />
        </ClickableIcon>
      </ChatHeader>
      <ChatDiv>{chat}</ChatDiv>
      <ChatForm>
        <form onSubmit={handleSubmit}>
          <ChatInput isFocused={isFocused}>
            <input
              autoComplete="off"
              name="message"
              placeholder="Send a message"
              onChange={handleChange}
              value={message}
              onFocus={() => setIsFocused(true)}
              onBlur={() => setIsFocused(false)}
            />
            <ClickableIcon>
              <MdTagFaces size={24} />
            </ClickableIcon>
          </ChatInput>
          <ChatFooter>
            <ClickableIcon>
              <MdTimelapse size={20} />
              <span>20k</span>
            </ClickableIcon>
            <button type="submit" onSubmit={handleSubmit}>
              Chat
            </button>
          </ChatFooter>
        </form>
      </ChatForm>
    </Container>
  );
}

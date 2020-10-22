import React, { useState, useEffect } from 'react';
import {
  MdKeyboardArrowRight,
  MdPersonOutline,
  MdTimelapse,
  MdTagFaces,
} from 'react-icons/md';

import socket from '../../services/socket';
import { useChat } from '../../context/chat';

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
  const [message, setMessage] = useState('');
  const [name, setName] = useState('');
  const [chat, setChat] = useState([]);
  const [isFocused, setIsFocused] = useState(false);
  const [isNameFocused, setIsNameFocused] = useState(false);
  const { isChatClosed, setIsChatClosed } = useChat();

  useEffect(() => {
    socket.on('returnMessage', data => setChat(data.map(mes => mes)));
    socket.on('oldMessages', data => setChat(data.map(mes => mes)));
  }, []);

  function handleSubmit(event) {
    event.preventDefault();
    socket.emit('sendMessage', {
      message: event.target.message.value,
      name: event.target.name.value,
    });
    setMessage('');
  }

  function handleChange(e) {
    setMessage(e.target.value);
  }

  function handleNameChange(e) {
    setName(e.target.value);
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
      <ChatDiv>
        {chat.map((mess, index) => (
          <p key={index}>
            <strong>{`${mess.name}: `}</strong>
            {mess.message}
          </p>
        ))}
      </ChatDiv>
      <ChatForm>
        <form onSubmit={handleSubmit}>
          <ChatInput isFocused={isNameFocused}>
            <input
              autoComplete="off"
              name="name"
              placeholder="Name"
              onChange={handleNameChange}
              value={name}
              onFocus={() => setIsNameFocused(true)}
              onBlur={() => setIsNameFocused(false)}
            />
          </ChatInput>
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

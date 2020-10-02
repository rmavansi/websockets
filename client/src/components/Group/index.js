import React from 'react';

import { Container } from './styles';

import ChatProvider from '../../context/chat';
import Chat from '../Chat';
import Center from '../Center';
import Online from '../Online';

export default function Group() {
  return (
    <Container>
      <Online />
      <ChatProvider>
        <Center />
        <Chat />
      </ChatProvider>
    </Container>
  );
}

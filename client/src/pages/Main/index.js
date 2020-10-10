import React from 'react';

import ChatProvider from '../../context/chat';
import Chat from '../../components/Chat';
import Center from '../../components/Center';
import Online from '../../components/Online';

import { Container } from './styles';

function Main() {
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

export default Main;

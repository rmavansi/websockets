import React from 'react';

import { Container } from './styles';

import Chat from '../Chat';
import Center from '../Center';
import Online from '../Online';

export default function Teste() {
  return (
    <Container>
      <Online />
      <Center />
      <Chat />
    </Container>
  );
}

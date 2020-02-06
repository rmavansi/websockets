import React from 'react';

import { Container } from './styles';

export default function Input({ placeHolder }) {
  return (
    <Container>
      <input autoComplete="off" name="teste" placeholder={placeHolder} />
    </Container>
  );
}

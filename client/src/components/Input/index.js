import React, { useState } from 'react';

import { Container } from './styles';

export default function Input({ placeHolder }) {
  const [isFocused, setIsFocused] = useState(false);
  return (
    <Container isFocused={isFocused}>
      <input
        autoComplete="off"
        name="teste"
        placeholder={placeHolder}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
      />
    </Container>
  );
}

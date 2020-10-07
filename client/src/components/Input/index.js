import React, { useState } from 'react';

import { Container } from './styles';

export default function Input({ placeHolder, children }) {
  const [isFocused, setIsFocused] = useState(false);
  return (
    <Container isFocused={isFocused}>
      {children}
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

import React from 'react';
import Input from '../Input';

import { Container, Tab, Search, Perfil } from './styles';

export default function Header() {
  return (
    <Container>
      <Tab>
        <ul>
          <li>Icon</li>
          <li>Discover</li>
          <li>Following</li>
          <li>Browse</li>
          <li>TryPrime</li>
          <li>...</li>
        </ul>
        <Search>
          <Input placeHolder="Search" />
          <button type="submit">Icon</button>
        </Search>
      </Tab>
      <Perfil>Perfil</Perfil>
    </Container>
  );
}

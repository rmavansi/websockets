import React from 'react';
import Input from '../Input';
import TwIcon from '../../assets/tw.png';

import { Container, Tab, Search, Perfil } from './styles';

export default function Header() {
  return (
    <Container>
      <Tab>
        <ul>
          <li>
            <img alt="TwitchIcon" src={TwIcon} width={25} />
          </li>
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

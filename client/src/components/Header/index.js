import React from 'react';
import { MdMyLocation, MdAddAlert, MdChatBubbleOutline } from 'react-icons/md';
import Input from '../Input';
import TwIcon from '../../assets/tw.png';

import { Container, Tab, Search, Perfil, Image } from './styles';

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
          <button type="submit">Send</button>
        </Search>
      </Tab>
      <Perfil>
        <MdMyLocation size={20} />
        <MdAddAlert size={20} />
        <MdChatBubbleOutline size={20} />
        <button type="button">Get Bits</button>
        <Image />
      </Perfil>
    </Container>
  );
}

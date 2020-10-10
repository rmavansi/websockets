import React from 'react';
import { BsChatSquare } from 'react-icons/bs';
import { FiMoreHorizontal, FiInbox } from 'react-icons/fi';
import { CgCrown } from 'react-icons/cg';
import { MdSearch } from 'react-icons/md';
import { GiDiamonds } from 'react-icons/gi';
import Input from '../Input';
import TwitchLogo from '../../assets/TwitchLogo.png';

import {
  Container,
  NavBar,
  Search,
  Perfil,
  Image,
  SearchMedia,
  BitsMedia,
  Notification,
} from './styles';

export default function Header() {
  return (
    <Container>
      <NavBar>
        <ul>
          <li>
            <img alt="TwitchIcon" src={TwitchLogo} width={25} />
          </li>
          <li>Following</li>
          <li>Browse</li>
          <li>Esports</li>
          <li>Music</li>
          <li>
            <FiMoreHorizontal size={30} />
          </li>
        </ul>
      </NavBar>

      <Search>
        <Input placeHolder="Search" />
        <button type="submit">
          <MdSearch size={26} />
        </button>
      </Search>
      <div />

      <Perfil>
        <SearchMedia>
          <MdSearch size={30} />
        </SearchMedia>
        <CgCrown size={30} />
        <Notification above="crown">2</Notification>
        <FiInbox size={30} />
        <BsChatSquare size={30} />
        <Notification above="whispers">10</Notification>
        <button type="button">
          <GiDiamonds size={20} />
          Get Bits
        </button>
        <BitsMedia>
          <GiDiamonds size={30} />
        </BitsMedia>
        <Image />
      </Perfil>
    </Container>
  );
}

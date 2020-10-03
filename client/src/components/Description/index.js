import React from 'react';

import { FaHeart, FaRegBell } from 'react-icons/fa';
import { MdPersonOutline } from 'react-icons/md';
import { HiDotsVertical } from 'react-icons/hi';
import { FiShare } from 'react-icons/fi';
import { BsDot } from 'react-icons/bs';

import {
  Container,
  Profile,
  Photo,
  DescriptionWrapper,
  Tag,
  Stats,
  ChannelInteractions,
  BottomInteractions,
} from './styles';

function Description() {
  return (
    <Container>
      <Profile>
        <Photo>
          <img
            alt="Profile"
            src="https://static-cdn.jtvnw.net/jtv_user_pictures/f3591dbe4ee3d94b-profile_image-70x70.png"
          />
        </Photo>
        <DescriptionWrapper>
          <p>Draven</p>
          <span>Welcome to League of Draven</span>
          <div>
            <a href="localhost:3000">Teamfight Tactics</a>
            <BsDot size={26} />
            <span>Team:</span> <a href="localhost:3000">Golden Guardians</a>
            <Tag>English</Tag>
            <Tag>Strategy</Tag>
          </div>
        </DescriptionWrapper>
      </Profile>
      <Stats>
        <ChannelInteractions>
          <FaHeart size={30} />
          <FaRegBell size={30} />
          <button type="button">Subscribe</button>
        </ChannelInteractions>
        <BottomInteractions>
          <div>
            <MdPersonOutline size={20} />
            <strong>11,728</strong>
          </div>
          <span>1:41:59</span>
          <FiShare size={30} />
          <HiDotsVertical size={30} />
        </BottomInteractions>
      </Stats>
    </Container>
  );
}

export default Description;

import React, { useState } from 'react';
import { MdNavigateBefore, MdNavigateNext, MdSearch } from 'react-icons/md';

import {
  Container,
  FollowedChannelsBlockHeader,
  Channel,
  ImageNameGameDiv,
  NameGameDiv,
  Image,
  OnlineStats,
  Search,
  OnlineFlag,
  ShowMore,
  ClickableIcon,
  Footer,
} from './styles';

export default function Online() {
  const [isFocused, setIsFocused] = useState(false);
  const [isClosed, setIsClosed] = useState(false);

  function handleOnlineClick() {
    setIsClosed(!isClosed);
  }

  return (
    <Container>
      <div>
        <FollowedChannelsBlockHeader>
          <strong>FOLLOWED CHANNELS</strong>
          <ClickableIcon onClick={handleOnlineClick}>
            {isClosed ? (
              <MdNavigateBefore size={20} />
            ) : (
              <MdNavigateNext size={20} />
            )}
          </ClickableIcon>
        </FollowedChannelsBlockHeader>

        <Channel>
          <ImageNameGameDiv>
            <Image />
            <NameGameDiv>
              <p>Recow</p>
              <span>Teamfight Tactics</span>
            </NameGameDiv>
          </ImageNameGameDiv>
          <OnlineStats>
            <OnlineFlag />
            <span>1.4K</span>
          </OnlineStats>
        </Channel>

        <Channel>
          <ImageNameGameDiv>
            <Image />
            <NameGameDiv>
              <p>Recow</p>
              <span>Teamfight Tactics</span>
            </NameGameDiv>
          </ImageNameGameDiv>
          <OnlineStats>
            <OnlineFlag />
            <span>1.4K</span>
          </OnlineStats>
        </Channel>

        <ShowMore>Show More</ShowMore>
        <FollowedChannelsBlockHeader>
          <strong>RECOMMENDED CHANNELS</strong>
        </FollowedChannelsBlockHeader>
        <Channel>
          <ImageNameGameDiv>
            <Image />
            <NameGameDiv>
              <p>Recow</p>
              <span>Teamfight Tactics</span>
            </NameGameDiv>
          </ImageNameGameDiv>
          <OnlineStats>
            <OnlineFlag />
            <span>1.4K</span>
          </OnlineStats>
        </Channel>
        <ShowMore>Show More</ShowMore>
      </div>
      <Footer>
        <Search isFocused={isFocused}>
          <MdSearch size={24} />
          <input
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            placeholder="Search to Add Friends"
          />
        </Search>
      </Footer>
    </Container>
  );
}

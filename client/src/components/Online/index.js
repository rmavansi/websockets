import React from 'react';
import { MdNavigateBefore } from 'react-icons/md';

import {
  Container,
  Followed,
  FollowedHeader,
  Block,
  ImageNameGameDiv,
  NameGameDiv,
  Image,
  OnlineStats,
  Recommended,
  Search,
  OnlineFlag,
  GameName,
  ShowMore,
  Texto,
} from './styles';

export default function Online() {
  return (
    <Container>
      <Followed>
        <FollowedHeader>
          <strong>FOLLOWED CHANNELS</strong>
          <MdNavigateBefore size={20} />
        </FollowedHeader>

        <Block>
          <ImageNameGameDiv>
            <Image />
            <NameGameDiv>
              <Texto>Recow</Texto>
              <GameName>Teamfight Tactics</GameName>
            </NameGameDiv>
          </ImageNameGameDiv>
          <OnlineStats>
            <OnlineFlag />
            <span>1.4k</span>
          </OnlineStats>
        </Block>

        <Block>
          <ImageNameGameDiv>
            <Image />
            <NameGameDiv>
              <Texto>Recow</Texto>
              <GameName>Teamfight Tactics</GameName>
            </NameGameDiv>
          </ImageNameGameDiv>
          <OnlineStats>
            <OnlineFlag />
            <span>1.4k</span>
          </OnlineStats>
        </Block>

        <ShowMore>Show More</ShowMore>
      </Followed>
      <Recommended>
        <strong>RECOMMENDED CHANNELS</strong>
        <Block>
          <ImageNameGameDiv>
            <Image />
            <NameGameDiv>
              <Texto>Recow</Texto>
              <GameName>Teamfight Tactics</GameName>
            </NameGameDiv>
          </ImageNameGameDiv>
          <OnlineStats>
            <OnlineFlag />
            <span>1.4k</span>
          </OnlineStats>
        </Block>
        <ShowMore>Show More</ShowMore>
      </Recommended>
      <Search />
    </Container>
  );
}

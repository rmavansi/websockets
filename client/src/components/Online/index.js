import React from 'react';

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
  Texto,
} from './styles';

export default function Online() {
  return (
    <Container>
      <Followed>
        <FollowedHeader>
          <strong>Followed Channels</strong>
          <strong>Icon</strong>
        </FollowedHeader>
        <Block>
          <ImageNameGameDiv>
            <Image />
            <NameGameDiv>
              <Texto>Recow</Texto>
              <Texto>Teamfight Tactics</Texto>
            </NameGameDiv>
          </ImageNameGameDiv>
          <OnlineStats>
            <OnlineFlag />
            <span>1.4k</span>
          </OnlineStats>
        </Block>
        <strong>Show More</strong>
      </Followed>
      <Recommended>
        <strong>Recommended Channels</strong>
        <Block>
          <ImageNameGameDiv>
            <Image />
            <NameGameDiv>
              <Texto>Recow</Texto>
              <Texto>Teamfight Tactics</Texto>
            </NameGameDiv>
          </ImageNameGameDiv>
          <OnlineStats>
            <OnlineFlag />
            <span>1.4k</span>
          </OnlineStats>
        </Block>

        <strong>Show More</strong>
      </Recommended>
      <Search />
    </Container>
  );
}

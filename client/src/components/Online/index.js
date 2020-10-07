import React, { useState, useEffect } from 'react';
import { MdNavigateBefore, MdNavigateNext, MdSearch } from 'react-icons/md';
import { FiHeart, FiKey, FiUserPlus } from 'react-icons/fi';

import Input from '../Input';

import {
  Container,
  FollowedChannelsBlockHeader,
  Channel,
  ImageNameGameDiv,
  NameGameDiv,
  Image,
  ClickableIcon,
  OnlineStats,
  Search,
  OnlineFlag,
  ShowMore,
  Footer,
  FollowedIcon,
  RecommendedIcon,
  ScrollWrapper,
} from './styles';

export default function Online() {
  const [isClosed, setIsClosed] = useState(false);

  useEffect(() => {
    function handleResize() {
      if (window.innerWidth < 1200) {
        setIsClosed(true);
      } else {
        setIsClosed(false);
      }
    }
    window.addEventListener('resize', handleResize);
  }, []);

  const streams = [
    {
      photo:
        'https://static-cdn.jtvnw.net/jtv_user_pictures/f3591dbe4ee3d94b-profile_image-70x70.png',
      name: 'Draven',
      game: 'League of Draven',
      online: '550.4K',
    },
    {
      photo:
        'https://static-cdn.jtvnw.net/jtv_user_pictures/faffcdce-19b9-4736-abdf-a16c765a1b60-profile_image-70x70.png',
      name: 'Vladmir',
      game: 'Genshin Impact',
      online: '4.1K',
    },
    {
      photo:
        'https://static-cdn.jtvnw.net/jtv_user_pictures/cbb3a71c-6481-4a14-91d5-0c34dea01c02-profile_image-70x70.png',
      name: 'Ezreal',
      game: 'Teamfight Tactics',
      online: '1.4K',
    },
    {
      photo:
        'https://static-cdn.jtvnw.net/jtv_user_pictures/5517a5b0-8660-43bf-93a7-3bfaaf523113-profile_image-70x70.png',
      name: 'Zac',
      game: 'League of Legends',
      online: '1.2K',
    },
    {
      photo:
        'https://static-cdn.jtvnw.net/jtv_user_pictures/5517a5b0-8660-43bf-93a7-3bfaaf523113-profile_image-70x70.png',
      name: 'Dr. Mundo',
      game: 'League of Legends',
      online: '1.2K',
    },
    {
      photo:
        'https://static-cdn.jtvnw.net/jtv_user_pictures/5517a5b0-8660-43bf-93a7-3bfaaf523113-profile_image-70x70.png',
      name: 'boxbox',
      game: 'League of Legends',
      online: '1.2K',
    },
    {
      photo:
        'https://static-cdn.jtvnw.net/jtv_user_pictures/5517a5b0-8660-43bf-93a7-3bfaaf523113-profile_image-70x70.png',
      name: 'Singed',
      game: 'League of Legends',
      online: '1.2K',
    },
  ];

  const recommendedStreams = [
    {
      photo: '#772ce8',
      name: 'Sona',
      game: 'IRL',
      online: '5.8K',
    },
    {
      photo: '#cccccc',
      name: 'Vladmir',
      game: 'Genshin Impact',
      online: '4.1K',
    },
    {
      photo: '#3a53ca',
      name: 'Ezreal',
      game: 'Teamfight Tactics',
      online: '1.4K',
    },
  ];

  function handleOnlineClick() {
    setIsClosed(!isClosed);
  }

  return (
    <Container isClosed={isClosed}>
      {isClosed ? (
        <>
          <ScrollWrapper>
            <ClickableIcon onClick={handleOnlineClick} isClosed={isClosed}>
              <MdNavigateNext size={20} />
            </ClickableIcon>
            <FollowedIcon>
              <FiHeart size={20} />
            </FollowedIcon>

            {streams.map(stream => (
              <Channel isClosed={isClosed}>
                <img alt="Profile" src={stream.photo} height={28} />
              </Channel>
            ))}

            <RecommendedIcon>
              <FiKey size={20} />
            </RecommendedIcon>
            {streams.map(stream => (
              <Channel isClosed={isClosed}>
                <img alt="Profile" src={stream.photo} height={28} />
              </Channel>
            ))}
            {streams.map(stream => (
              <Channel isClosed={isClosed}>
                <img alt="Profile" src={stream.photo} height={28} />
              </Channel>
            ))}

            <RecommendedIcon>
              <FiUserPlus size={20} />
            </RecommendedIcon>
          </ScrollWrapper>
          <div />
        </>
      ) : (
        <>
          <ScrollWrapper>
            <FollowedChannelsBlockHeader>
              <strong>FOLLOWED CHANNELS</strong>
              <ClickableIcon onClick={handleOnlineClick}>
                <MdNavigateBefore size={20} />
              </ClickableIcon>
            </FollowedChannelsBlockHeader>

            {streams.map(stream => (
              <Channel>
                <ImageNameGameDiv>
                  <img alt="Profile" src={stream.photo} height={28} />
                  <NameGameDiv>
                    <p>{stream.name}</p>
                    <span>{stream.game}</span>
                  </NameGameDiv>
                </ImageNameGameDiv>
                <OnlineStats>
                  <OnlineFlag />
                  <span>{stream.online}</span>
                </OnlineStats>
              </Channel>
            ))}

            <ShowMore>
              <span>Show More</span>
            </ShowMore>
            <FollowedChannelsBlockHeader>
              <strong>RECOMMENDED CHANNELS</strong>
            </FollowedChannelsBlockHeader>

            {recommendedStreams.map(recommendedStream => (
              <Channel>
                <ImageNameGameDiv>
                  <Image color={recommendedStream.photo} />
                  <NameGameDiv>
                    <p>{recommendedStream.name}</p>
                    <span>{recommendedStream.game}</span>
                  </NameGameDiv>
                </ImageNameGameDiv>
                <OnlineStats>
                  <OnlineFlag />
                  <span>{recommendedStream.online}</span>
                </OnlineStats>
              </Channel>
            ))}
            <ShowMore>
              <span>Show More</span>
            </ShowMore>
          </ScrollWrapper>
          <Footer>
            <Search>
              <Input placeHolder="Search to Add Friends">
                <MdSearch size={24} />
              </Input>
            </Search>
          </Footer>
        </>
      )}
    </Container>
  );
}

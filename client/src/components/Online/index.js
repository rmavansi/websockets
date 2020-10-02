import React, { useState, useEffect } from 'react';
import { MdNavigateBefore, MdNavigateNext, MdSearch } from 'react-icons/md';
import { FiHeart, FiKey, FiUserPlus } from 'react-icons/fi';
// import ClickableIcon from '../ClickableIcon';

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
} from './styles';

export default function Online() {
  const [isFocused, setIsFocused] = useState(false);
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
      name: 'Rakin',
      game: 'Genshin Impact',
      online: '4K',
    },
    {
      photo:
        'https://static-cdn.jtvnw.net/jtv_user_pictures/cbb3a71c-6481-4a14-91d5-0c34dea01c02-profile_image-70x70.png',
      name: 'Recow',
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
          <div>
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
            <RecommendedIcon>
              <FiUserPlus size={20} />
            </RecommendedIcon>
          </div>
          <div />
        </>
      ) : (
        <>
          <div>
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
            <ShowMore>
              <span>Show More</span>
            </ShowMore>
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
        </>
      )}
    </Container>
  );
}

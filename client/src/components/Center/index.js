import React from 'react';
import { MdKeyboardArrowLeft } from 'react-icons/md';

import Description from '../Description';

import { useChat } from '../../context/chat';

import { Container, ExpandIcon } from './styles';

export default function Center() {
  const { isChatClosed, setIsChatClosed } = useChat();

  function handleIsChatClosed() {
    // Change here
    setIsChatClosed(false);
  }
  return (
    <Container>
      <ExpandIcon isChatClosed={isChatClosed}>
        <MdKeyboardArrowLeft size={20} onClick={handleIsChatClosed} />
      </ExpandIcon>
      <div />
      <Description />
    </Container>
  );
}

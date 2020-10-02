import React from 'react';
import { MdKeyboardArrowLeft } from 'react-icons/md';

import { useChat } from '../../context/chat';

import { Container, Stream, ExpandIcon } from './styles';

export default function Center() {
  const { isChatClosed, setIsChatClosed } = useChat();

  function handleIsChatClosed() {
    // Change here
    setIsChatClosed(false);
  }
  return (
    <Container>
      <Stream>Olar</Stream>
      <ExpandIcon isChatClosed={isChatClosed}>
        <MdKeyboardArrowLeft size={20} onClick={handleIsChatClosed} />
      </ExpandIcon>
    </Container>
  );
}

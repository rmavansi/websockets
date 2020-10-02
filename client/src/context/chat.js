import React, { createContext, useContext, useState } from 'react';

const ChatContext = createContext();

export default function ChatProvider({ children }) {
  const [isChatClosed, setIsChatClosed] = useState(false);

  return (
    <ChatContext.Provider value={{ isChatClosed, setIsChatClosed }}>
      {children}
    </ChatContext.Provider>
  );
}

export function useChat() {
  const context = useContext(ChatContext);
  const { isChatClosed, setIsChatClosed } = context;
  return { isChatClosed, setIsChatClosed };
}

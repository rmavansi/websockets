import React from 'react';
import './config/ReactotronConfig';
import GlobalStyle from './styles/global';

import Chat from './components/Chat';
import Header from './components/Header';
import Center from './components/Center';
import Online from './components/Online';
import Teste from './components/Teste';

export default function App() {
  return (
    <>
      <Header />
      <Teste />
      <GlobalStyle />
      {/* <Online /> */}
      {/* <Center /> */}
      {/* <div style=["height: 500px; width: 500px; background: #000"] /> */}
      {/* <Chat /> */}
    </>
  );
}

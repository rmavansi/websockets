import React from 'react';
import GlobalStyle from './styles/global';

import Header from './components/Header';
import Group from './components/Group';

export default function App() {
  return (
    <>
      <Header />
      <Group />
      <GlobalStyle />
    </>
  );
}

import React from 'react';
import GlobalStyle from './styles/global';

import Header from './components/Header';
import Main from './pages/Main';

export default function App() {
  return (
    <>
      <Header />
      <Main />

      <GlobalStyle />
    </>
  );
}

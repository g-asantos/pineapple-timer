import React from 'react';
import Header from './components/Header';
import Timer from './pages/timer';
import GlobalStyle from './styles/global';

const App = () => {
  return (
    <div>
      <Header title="Pineapple Timer" />
      <Timer />
      <GlobalStyle />
    </div>
  );
};

export default App;

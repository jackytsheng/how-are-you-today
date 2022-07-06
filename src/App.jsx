import React from 'react';
import Love from './components/Love';
import Landing from './components/Landing';
import GoldMine from './components/GoldMine';
import ClickBox from './components/ClickBox';
import { Routes, Route } from 'react-router-dom';
import { BASE_URL } from './components/Landing/Constant';

const App = () => {
  const baseUrl = BASE_URL;
  return (
    <Routes>
      <Route path={baseUrl} element={<Landing />} />
      <Route path={baseUrl + 'heart'} element={<Love />} />
      <Route path={baseUrl + 'doyoumissme'} element={<ClickBox />} />
      <Route path={baseUrl + 'gold-mine'} element={<GoldMine />} />
    </Routes>
  );
};

export default App;

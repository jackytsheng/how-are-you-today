import React from 'react';
import Love from './components/Love';
import Landing from './components/Landing';
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
    </Routes>
  );
};

export default App;

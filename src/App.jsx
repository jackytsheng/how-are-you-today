import React from 'react';
import Love from './components/Love';
import Landing from './components/Landing';
import ClickBox from './components/ClickBox';
import { Routes, Route } from 'react-router-dom';

const App = () => {
  const baseUrl = window.location.pathname;
  return (
    <Routes>
      <Route path={`${baseUrl}`} element={<Landing />} />
      <Route path={`${baseUrl}/heart`} element={<Love />} />
      <Route path={`${baseUrl}/dowyoumissme`} element={<ClickBox />} />
    </Routes>
  );
};

export default App;

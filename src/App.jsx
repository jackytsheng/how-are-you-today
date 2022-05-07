import React from 'react';
import Love from './components/Love';
import Landing from './components/Landing';
import ClickBox from './components/ClickBox';
import { Routes, Route } from 'react-router-dom';

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Landing />} />
      <Route path='heart' element={<Love />} />
      <Route path='doyoumissme' element={<ClickBox />} />
    </Routes>
  );
};

export default App;

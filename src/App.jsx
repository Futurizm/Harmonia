import React from 'react';
import Sidebar from './components/Sidebar/Sidebar';
import Main from './components/Main/Main';
import MainPage from './pages/MainPage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const HarmoniaPage = () => {
  return (
    <>
      <Sidebar />
      <Main />
    </>
  );
};

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/harmonia" element={<HarmoniaPage />} />
      </Routes>
    </Router>
  );
};

export default App;

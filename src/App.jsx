import React from 'react';
import { BrowserRouter, Routes, Route, Outlet, Link } from 'react-router-dom';
import './App.css';
import LoadingPageSuspense from './LoadingPageSuspense';
import AutomaticBatching from './AutomaticBatching';
import Transitions from './Transitions';

const Layout = () => {
  return (
    <div className="page-container">
      <nav>
        <Link to="/loading-page">LoadingPage</Link>
        <Link to="/automatic-batching">AutomaticBatching</Link>
        <Link to="/transitions">Transitions</Link>
      </nav>
      <Outlet />
    </div>
  );
};

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route
              index
              path="loading-page"
              element={<LoadingPageSuspense />}
            />
            <Route path="automatic-batching" element={<AutomaticBatching />} />
            <Route path="transitions" element={<Transitions />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;

import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Root from './components/Root';
import RecoilUseRecoilState from './components/RecoilUseRecoilState';
import RecoilUseRecoilValue from './components/RecoilUseRecoilValue';
import RecoilAsyncSelector from './components/RecoilAsyncSelector';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <h1>React-recoil state</h1>
      </div>
      <Routes>
        <Route path="/" element={<Root />} />
        <Route path="/userecoilstate" element={<RecoilUseRecoilState />} />
        <Route path="/userecoilvalue" element={<RecoilUseRecoilValue />} />
        <Route path="/recoilasyncselector" element={<RecoilAsyncSelector />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

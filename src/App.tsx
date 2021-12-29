import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import UserInfo from "./components/UserInfo";
import User from "./pages/User";

function App() {
  return (
    <BrowserRouter>
      
        <div className="App">
          <h1>React-recoil state</h1>
        </div>
        <Routes>
          <Route path="/" element={<UserInfo />} />
          <Route path="/user" element={<User />} />
        </Routes>
    </BrowserRouter>
  );
}

export default App;

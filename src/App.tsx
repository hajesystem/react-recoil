import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { RecoilRoot } from "recoil";
import UserInfo from "./components/UserInfo";
import User from "./pages/User";

function App() {
  return (
    <BrowserRouter>
      <RecoilRoot>
        <div className="App">
          <h1>React-recoil state</h1>
        </div>
        <Routes>
          <Route path="/" element={<UserInfo />} />
          <Route path="/user" element={<User />} />
        </Routes>
      </RecoilRoot>
    </BrowserRouter>
  );
}

export default App;

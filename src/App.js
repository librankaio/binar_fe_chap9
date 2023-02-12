import './App.css';
import * as React from 'react';

import { useState } from "react";
import { BrowserRouter, Routes, Route, useLocation, Navigate } from "react-router-dom";
import Home from "./components/Home";
import Games from "./components/Games";
import Profile from "./components/Profile";
import About from "./components/About";
import RockPaperScissor from "./components/Detail";
import BritishWomen from "./components/Detail2";
import Nostalgic from "./components/Detail3";
import Farcry4 from "./components/Detail4";
import LollipopChainsaw from "./components/Detail6";
import Wiu from "./components/Detail7";
import NotFound from "./components/NotFound";
import LoginPage from './components/Login';
import RegisterPage from './components/Register';
import { CssBaseline } from '@mui/material';
import Landing from './components/Landing';

function App() {
  const [auth, setAuth] = useState(false);
  const location = useLocation();

  return (
    // <BrowserRouter>
    <>
      <CssBaseline />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<LoginPage setAuth={setAuth} />} />

        <Route
          path="/"
          element={
            auth ? (
              <Landing setAuth={setAuth} />
            ) : (
              <Navigate to="/login" state={{ from: location }} replace />
            )
          }
        />

        <Route path="/register" element={<RegisterPage />} />
        <Route path="/home" element={<Home />} />
        <Route path="/games" element={<Games />} />
        <Route path="/profile" element={<Profile />}>
          <Route path=":username" element={<Profile />} />
        </Route>
        <Route path="/about" element={<About />} />
        <Route path="/detail/rock-paper-scissor" element={<RockPaperScissor />} />
        <Route path="/detail/british-women" element={<BritishWomen />} />
        <Route path="/detail/nostalgic" element={<Nostalgic />} />
        <Route path="/detail/far-cry-4" element={<Farcry4 />} />
        <Route path="/detail/lollipop-chainsaw" element={<LollipopChainsaw />} />
        <Route path="/detail/wiiUUU" element={<Wiu />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      {/* </BrowserRouter> */}
    </>
  );
}


export default App;

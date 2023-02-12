import './App.css';
import * as React from 'react';

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Profile from "./components/Profile";
import About from "./components/About";
import RockPaperScissor from "./components/Detail";
import BritishWomen from "./components/Detail2";
import Nostalgic from "./components/Detail3";
import Farcry4 from "./components/Detail4";
import Nostalgic2 from "./components/Detail5";
import LollipopChainsaw from "./components/Detail6";
import Wiu from "./components/Detail7";
import NotFound from "./components/NotFound";
import LoginPage from './components/Login';
import RegisterPage from './components/Register';
import { CssBaseline } from '@mui/material';
import Landing from './components/Landing';

function App() {
  return (
    <BrowserRouter>
      <CssBaseline />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/home" element={<Home />} />
        <Route path="/profile" element={<Profile />}>
          <Route path=":username" element={<Profile />} />
        </Route>
        <Route path="/about" element={<About />} />
        <Route path="/detail/rock-paper-scissor" element={<RockPaperScissor />} />
        <Route path="/detail/british-women" element={<BritishWomen />} />
        <Route path="/detail/nostalgic" element={<Nostalgic />} />
        <Route path="/detail/far-cry-4" element={<Farcry4 />} />
        <Route path="/detail/nostalgic-2" element={<Nostalgic2 />} />
        <Route path="/detail/lollipop-chainsaw" element={<LollipopChainsaw />} />
        <Route path="/detail/wiiUUU" element={<Wiu />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>

    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>      
    // </div>
  );
}


export default App;

import './App.css';
import * as React from 'react';

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Games from "./components/Games";
import Profile from "./components/Profile";
import About from "./components/About";
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
        <Route path="/games" element={<Games />} />
        <Route path="/profile" element={<Profile />}>
          <Route path=":username" element={<Profile />} />
        </Route>
        <Route path="/about" element={<About />} />
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

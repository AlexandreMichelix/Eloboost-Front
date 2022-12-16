<<<<<<< develop
import React from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const Routing = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/home" />
          {/*<Route path="/login" element={<Login />} />*/}
          {/*<Route path="/register" element={<Register />} />*/}
          {/*<Route path="/profile/:id" element={<Profile />} />*/}
        </Routes>
      </BrowserRouter>
    </div>
  );
=======
import React from 'react';
import './App.css';
import Home from "./app/pages/Home/Home";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
const Routing = () => {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home />} />
                    {/*<Route path="/login" element={<Login />} />*/}
                    {/*<Route path="/register" element={<Register />} />*/}
                    {/*<Route path="/profile/:id" element={<Profile />} />*/}
                </Routes>
            </BrowserRouter>
        </div>
    );
>>>>>>> init pages
};

function App() {
  return (
    <div className="App">
<<<<<<< develop
      {/*<header className="App-header"></header>*/}
      <body>
        <Navbar></Navbar>
        <Routing></Routing>
      </body>
=======
        <Routing></Routing>
>>>>>>> init pages
    </div>
  );
}

export default App;

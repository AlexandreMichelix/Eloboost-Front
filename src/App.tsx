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
};

function App() {
  return (
    <div className="App">
      {/*<header className="App-header"></header>*/}
      <body>
        <Navbar></Navbar>
        <Routing></Routing>
      </body>
    </div>
  );
}

export default App;

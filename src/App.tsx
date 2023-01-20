import React from "react";
import "./App.css";
import Navbar from "./app/components/Navbar/Navbar";
import Home from "./app/pages/Home/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./app/pages/Login/Login";
import Register from "./app/pages/Register/Register";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Profile from "./app/pages/Profile/Profile";

export const theme = createTheme({
  palette: {
    primary: {
      main: "#023e8a",
    },
    secondary: {
      main: "#7902a0",
    },
  },
});

const Routing = () => {
  return (
    <div>
      <BrowserRouter>
        <Navbar></Navbar>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/profile/:id" element={<Profile />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <header className="App-header"></header>
        <body className="bg-white">
          <Routing></Routing>
        </body>
      </div>
    </ThemeProvider>
  );
}

export default App;

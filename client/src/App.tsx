import React from "react";
import "./App.css";
import Nav from "./components/Nav";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./pages/About";
import Main from "./pages/Main";
import Contact from "./pages/Contact";
import Create from "./pages/Create";
import Singin from "./pages/Singin";

function App() {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/create" element={<Create />} />
        <Route path="/singin" element={<Singin />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

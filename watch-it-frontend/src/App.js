import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home.js";
import Search from "./pages/Search.js";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/search" element={<Search />}></Route>
    </Routes>
  );
}

export default App;

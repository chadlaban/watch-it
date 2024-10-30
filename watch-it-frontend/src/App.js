import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home.js";
import Search from "./pages/Search.js";
import Header from "./components/Header.js";
import Footer from "./components/Footer.js";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/search" element={<Search />}></Route>
      </Routes>
      <Footer />
    </>
  );
}

export default App;

import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home.js";
import Search from "./pages/Search.js";
import Header from "./components/Header.js";
import Footer from "./components/Footer.js";
import { Details } from "./components/info/Details.js";

function App() {
  return (
    <>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/search" element={<Search />}></Route>
          <Route path="/info/:id" element={<Details />}></Route>
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;

import "./App.css";
import Home from "./components/Home";
import Header from "./components/Header";
import Footer from "./components/Footer";
import React, { useState } from "react";

function App() {
  const [collapseNav, setCollapseNav] = useState(true);
  function toggleMenu() {
    setCollapseNav((prevState) => !prevState);
  }
  return (
    <div className="w-full flex flex-col items-center m-0 h-full">
      <Header collapseNav={collapseNav} toggleMenu={toggleMenu} />
      <Home toggleMenu={toggleMenu} />
      <Footer toggleMenu={toggleMenu} />
    </div>
  );
}

export default App;

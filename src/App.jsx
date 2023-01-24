import { useState } from "react";
import "./App.css";
import Home from "./components/Home";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="w-full flex flex-col items-center m-0 h-full">
      <Header />
      <Home />
      <Footer />
    </div>
  );
}

export default App;

import { useState } from "react";
import "remixicon/fonts/remixicon.css";
import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Destination from "./components/Destination";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Navbar />
      <Hero />
      <Destination />
    </>
  );
}

export default App;

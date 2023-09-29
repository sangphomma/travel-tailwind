import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1 className="text-xl font-[700]">Hello world</h1>
      <h2 className="text-headingColor font-[900] text-2xl">
        ศิริกร แสงพรหมมา
      </h2>
      <span>อาศัยอยู่ จ.กาญจนบุรี</span>
    </>
  );
}

export default App;

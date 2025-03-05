import { useState, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Navbar from "./components/Navbar";
function App() {
  const [count, setCount] = useState(0);
  const [first, setfirst] = useState(0);
  const [color, setColor] = useState(0);
  useEffect(() => {
    alert("Hey welcome to my page");
  }, []);

  useEffect(() => {
    alert("Hey count is changed");
    setColor(color+1);
  }, [count]);

  useEffect(() => {
    alert("Hey First is changed");
  }, [first]);
  return (
    <>
      <Navbar color={"red"} />
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;

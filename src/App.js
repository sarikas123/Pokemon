import "./styles.css";
import Pokemon from "./pokemon";
import { useState } from "react";
export default function App() {
  const [timer, setTimer] = useState(new Date().toTimeString());
  setInterval(() => {
    setTimer(new Date().toTimeString());
  }, 1000);
  return (
    <div className="App">
      <Pokemon timer={timer} />
    </div>
  );
}

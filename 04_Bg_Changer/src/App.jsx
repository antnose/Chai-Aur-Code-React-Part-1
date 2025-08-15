import { useState } from "react";
import "./App.css";

function App() {
  const [color, setColor] = useState("#414141");
  return (
    <div
      className="w-full h-screen duration-200"
      style={{ backgroundColor: color }}
    >
      <h1 className="text-center text-6xl font-bold">BG Changer</h1>

      <div className="h-16 w-[90%] border flex items-center justify-center px-8 rounded-2xl mx-auto gap-4 bg-amber-100 mt-12 ">
        <button
          className={"border rounded-2xl px-4 py-1 bg-white text-black"}
          onClick={() => {
            setColor("white");
          }}
        >
          White
        </button>

        <button
          className={"border rounded-2xl px-4 py-1 bg-black text-white"}
          onClick={() => {
            setColor("#212121");
          }}
        >
          Black
        </button>

        <button
          className={"border rounded-2xl px-4 py-1 bg-yellow-300 text-black"}
          onClick={() => {
            setColor("yellow");
          }}
        >
          Yellow
        </button>

        <button
          className={"border rounded-2xl px-4 py-1 bg-blue-400 text-black"}
          onClick={() => {
            setColor("blue");
          }}
        >
          Blue
        </button>

        <button
          className={"border rounded-2xl px-4 py-1 bg-green-400 text-black"}
          onClick={() => {
            setColor("green");
          }}
        >
          Green
        </button>
      </div>
    </div>
  );
}

export default App;

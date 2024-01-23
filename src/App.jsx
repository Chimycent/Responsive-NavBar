import { useState, useEffect } from "react";
import NavBar from "./components/NavBar";

function App() {
  const [state, setState] = useState("deji");
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("first");
  }, [count, state]);

  const increment = () => {
    setCount((prev) => prev + 1);
  };

  const decrement = () => {
    setCount((prev) => (prev === 0 ? 0 : prev - 1));
  };

  return (
    <div className="flex flex-col items-center  ">
      <NavBar />
      <div className="flex mt-20 flex-col items-center justify-center  gap-5 text-3xl text-white bg-black">
        <button onClick={decrement}>-</button>
        <p className="text-5xl">
          {count} {state}
        </p>
        <button onClick={increment}>+</button>
      </div>
    </div>
  );
}

export default App;
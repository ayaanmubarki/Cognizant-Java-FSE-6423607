import React, { useState } from "react";
import CurrencyConvertor from "./CurrencyConvertor";

function App() {
  const [count, setCount] = useState(0);

  // Function for Say Welcome
  const sayMessage = (msg) => {
    alert(msg);
  };

  // Function for synthetic event
  const handlePress = () => {
    alert("I was clicked");
  };

  // Method 1: Increment the counter
  const incrementValue = () => {
    setCount(count + 1);
  };


  // Decrement counter
  const decrementValue = () => {
    setCount(count - 1);
  };

  // "Increase" button
  const handleIncrease = () => {
    incrementValue();
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>React Events, Currency Converter & Counter</h1>

      {/* 1. Say Welcome button */}
      <button onClick={() => sayMessage("Welcome")}>Say Welcome</button>

      <br /><br />

      {/* 2. Synthetic event */}
      <button onClick={handlePress}>OnPress</button>

      <br /><br />

      {/* 3. Counter section */}
      <h2>Counter: {count}</h2>
      <button onClick={handleIncrease}>Increase</button>
      &nbsp;
      <button onClick={decrementValue}>Decrease</button>

      <br /><br />

      {/* 4. CurrencyConvertor Component */}
      <CurrencyConvertor />
    </div>
  );
}

export default App;

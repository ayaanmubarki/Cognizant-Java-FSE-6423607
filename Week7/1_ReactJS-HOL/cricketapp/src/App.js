import React from "react";
import ListofPlayers from "./Components/ListofPlayers";
import IndianPlayers from "./Components/IndianPlayers";

function App() {
  // Flag variable to decide which component to show
  const flag = true; // Change to false to see IndianPlayers

  return (
    <div style={{ padding: "20px" }}>
      <h1>Cricket App</h1>
      {flag ? <ListofPlayers /> : <IndianPlayers />}
    </div>
  );
}

export default App;

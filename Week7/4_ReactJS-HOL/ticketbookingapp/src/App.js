import React, { useState } from "react";

// --- Greeting Components ---
function UserGreeting() {
  return (
    <div>
      <h2>Welcome back!</h2>
      <p>You can now book your flight tickets.</p>
      <button>Book Ticket</button>
    </div>
  );
}

function GuestGreeting() {
  return (
    <div>
      <h2>Welcome Guest</h2>
      <p>Please login to book your tickets. Meanwhile, browse our flights.</p>
      <ul>
        <li>Chennai → Mumbai | ₹4500</li>
        <li>Delhi → Bengaluru | ₹5500</li>
        <li>Kolkata → Hyderabad | ₹4000</li>
      </ul>
    </div>
  );
}

// --- Buttons ---
function LoginButton(props) {
  return <button onClick={props.onClick}>Login</button>;
}

function LogoutButton(props) {
  return <button onClick={props.onClick}>Logout</button>;
}

// --- Main App ---
function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLoginClick = () => {
    setIsLoggedIn(true);
  };

  const handleLogoutClick = () => {
    setIsLoggedIn(false);
  };

  let button;
  if (isLoggedIn) {
    button = <LogoutButton onClick={handleLogoutClick} />;
  } else {
    button = <LoginButton onClick={handleLoginClick} />;
  }

  return (
    <div style={{ padding: "20px" }}>
      <h1>Ticket Booking App</h1>
      {isLoggedIn ? <UserGreeting /> : <GuestGreeting />}
      <br />
      {button}
    </div>
  );
}

export default App;

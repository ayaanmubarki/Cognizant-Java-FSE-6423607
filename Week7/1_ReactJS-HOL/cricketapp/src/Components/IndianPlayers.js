import React from "react";

const IndianPlayers = () => {
  const players = [
    "Virat Kohli",
    "Rohit Sharma",
    "Shikhar Dhawan",
    "KL Rahul",
    "Rishabh Pant",
    "Hardik Pandya",
    "Ravindra Jadeja",
    "Bhuvneshwar Kumar",
    "Mohammed Shami",
    "Jasprit Bumrah",
    "Yuzvendra Chahal"
  ];

  // Destructuring odd and even team players
  const oddPlayers = players.filter((_, index) => index % 2 !== 0);
  const evenPlayers = players.filter((_, index) => index % 2 === 0);

  // Two arrays for merging
  const T20players = ["Virat Kohli", "Rohit Sharma", "KL Rahul"];
  const RanjiTrophyPlayers = ["Cheteshwar Pujara", "Ajinkya Rahane"];

  // Merging using ES6 spread operator
  const mergedPlayers = [...T20players, ...RanjiTrophyPlayers];

  return (
    <div>
      <h2>Odd Team Players</h2>
      <ul>
        {oddPlayers.map((p, i) => (
          <li key={i}>{p}</li>
        ))}
      </ul>

      <h2>Even Team Players</h2>
      <ul>
        {evenPlayers.map((p, i) => (
          <li key={i}>{p}</li>
        ))}
      </ul>

      <h2>Merged T20 & Ranji Trophy Players</h2>
      <ul>
        {mergedPlayers.map((p, i) => (
          <li key={i}>{p}</li>
        ))}
      </ul>
    </div>
  );
};

export default IndianPlayers;

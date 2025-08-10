import React from "react";

const ListofPlayers = () => {
  // Declare an array of 11 players with name and score
  const players = [
    { name: "Virat Kohli", score: 85 },
    { name: "Rohit Sharma", score: 45 },
    { name: "Shikhar Dhawan", score: 75 },
    { name: "KL Rahul", score: 60 },
    { name: "Rishabh Pant", score: 90 },
    { name: "Hardik Pandya", score: 68 },
    { name: "Ravindra Jadeja", score: 55 },
    { name: "Bhuvneshwar Kumar", score: 30 },
    { name: "Mohammed Shami", score: 25 },
    { name: "Jasprit Bumrah", score: 40 },
    { name: "Yuzvendra Chahal", score: 65 }
  ];

  // Filter players with score below 70 using arrow functions
  const lowScorePlayers = players.filter(player => player.score < 70);

  return (
    <div>
      <h2>All Players with Scores</h2>
      <ul>
        {players.map((player, index) => (
          <li key={index}>
            {player.name} - {player.score}
          </li>
        ))}
      </ul>

      <h2>Players with Score Below 70</h2>
      <ul>
        {lowScorePlayers.map((player, index) => (
          <li key={index}>
            {player.name} - {player.score}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ListofPlayers;

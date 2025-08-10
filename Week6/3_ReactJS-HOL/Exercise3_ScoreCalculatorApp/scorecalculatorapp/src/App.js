import React from 'react';
import CalculateScore from './Components/CalculateScore';

function App() {
  return (
    <div>
      <h1>Score Calculator App</h1>
      <CalculateScore name="Ayaan" school="Green Valley High" total={450} goal={5} />
    </div>
  );
}

export default App;

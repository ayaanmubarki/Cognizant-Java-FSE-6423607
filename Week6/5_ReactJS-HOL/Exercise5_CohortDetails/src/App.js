import React from "react";
import CohortDetails from "./CohortDetails";

function App() {
  return (
    <div>
      <CohortDetails
        name="React Beginners Cohort"
        status="ongoing"
        startDate="2025-01-10"
        endDate="2025-03-10"
      />

      <CohortDetails
        name="Java Advanced Cohort"
        status="completed"
        startDate="2024-09-15"
        endDate="2024-12-15"
      />
    </div>
  );
}

export default App;

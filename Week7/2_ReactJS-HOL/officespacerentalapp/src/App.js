import React from "react";
import "./App.css";
import officeImg from "./assets/office.jpg"; // ✅ Image inside src/assets

function App() {
  // Heading using JSX
  const heading = "Office Space Rentals";

  // JSX attribute for image
  const officeImage = <img src={officeImg} width="25%" height="25%" alt="Office Space" />;

  // Example single office object
  const singleOffice = {
    Name: "DBS",
    Rent: 50000,
    Address: "Chennai"
  };

  // List of office spaces
  const officeList = [
    { Name: "DBS", Rent: 50000, Address: "Chennai" },
    { Name: "Regus", Rent: 75000, Address: "Bangalore" },
    { Name: "WeWork", Rent: 65000, Address: "Mumbai" },
    { Name: "SmartWorks", Rent: 55000, Address: "Hyderabad" }
  ];

  return (
    <div style={{ padding: "20px" }}>
      {/* Heading */}
      <h1>{heading} - Affordable Range</h1>

      {/* Image */}
      {officeImage}

      {/* Single office details */}
      <h2>Single Office Example</h2>
      <h3>Name: {singleOffice.Name}</h3>
      <h3 className={singleOffice.Rent <= 60000 ? "textRed" : "textGreen"}>
        Rent: Rs. {singleOffice.Rent}
      </h3>
      <h3>Address: {singleOffice.Address}</h3>

      {/* Multiple offices list */}
      <h2>Available Office Spaces</h2>
      <div className="office-container">
        {officeList.map((office, index) => {
          const colorClass = office.Rent <= 60000 ? "textRed" : "textGreen";
          return (
            <div key={index} className="office-card">
              <h3>{office.Name}</h3>
              <p className={colorClass}>Rent: Rs. {office.Rent}</p>
              <p>Address: {office.Address}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;

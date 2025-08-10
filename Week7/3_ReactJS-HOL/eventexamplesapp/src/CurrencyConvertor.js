import React, { useState } from "react";

function CurrencyConvertor() {
  const [rupees, setRupees] = useState("");
  const [euros, setEuros] = useState("");
  const exchangeRate = 90; // Example: 1 Euro = ₹90

  // Convert Rupees to Euros
  const handleSubmit = () => {
    if (rupees === "" && euros === "") {
      alert("Please enter an amount");
      return;
    }

    if (rupees) {
      const result = (parseFloat(rupees) / exchangeRate).toFixed(2);
      setEuros(result);
    }

    if (euros) {
      const result = (parseFloat(euros) * exchangeRate).toFixed(2);
      setRupees(result);
    }
  };

  return (
    <div style={{ border: "1px solid black", padding: "20px", width: "300px" }}>
      <h2>Currency Converter</h2>

      <label>Rupees (₹): </label>
      <input
        type="number"
        value={rupees}
        onChange={(e) => {
          setRupees(e.target.value);
          setEuros(""); // clear euros when typing rupees
        }}
      />

      <br /><br />

      <label>Euros (€): </label>
      <input
        type="number"
        value={euros}
        onChange={(e) => {
          setEuros(e.target.value);
          setRupees(""); // clear rupees when typing euros
        }}
      />

      <br /><br />

      <button onClick={handleSubmit}>Convert</button>
    </div>
  );
}

export default CurrencyConvertor;

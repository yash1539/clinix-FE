import React, { useState, useEffect } from "react";
import './history.css'
function History() {
  const [patientHistory, setPatientHistory] = useState([]);

  useEffect(() => {
    // TODO: Fetch patient history data from your API
    // Replace this with your actual API endpoint
    fetch("https://api.example.com/patient-history")
      .then((response) => response.json())
      .then((data) => setPatientHistory(data))
      .catch((error) => console.error("Error fetching patient history:", error));
  }, []); // Run this effect only once on component mount

  return (
    <div>
      <h2>Patient History</h2>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Number</th>
            <th>Latest Visit Date</th>
            <th>Problem</th>
            <th>Bill</th>
          </tr>
        </thead>
        <tbody>
          {patientHistory.map((patient) => (
            <tr key={patient.pNumber}>
              <td>{patient.pName}</td>
              <td>{patient.pNumber}</td>
              <td>{patient.visits[0]?.cameAt || "N/A"}</td>
              <td>{patient.visits[0]?.problem || "N/A"}</td>
              <td>{patient.visits[0]?.pBill || "N/A"}</td>
              {/* Add an onClick handler to view more details */}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default History;

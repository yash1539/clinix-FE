import React, { useState } from "react";

function RegisterPatient() {
  const [patientData, setPatientData] = useState({
    pName: "",
    pNumber: "",
    problem: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPatientData({ ...patientData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: Send patientData to your server using API
    console.log("Patient data submitted:", patientData);
  };

  return (
    <div>
      <h2>Register New Patient</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Patient Name:
          <input
            type="text"
            name="pName"
            value={patientData.pName}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Phone Number:
          <input
            type="text"
            name="pNumber"
            value={patientData.pNumber}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Problem:
          <textarea
            name="pPrescription"
            value={patientData.pPrescription}
            onChange={handleChange}
          />
        </label>
        <br />
        <button type="submit">Register Patient</button>
      </form>
    </div>
  );
}

export default RegisterPatient;

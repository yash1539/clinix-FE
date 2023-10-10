import React, { useState } from "react";
import './registerPatient.css'
function RegisterPatient() {
  const [patientData, setPatientData] = useState({
    pName: "",
    pNumber: "",
    age: "",
    gender: "",
    mobile: "",
    email: "",
    address: "",
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
      <h2>Register Patient</h2>
      <div className="tabContainer">
        <div className="tab">New Patient</div>
        <div className="tab">Existing Patient</div>
      </div>
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
          Age:
          <input
            type="text"
            name="age"
            value={patientData.age}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Gender:
          <input
            type="text"
            name="gender"
            value={patientData.gender}
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
          Mobile:
          <input
            type="text"
            name="mobile"
            value={patientData.mobile}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Email:
          <input
            type="text"
            name="email"
            value={patientData.email}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Address:
          <textarea
            name="address"
            value={patientData.address}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Problem Description:
          <textarea
            name="problem"
            value={patientData.problem}
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

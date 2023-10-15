import React, { useState, useEffect } from "react";
import "./registerPatient.css";
import useLogin from "../hooks/useLogin";

import {
  FormControl,
  RadioGroup,
  Radio,
  FormControlLabel,
  TextField,
  Select,
  MenuItem,
  InputLabel,
  Button,
} from "@mui/material";

import Box from "@mui/material/Box";
import Container from "@mui/material/Container";

function RegisterPatient() {
  const { registerPatient, PatientInfo, findPatient, findPatientInfo } =
    useLogin();

  const [patientType, setPatientType] = useState("new");
  const [name, setName] = useState("");
  const [gender, setGender] = useState("");
  const [age, setAge] = useState("");
  const [healthIssue, setHealthIssue] = useState("");

  const [mobileNumber, setMobileNumber] = useState("");
  const [address, setAddress] = useState({
    pinCode: "",
    state: "",
    city: "",
  });
  useEffect(() => {
    if (mobileNumber.length === 13 && patientType !== "new") {
      findPatientInfo(mobileNumber);
    }
  }, [mobileNumber]);

  const handlePatientTypeChange = (event) => {
    setPatientType(event.target.value);
  };

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleGenderChange = (event) => {
    setGender(event.target.value);
  };
  const handleAgeChange = (event) => {
    setAge(event.target.value);
  };
  const handleHealthIssueChange = (event) => {
    setHealthIssue(event.target.value);
  };

  const handlePinCodeChange = (event) => {
    setAddress({ ...address, pinCode: event.target.value });
  };

  const handleStateChange = (event) => {
    setAddress({ ...address, state: event.target.value });
  };

  const handleCityChange = (event) => {
    setAddress({ ...address, city: event.target.value });
  };
  const handleMobileNumberChange = (event) => {
    // Automatically add "+91" before the mobile number
    const rawNumber = event.target.value;
    if (!rawNumber.startsWith("+91")) {
      setMobileNumber("+91" + rawNumber);
    } else {
      setMobileNumber(rawNumber);
    }
  };
  const handleClear = () => {
    setPatientType("new");
    setName("");
    setGender("");
    setAge("");
    setHealthIssue("");

    setAddress({
      pinCode: "",
      state: "",
      city: "",
    });
    setMobileNumber("");
  };

  const handleSubmit = () => {
    const data = {
      pName: name,
      pNumber: mobileNumber,
      pDoctors: "dr.vive",
      age: age,
      gender: gender,
      address: address,
      problem: healthIssue,
    };
    registerPatient(data);
  };

  const indianStates = [
    "Andhra Pradesh",
    "Arunachal Pradesh",
    "Assam",
    "Bihar",
    "Chhattisgarh",
    "Goa",
    "Gujarat",
    "Haryana",
    "Himachal Pradesh",
    "Jharkhand",
    "Karnataka",
    "Kerala",
    "Madhya Pradesh",
    "Maharashtra",
    "Manipur",
    "Meghalaya",
    "Mizoram",
    "Nagaland",
    "Odisha",
    "Punjab",
    "Rajasthan",
    "Sikkim",
    "Tamil Nadu",
    "Telangana",
    "Tripura",
    "Uttar Pradesh",
    "Uttarakhand",
    "West Bengal",
  ];

  return (
    <Container>
      <div className="heading">Register Patient</div>
      <div className="box-wrap">
        <Box className="box-comp">
          <div>Select the Patient</div>
          <div>
            <FormControl component="fieldset">
              <RadioGroup
                aria-label="patientType"
                name="patientType"
                value={patientType}
                onChange={handlePatientTypeChange}
                row
              >
                <FormControlLabel
                  value="new"
                  control={<Radio />}
                  label="New Patient"
                />
                <FormControlLabel
                  value="registered"
                  control={<Radio />}
                  label="Registered Patient"
                />
              </RadioGroup>
            </FormControl>
          </div>
          <div>Patient Details</div>
          <div>
            <TextField
              label="Mobile Number"
              value={mobileNumber}
              onChange={handleMobileNumberChange}
              variant="outlined"
              fullWidth
              margin="normal"
              required
            />
            <TextField
              label="Patient Name"
              // value={name}
              value={
                findPatient?.message ===
                "Patient details retrieved successfully"
                  ? findPatient?.patientData.pName
                  : name
              }
              onChange={handleNameChange}
              variant="outlined"
              fullWidth
              margin="normal"
            />
          </div>
          <div style={{ display: "flex", gap: "10px" }}>
            <TextField
              label="Age"
              type="number"
              value={
                findPatient?.message ===
                "Patient details retrieved successfully"
                  ? findPatient?.patientData.age
                  : age
              }
              onChange={handleAgeChange}
              variant="outlined"
              fullWidth
              margin="normal"
            />
            <FormControl variant="outlined" fullWidth margin="normal">
              <InputLabel>Gender</InputLabel>
              <Select
                value={
                  findPatient?.message ===
                  "Patient details retrieved successfully"
                    ? findPatient?.patientData.gender
                    : gender
                }
                onChange={handleGenderChange}
                label="Gender"
              >
                <MenuItem value="male">Male</MenuItem>
                <MenuItem value="female">Female</MenuItem>
                <MenuItem value="other">Other</MenuItem>
              </Select>
            </FormControl>
          </div>
        </Box>
        <Box className="box-comp">
          <div>
            <div>Health Issue</div>
            <div>
              <TextField
                label="Health Issue"
                value={
                  findPatient?.message ===
                  "Patient details retrieved successfully"
                    ? findPatient?.patientData.visits[0].problem
                    : healthIssue
                }
                onChange={handleHealthIssueChange}
                variant="outlined"
                fullWidth
                margin="normal"
              />
            </div>
            <div>Address Details</div>
            <div>
              <FormControl variant="outlined" fullWidth margin="normal">
                <InputLabel>State</InputLabel>
                <Select
                  value={
                    findPatient?.message ===
                    "Patient details retrieved successfully"
                      ? findPatient?.patientData?.address.state
                      : address.state
                  }
                  onChange={handleStateChange}
                  label="State"
                >
                  {indianStates.map((state, index) => (
                    <MenuItem key={index} value={state}>
                      {state}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </div>
            <div>
              <TextField
                label="City"
                value={
                  findPatient?.message ===
                  "Patient details retrieved successfully"
                    ? findPatient?.patientData?.address.city
                    : address.city
                }
                onChange={handleCityChange}
                variant="outlined"
                fullWidth
                margin="normal"
              />
              <TextField
                label="Pin Code"
                type="number"
                value={
                  findPatient?.message ===
                  "Patient details retrieved successfully"
                    ? findPatient?.patientData?.address.pinCode
                    : address.pinCode
                }
                onChange={handlePinCodeChange}
                variant="outlined"
                fullWidth
                margin="normal"
              />
            </div>
          </div>
        </Box>
      </div>
      <div style={{ marginTop: 20 }}>
        <Button variant="contained" color="secondary" onClick={handleClear}>
          Clear
        </Button>
        <Button
          variant="contained"
          color="primary"
          style={{ marginLeft: 10 }}
          onClick={handleSubmit}
        >
          Submit
        </Button>
      </div>
    </Container>
  );
}

export default RegisterPatient;

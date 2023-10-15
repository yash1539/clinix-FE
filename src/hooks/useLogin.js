import { useState } from "react";
import axios from "axios";

let baseurl = "https://app-oqundvwgva-uc.a.run.app";

const useLogin = () => {
  const [loginInfo, setLoginInfo] = useState();
  const [PatientInfo, setPatientInfo] = useState();
  const [findPatient, setFindPatien] = useState();

  const callLogin = (data) => {
    axios
      .post(`${baseurl}/login`, data)
      .then((res) => {
        if (res?.data) {
          const token = res.data.token;

          setLoginInfo(res.data);
          localStorage.setItem("token", token);
        }
      })
      .catch((error) => console.log("Error: ", error));
  };
  const findPatientInfo = (mobileNumber) => {
    const token = localStorage.getItem("token");

    const headers = {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    };
    axios
      .get(`${baseurl}/getPatient/${mobileNumber}`, { headers: headers })
      .then((res) => {
        if (res?.data) {
          setFindPatien(res.data);
        }
      })
      .catch((error) => console.log("Error: ", error));
  };

  const registerPatient = (data) => {
    const token = localStorage.getItem("token");

    const headers = {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    };
    axios
      .post(`${baseurl}/newPatients`, data, { headers: headers })
      .then((res) => {
        if (res?.data) {
          setPatientInfo(res.data);
        }
      })
      .catch((error) => console.log("Error: ", error));
  };

  return {
    callLogin,
    loginInfo,
    registerPatient,
    PatientInfo,
    findPatientInfo,
    findPatient,
  };
};

export default useLogin;

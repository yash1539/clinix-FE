import React, { useEffect, useState } from "react";
import "./App.css";
import TextField from "@mui/material/TextField";
import useLogin from "./hooks/useLogin";
import Dashboard from "./component/Dashboard";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import Button from "@mui/material/Button";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  const imageUrl =
    "https://firebasestorage.googleapis.com/v0/b/my-clinic-2de14.appspot.com/o/Group%2023.png?alt=media&token=40c71a6a-e9a2-464f-a5f6-05ffd19d7b3c&_gl=1*1ss4v7l*_ga*MTM5MjI1MTUxMi4xNjg2ODE0NDgx*_ga_CW55HF8NVT*MTY5Njc4NjA4Mi43MS4xLjE2OTY3ODYyNDMuNDkuMC4w";
  const [userId, setUserId] = useState("");
  const [pass, setPass] = useState("");
  const [logined, setLogined] = useState(false);
  const [openDialog, setOpenDialog] = useState(false); // State to control the dialog

  const { callLogin, loginInfo } = useLogin();

  const handlePasswordChange = (event) => {
    setPass(event.target.value);
  };
  const handleUserIdChange = (event) => {
    setUserId(event.target.value);
  };

  const handleLogin = () => {
    const data = {
      hpId: userId,
      password: pass,
    };
    callLogin(data);
  };

  useEffect(() => {
    if (loginInfo?.message === "Login successful") {
      setLogined(true);
    } else if (loginInfo?.message === "Unauthorized") {
      toast.error("Something went wrong");
    }
    console.log("log", loginInfo?.message);
  }, [loginInfo]);

  const openSupportDialog = () => {
    setOpenDialog(true);
  };

  const closeSupportDialog = () => {
    setOpenDialog(false);
  };

  return (
    <>
      <ToastContainer />
      {!logined ? (
        <div className="home-wrap">
          <div className="img-wrap">
            <img src={imageUrl} alt="Description" />
            <div className="txt-wrap">
              <p className="txt-1">Streamlining</p>
              <p className="txt-2">Healthcare</p>
              <p className="txt-3">Experience</p>
            </div>
          </div>
          <div>
            <p className="txt-5">MY CLINIC</p>
            <p className="txt-6">Login to your account</p>
            <TextField
              label="User ID"
              variant="outlined"
              fullWidth
              margin="normal"
              value={userId}
              onChange={handleUserIdChange}
            />
            <TextField
              label="Password"
              type="password"
              variant="outlined"
              fullWidth
              margin="normal"
              value={pass}
              onChange={handlePasswordChange}
            />
            <div className="btns-wrap">
              <button onClick={openSupportDialog} className="spt-btn">
                Support
              </button>
              <button onClick={handleLogin} className="login-btn">
                Login
              </button>
            </div>
          </div>
        </div>
      ) : (
        <Router>
          <div>
            <Dashboard />
          </div>
        </Router>
      )}

      <Dialog open={openDialog} onClose={closeSupportDialog}>
        <DialogTitle>Contact Admin</DialogTitle>
        <DialogContent>
          <p>Admin Contact Number: +91 8120917874</p>
        </DialogContent>
        <DialogActions>
          <Button onClick={closeSupportDialog}>Close</Button>
        </DialogActions>
      </Dialog>
    </>
  );
}

export default App;

// Dashboard.js
import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Container,
  Drawer,
  List,
  ListItem,
  ListItemText,
  CssBaseline,
  IconButton,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import {
  Route,
  Routes,
  Link,
  useNavigate,
  useLocation,
} from "react-router-dom";
import "./Dashboard.css";

import RegisterPatient from "./RegisterPatient";
import History from "./History";
import Settings from "./Settings";

function Dashboard() {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const toggleDrawer = () => {
    setOpen(!open);
  };

  React.useEffect(() => {
    navigate("/register-patient");
  }, []);

  const isTabSelected = (tabName) => {
    return location.pathname === `/${tabName.toLowerCase().replace(" ", "-")}`;
  };

  return (
    <div>
      <CssBaseline />
      <AppBar position="static" className="AppBar">
        <Toolbar>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            onClick={toggleDrawer}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6">My Clinic</Typography>
        </Toolbar>
      </AppBar>
      <Drawer open={open} onClose={toggleDrawer}>
        <List>
          {[
            "Register Patient",
            "History",
            "Appointments",
            "Settings",
            "Logout",
          ].map((text, index) => (
            <ListItem
              key={text}
              component={Link}
              to={`/${text.toLowerCase().replace(" ", "-")}`}
              className={isTabSelected(text) ? "selected-tab" : ""}
            >
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
      </Drawer>
      <Container>
        <Routes>
          <Route path="/register-patient" element={<RegisterPatient />} />
          <Route path="/history" element={<History />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/logout">{/* Log the user out and redirect */}</Route>
        </Routes>
      </Container>
    </div>
  );
}

export default Dashboard;

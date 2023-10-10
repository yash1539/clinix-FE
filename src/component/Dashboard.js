// Dashboard.js
import React from "react";
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
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";

import RegisterPatient from "./RegisterPatient"; // Import your RegisterPatient component
import History from "./History"; // Import your History component
import Appointments from "./Appointments"; // Import your Appointments component
import Settings from "./Settings"; // Import your Settings component

function Dashboard() {
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = () => {
    setOpen(!open);
  };

  return (
    <Router>
      <div>
        <CssBaseline />
        <AppBar position="static">
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
                button
                key={text}
                component={Link}
                to={`/${text.toLowerCase().replace(" ", "-")}`}
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
            <Route path="/appointments" element={<Appointments />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/logout">{/* Log the user out and redirect */}</Route>
          </Routes>
        </Container>
      </div>
    </Router>
  );
}

export default Dashboard;

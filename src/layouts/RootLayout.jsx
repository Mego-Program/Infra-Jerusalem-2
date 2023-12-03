import * as React from "react";
import { useLayoutEffect, useEffect } from "react";

import PropTypes from "prop-types";
import {
  AppBar,
  Box,
  CssBaseline,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Toolbar,
  Typography,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { NavLink, Navigate, Outlet, useNavigate } from "react-router-dom";
import { linksBottom, linksTop } from "../Components/Arr_Icons.jsx";
import PrimarySearchAppBar from "../Components/PrimarySearchAppBar.jsx";
import axios from "axios";
import { Token } from "@mui/icons-material";

const drawerWidth = 220;

// Functional component for the root layout
function RootLayout({ window }) {
  // State variables
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [title, setTitle] = React.useState("Dashboard");
  const [selectedButton, setSelectedButton] = React.useState("Dashboard");

  useLayoutEffect(() => {
    const fetchUser = async () => {
      try {
        const token = localStorage.getItem("token");
        if (token) {
          const response = await axios.get(
            "http://localhost:3000/userDetails",
            {
              headers: {
                Authorization: token,
              },
            }
          );
          if (response.status !== 200) {
            return <Navigate to="/" replace={true} />;
          }
        } else {
          return <Navigate to="/" replace={true} />;
        }
      } catch (error) {
        console.log(error);
      }
    };

    fetchUser();
  }, []);

  // Function to set the active button and title
  const activeButton = (text) => {
    setTitle(text);
    setSelectedButton(text);
  };

  // Toggle mobile drawer visibility
  const handleDrawerToggle = () => setMobileOpen(!mobileOpen);

  // Function to render navigation links
  const renderLinks = (links, marginLeft = "0vh") => (
    <List sx={{ flex: 1, marginLeft }}>
      {links.map(({ to, text, icon }, index) => (
        <NavLink key={index} to={to} style={{ textDecoration: "none" }}>
          <ListItem>
            <ListItemButton
              onClick={() => activeButton(text)}
              sx={{
                backgroundColor:
                  selectedButton === text ? "#F6C927" : "#121231",
                color: "white",
                borderRadius: "7px",
                border: "solid 1px #121231",
                "&:hover": {
                  backgroundColor:
                    selectedButton === text ? "#F6C927" : "#21213E",
                  border:
                    selectedButton === text
                      ? "solid 1px #121231"
                      : "solid 1px #F6C927",
                },
              }}
            >
              <ListItemIcon sx={{ color: "white" }}>{icon}</ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        </NavLink>
      ))}
    </List>
  );

  // Sidebar content
  const drawer = (
    <Box
      height="100%"
      display="flex"
      flexDirection="column"
      bgcolor="#121231"
      color="white"
    >
      <Toolbar />
      <Box sx={{ flex: 1 }}>{renderLinks(linksTop)}</Box>
      <Box>{renderLinks(linksBottom)}</Box>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  // JSX for the root layout
  return (
    <Box sx={{ display: "flex", bgcolor: "#21213E", minHeight: "100vh" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
          padding: "5px 0px",
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div" color="#F6C927">
            {title}
          </Typography>
          <PrimarySearchAppBar />
        </Toolbar>
      </AppBar>

      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 },}}
      >
        {/* Mobile Drawer */}
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{ keepMounted: true }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
        {/* Permanent Drawer for larger screens */}
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", sm: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
              borderRight: "none",
            },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>

      {/* Main content area */}
      <Box sx={{ p: "75px 5px 5px 5px", bgcolor: "#21213E", width:'100%'}}>
        <Outlet />
      </Box>
    </Box>
  );
}

// Prop types for the RootLayout component
RootLayout.propTypes = {
  window: PropTypes.func,
};

export default RootLayout;

import * as React from "react";
import { useEffect, useLayoutEffect } from "react";
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
import {
  NavLink,
  Navigate,
  Outlet,
  useNavigate,
  useLocation,
} from "react-router-dom";
import { linksBottom, linksTop } from "../Components/Arr_Icons.jsx";
import PrimarySearchAppBar from "../Components/PrimarySearchAppBar.jsx";
import axios from "axios";
import { Token } from "@mui/icons-material";

const drawerWidth = 220;

function RootLayout({ window }) {
  // State variables
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [title, setTitle] = React.useState("Dashboard");

  const location = useLocation();

  // Function to set the active button and title
  const activeButton = () => {
    // Extract the active button from the pathname
    const path = location.pathname;
    const parts = path.split("/");
    const activeButton = parts.length > 2 ? parts[2] : "dashboard"; // Set default to "dashboard" if not found
    setTitle(
      activeButton
        .split("-")
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join(" ")
    );
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
              onClick={() => activeButton()}
              sx={{
                backgroundColor: title === text ? "#F6C927" : "#121231",
                color: "white",
                borderRadius: "7px",
                border: "solid 1px #121231",
                "&:hover": {
                  backgroundColor: title === text ? "#F6C927" : "#21213E",
                  border:
                    title === text ? "solid 1px #121231" : "solid 1px #F6C927",
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
      height="100vh"
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

  // Use useEffect instead of useLayoutEffect
  useEffect(() => {
    activeButton();
  }, [location.pathname]);

  return (
    <Box
      sx={{
        display: "flex",
        bgcolor: "#21213E",
        minHeight: "100vh",
        maxHeight: "100vh",
      }}
    >
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          height: "75px",
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
          padding: "5px 0px",
        }}
      >
        <Toolbar
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            height: "70px",
          }}
        >
          <Box sx={{ display: "flex", alignItems: "center", flex: 1 }}>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ mr: 2, display: { sm: "none" } }}
            >
              <MenuIcon />
            </IconButton>
            <Typography
              variant="h6"
              noWrap
              component="div"
              color="#F6C927"
              sx={{
                display: { xs: "none", sm: "block" },
              }}
            >
              {title}
            </Typography>
          </Box>
          <PrimarySearchAppBar sx={{ flex: "0 1 auto" }} />
        </Toolbar>
      </AppBar>

      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
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
      <Box sx={{ p: "75px 5px 5px 5px", bgcolor: "#21213E", width: "100%",height:"100%"}}>
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

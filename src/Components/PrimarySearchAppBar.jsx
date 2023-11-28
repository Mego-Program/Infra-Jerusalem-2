import * as React from "react";
import { styled, alpha } from "@mui/material/styles";
import { useState } from "react";
import {
  AppBar,
  Box,
  Toolbar,
  IconButton,
  InputBase,
  Badge,
  Typography,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import NotificationsIcon from "@mui/icons-material/Notifications";
import BadgeAvatars from "./BadgeAvatars";
import AccountMenu from "./AccountMenu";


// Styled components for the search bar
const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: 10,
  backgroundColor: "#121231",
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(4.5),
  marginLeft: 0,
  width: "60%", // Adjust the width as needed
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(),
    width: "auto",
  },
}));

// Styled component for the search icon wrapper
const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

// Styled component for the input base
const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%", // Adjust the width as needed
    [theme.breakpoints.up("md")]: {
      width: "25ch", // Adjust the width as needed
    },
  },
}));

// Main component for the primary app bar
export default function PrimarySearchAppBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" elevation={0}>
        <Toolbar>
          {/* Flex grow for spacing on the left */}
          <Box sx={{ flexGrow: 1 }} />

          {/* Search bar */}
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ "aria-label": "search" }}
            />
          </Search>

          {/* Desktop view: User profile, notifications, and more */}
          <Box
            sx={{ display: { xs: "none", md: "flex" }, alignItems: "center" }}
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                marginRight: 0,
                backgroundColor: "#121231",
                borderRadius: "10px",
                padding: 0,
              }}
            >
              {/* User profile */}
              <Box
                sx={{ display: "flex", alignItems: "center", marginRight: 4 }}
              >
                <BadgeAvatars />
                <Box>
                  <Typography variant="body2" sx={{ color: "white", mb: 0 }}>
                    <b> Emma Taylor </b>
                  </Typography>
                  <Typography variant="caption" sx={{ color: "white", mb: 0 }}>
                    UX/UI Designer
                  </Typography>
                </Box>
              </Box>

              {/* Notifications */}
              <IconButton
                size="large"
                aria-label="10"
                color="inherit"
                sx={{ bgcolor: "#21213E" }}
              >
                <Badge badgeContent={10} color="error">
                  <NotificationsIcon />
                </Badge>
              </IconButton>

              {/* More options */}
              <IconButton
                size="large"
                color="inherit"
                sx={{bgcolor: "#21213E", m: "1vh", width:"48px", height:"48px" }}
              >
                {/* <AccountMenu/> */}
              </IconButton>
            </Box>
          </Box>

          {/* Mobile view: More options */}
          <Box sx={{ display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="show more"
              aria-haspopup="true"
              color="inherit"
              
            >
              <AccountMenu/>
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

import * as React from "react";
import { styled, alpha } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import InputBase from "@mui/material/InputBase";
import Badge from "@mui/material/Badge";
import SearchIcon from "@mui/icons-material/Search";
import NotificationsIcon from "@mui/icons-material/Notifications";
import MoreIcon from "@mui/icons-material/MoreVert";
import { Avatar } from "@mui/material";
import Typography from "@mui/material/Typography";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";

// Styling for the search bar
const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(3),
    width: "auto",
  },
}));

// Styling for the search icon in the search bar
const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

// Styling for the input in the search bar
const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
}));

// Functional component representing the App Bar with search, notifications, and profile
export default function PrimarySearchAppBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      {/* Creating the app bar */}
      <AppBar position="static">
        {/* Toolbar containing various components */}
        <Toolbar>
          {/* Search bar component */}
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…" // Placeholder text for the search input
              inputProps={{ "aria-label": "search" }}
            />
          </Search>

          <Box sx={{ flexGrow: 1 }} />
          <Box
            sx={{ display: { xs: "none", md: "flex" }, alignItems: "center" }}
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                marginRight: 1,
                backgroundColor: "#121231",
                borderRadius: '10px',
                padding: 1,
              }}
            >
              <Box
                sx={{ display: "flex", alignItems: "center", marginRight: 1 }}
              >
                <Avatar
                  // alt="User Image"
                  src="D2.jpg" // Ensure the image path is correct
                  sx={{
                    width: 49,
                    height: 49,
                    borderRadius: "50%",
                    marginRight: 3,
                  }}
                />
                <Box>
                  <Typography variant="body2"  sx={{ color: "white", mb: 0. }}>
                 <b> Emma Taylor </b>
                  </Typography>
                  <Typography
                    variant="caption"
                    sx={{ color: "white", mb: 0 }}
                  >
                    UX/UI Designer
                  </Typography>
                </Box>
              </Box>

              <IconButton size="large" aria-label="10" color="inherit">
                <Badge badgeContent={10} color="error">
                  <NotificationsIcon />
                </Badge>
              </IconButton>
              <Box width={45} height={45} ml={4}>
                <MoreHorizIcon />
              </Box>
            </Box>
          </Box>

          {/* More options icon displayed on smaller screens */}
          <Box sx={{ display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="show more"
              aria-haspopup="true"
              color="inherit"
            >
              <MoreIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}


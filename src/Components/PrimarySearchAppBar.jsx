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

// import * as React from 'react';
// import { styled, alpha } from '@mui/material/styles';
// import AppBar from '@mui/material/AppBar'; // Importing the AppBar component from Material-UI
// import Box from '@mui/material/Box';
// import Toolbar from '@mui/material/Toolbar';
// import IconButton from '@mui/material/IconButton';
// import Typography from '@mui/material/Typography';
// import InputBase from '@mui/material/InputBase';
// import Badge from '@mui/material/Badge';
// import MenuItem from '@mui/material/MenuItem';
// import Menu from '@mui/material/Menu';
// import MenuIcon from '@mui/icons-material/Menu'; // Importing the MenuIcon component from Material-UI
// import SearchIcon from '@mui/icons-material/Search'; // Importing the SearchIcon component from Material-UI
// import AccountCircle from '@mui/icons-material/AccountCircle'; // Importing the AccountCircle component from Material-UI
// import MailIcon from '@mui/icons-material/Mail'; // Importing the MailIcon component from Material-UI
// import NotificationsIcon from '@mui/icons-material/Notifications'; // Importing the NotificationsIcon component from Material-UI
// import MoreIcon from '@mui/icons-material/MoreVert'; // Importing the MoreIcon component from Material-UI
// import MainMenu from './MainMenu'; // Importing the MainMenu component from a local file
// import { Avatar } from '@mui/material';

// // Styling the search bar
// const Search = styled('div')(({ theme }) => ({
//   position: 'relative',
//   borderRadius: theme.shape.borderRadius,
//   backgroundColor: alpha(theme.palette.common.white, 0.15),
//   '&:hover': {
//     backgroundColor: alpha(theme.palette.common.white, 0.25),
//   },
//   marginRight: theme.spacing(2),
//   marginLeft: 0,
//   width: '100%',
//   [theme.breakpoints.up('sm')]: {
//     marginLeft: theme.spacing(3),
//     width: 'auto',
//   },
// }));

// // Styling the search icon in the search bar
// const SearchIconWrapper = styled('div')(({ theme }) => ({
//   padding: theme.spacing(0, 2),
//   height: '100%',
//   position: 'absolute',
//   pointerEvents: 'none',
//   display: 'flex',
//   alignItems: 'center',
//   justifyContent: 'center',
// }));

// // Styling the input in the search bar
// const StyledInputBase = styled(InputBase)(({ theme }) => ({
//   color: 'inherit',
//   '& .MuiInputBase-input': {
//     padding: theme.spacing(1, 1, 1, 0),
//     paddingLeft: `calc(1em + ${theme.spacing(4)})`,
//     transition: theme.transitions.create('width'),
//     width: '100%',
//     [theme.breakpoints.up('md')]: {
//       width: '20ch',
//     },
//   },
// }));

// // PrimarySearchAppBar function component
// export default function PrimarySearchAppBar() {
//   // State variables for managing the menu and mobile menu
//   const [anchorEl, setAnchorEl] = React.useState(null);
//   const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

//   // Checks if the menu is open
//   const isMenuOpen = Boolean(anchorEl);
//   const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

//   // Functions to handle menu and mobile menu opening and closing
//   const handleProfileMenuOpen = (event) => {
//     setAnchorEl(event.currentTarget);
//   };

//   const handleMobileMenuClose = () => {
//     setMobileMoreAnchorEl(null);
//   };

//   const handleMenuClose = () => {
//     setAnchorEl(null);
//     handleMobileMenuClose();
//   };

//   const handleMobileMenuOpen = (event) => {
//     setMobileMoreAnchorEl(event.currentTarget);
//   };

//   // Creates the main menu with profile and account options
//   const menuId = 'primary-search-account-menu';
//   const renderMenu = (
//     <Menu
//       anchorEl={anchorEl}
//       anchorOrigin={{
//         vertical: 'top',
//         horizontal: 'right',
//       }}
//       id={menuId}
//       keepMounted
//       transformOrigin={{
//         vertical: 'top',
//         horizontal: 'right',
//       }}
//       open={isMenuOpen}
//       onClose={handleMenuClose}
//     >
//       <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
//       <MenuItem onClick={handleMenuClose}>My account</MenuItem>
//     </Menu>
//   );

//   // Creates the mobile menu with mail, notifications, and profile options
//   const mobileMenuId = 'primary-search-account-menu-mobile';
//   const renderMobileMenu = (
//     <Menu
//       anchorEl={mobileMoreAnchorEl}
//       anchorOrigin={{
//         vertical: 'top',
//         horizontal: 'right',
//       }}
//       id={mobileMenuId}
//       keepMounted
//       transformOrigin={{
//         vertical: 'top',
//         horizontal: 'right',
//       }}
//       open={isMobileMenuOpen}
//       onClose={handleMobileMenuClose}
//     >
//   {/* Notifications icon with a badge for new notifications */}
//       <MenuItem>
//         <IconButton size="large" aria-label="show 17 new notifications" color="inherit">
//           <Badge badgeContent={11} color="error">
//             <NotificationsIcon />
//           </Badge>
//         </IconButton>
//         <p>Notifications</p>
//       </MenuItem>
//       <MenuItem onClick={handleProfileMenuOpen}>
//         {/* Account icon for the current user's profile */}
//         <IconButton
//           size="large"
//           aria-label="account of current user"
//           aria-controls="primary-search-account-menu"
//           aria-haspopup="true"
//           color="inherit"
//         >
//         </IconButton>
//         <p>Profile</p>
//       </MenuItem>
//     </Menu>
//   );

//   return (
//     <Box sx={{ flexGrow: 1 }}>
//       {/* The app bar with various components */}
//       <AppBar position="static">
//         <Toolbar>

//           {/* Search bar with a search icon and input */}
//           <Search>
//             <SearchIconWrapper>
//               <SearchIcon />
//             </SearchIconWrapper>
//             <StyledInputBase
//               placeholder="Search…"
//               inputProps={{ 'aria-label': 'search' }}
//             />
//           </Search>

//           <Box sx={{ flexGrow: 1 }} />
//           <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
//             {/* Icons for mail, notifications, and profile (visible on larger screens) */}

//             <IconButton
//               size="large"
//               aria-label="10"
//               color="inherit"
//             >
//               <Badge badgeContent={10} color="error">
//                 <NotificationsIcon />
//               </Badge>
//             </IconButton>
//             <IconButton
//               size="large"
//               edge="end"
//               aria-label="account of current user"
//               aria-controls={menuId}
//               aria-haspopup="true"
//               onClick={handleProfileMenuOpen}
//               color="inherit"
//             >
//               <Avatar></Avatar>
//             </IconButton>

//           </Box>
//           <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
//             {/* 3 dots icon (visible on smaller screens) */}
//             <IconButton
//               size="large"
//               aria-label="show more"
//               aria-controls={mobileMenuId}
//               aria-haspopup="true"
//               onClick={handleMobileMenuOpen}
//               color="inherit"
//             >
//               <MoreIcon />
//             </IconButton>
//           </Box>
//         </Toolbar>
//       </AppBar>
//       {/* Render the mobile menu and the main menu */}
//       {renderMobileMenu}
//       {renderMenu}
//     </Box>
//   );
// }

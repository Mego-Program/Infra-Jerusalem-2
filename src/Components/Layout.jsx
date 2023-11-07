// // Layout.js
// import * as React from "react";
// import PropTypes from "prop-types";
// import AppBar from "@mui/material/AppBar";
// import Box from "@mui/material/Box";
// import CssBaseline from "@mui/material/CssBaseline";
// import Drawer from "@mui/material/Drawer";
// import IconButton from "@mui/material/IconButton";
// import MenuIcon from "@mui/icons-material/Menu";
// import Toolbar from "@mui/material/Toolbar";
// import Typography from "@mui/material/Typography";
// import MainMenu from "./MainMenu"; // Import the MainMenu component

// const drawerWidth = 240;

// function Layout(props) {
//   const { window } = props;
//   const [mobileOpen, setMobileOpen] = React.useState(false);

//   const handleDrawerToggle = () => {
//     setMobileOpen(!mobileOpen);
//   };

//   const container =
//     window !== undefined ? () => window().document.body : undefined;

//   return (
//     <Box sx={{ display: "flex" }}>
//       <CssBaseline />
//       <AppBar
//         position="fixed"
//         sx={{
//           width: { sm: `calc(100% - ${drawerWidth}px)` },
//           ml: { sm: `${drawerWidth}px` },
//         }}
//       >
//         <Toolbar>
//           <IconButton
//             color="inherit"
//             aria-label="open drawer"
//             edge="start"
//             onClick={handleDrawerToggle}
//             sx={{ mr: 2, display: { sm: "none" } }}
//           >
//             <MenuIcon />
//           </IconButton>
//           <Typography variant="h6" noWrap component="div" color="white">
//             Dashboard -- create variable
//           </Typography>
//         </Toolbar>
//       </AppBar>
//       <MainMenu
//         mobileOpen={mobileOpen}
//         handleDrawerToggle={handleDrawerToggle}
//         container={container}
//         drawerWidth={drawerWidth}
//       />
//     </Box>
//   );
// }

// Layout.propTypes = {
//   window: PropTypes.func,
// };

// export default Layout;

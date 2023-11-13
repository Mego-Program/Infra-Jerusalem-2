import { Box, Typography } from "@mui/material";
import { NavLink, Outlet } from "react-router-dom";

// Functional component for the authentication layout
export default function AuthLayout() {
  return (
    <Box sx={{p:"0px 50px", color: "white",bgcolor: "#21213E", display: "flex",justifyContent:"center",alignItems:"center", minHeight: "100vh", minWidth: "100vh",}}>
      {/* Left side content */}
      <Box sx={{pr:"50px",width: "60%",}}>
        <h1 style={{Margin: "0px"}}>Website </h1>
        <Typography>
          {/* Placeholder text */}
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eaque quas
          debitis quibusdam deserunt repellat hic molestias ipsum commodi aut
          odit!Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eaque quas
          debitis quibusdam deserunt repellat hic molestias ipsum commodi aut
          odit!Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eaque quas
          debitis quibusdam deserunt repellat hic molestias ipsum commodi aut
          odit!
        </Typography>
      </Box>
      
      {/* Right side content - Sign In and Sign Up links */}
      <Box sx={{p:"0px",minHeight:"100vh",width: "40%", display: "flex", justifyContent: "center",alignItems:"center",bgcolor:"#121231"}}>
        <Box sx={{margin: "50px",}}>
          {/* Sign In link */}
          <NavLink to="signIn" style={{color: "#F6C927"}}><h2>Sign In</h2></NavLink>
        </Box>
        <Box sx={{margin: "50px", }}>
          {/* Sign Up link */}
          <NavLink to="signUp" style={{color: "#F6C927"}}><h2>Sign Up</h2></NavLink>
        </Box>
      </Box>
    </Box>
  );
}

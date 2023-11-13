import React from "react";
import { Box } from "@mui/material";
import { NavLink } from "react-router-dom";

export default function SignUp() {
  return (
    <Box sx={{ p: "50px", bgcolor: "#21213E", minHeight: "100vh" }}>
      <NavLink to="/signIn" style={{ color: "#F6C927" }}>
        <h2 style={{ margin: "0px" }}>Sign In</h2>
      </NavLink>
    </Box>
  );
}

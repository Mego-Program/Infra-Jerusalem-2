import React from "react";
import { Box } from "@mui/material";
import { NavLink } from "react-router-dom";

export default function SignIn() {
  return (
    <Box sx={{ p: "50px", bgcolor: "#21213E", minHeight: "100vh" }}>
      <NavLink to="/rootLayout" style={{ color: "#F6C927" }}>
        <h2 style={{ margin: "0px" }}>Root Layout</h2>
      </NavLink>
    </Box>
  );
}

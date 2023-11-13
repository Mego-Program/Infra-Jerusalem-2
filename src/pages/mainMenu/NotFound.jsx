import { NavLink } from "react-router-dom";
import { Box } from "@mui/material";

export default function NotFound() {
  return (
    <Box
      sx={{
        textAlign: "center",
        color: "white",
        bgcolor: "#21213E",
        minHeight: "100vh",
        maxHeight: "100vh",
        m: "0px",
        p: "20px",
        pt:"100px",
      }}
    >
      <h1 style={{ margin: 0 }}>Error 404: Page Not Found!</h1>
      <h3>
        Go to the{" "}
        <NavLink to="/" style={{ color: "#F6C927" }}>
          Main Page
        </NavLink>
        .
      </h3>
    </Box>
  );
}

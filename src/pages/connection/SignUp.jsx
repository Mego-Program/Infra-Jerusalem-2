import React, { useState } from "react";
import axios from "axios";
import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { NavLink } from "react-router-dom";

const theme = createTheme();

export default function SignUp() {
  const [token, setToken] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);

    try {
      const response = await axios.post("http://localhost:3000/signup", {
        firstName: formData.get("firstName"),
        lastName: formData.get("lastName"),
        userName: formData.get("username"),
        password: formData.get("password"),
        email: formData.get("email"),
      });

      setToken(response.data.token);
      localStorage.setItem("token", response.data.token);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Box
      sx={{ p: "50px", bgcolor: "#121231", minHeight: "100vh", color: "white" }}
    >
      <ThemeProvider theme={theme}>
        <Container component="main" maxWidth="xs">
          <CssBaseline />
          <Box
            sx={{
              mt: 8,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Avatar
              sx={{ m: 3, bgcolor: "#21213E", width: "50px", height: "50px" }}
            >
              <LockOutlinedIcon sx={{ color: "#F6C927" }} />
            </Avatar>
            <Typography component="h1" variant="h5">
              Sign up
            </Typography>
            <Box
              component="form"
              noValidate
              onSubmit={handleSubmit}
              sx={{ mt: 3 }}
            >
              <Grid container spacing={2}>
                {["firstName", "lastName"].map((field) => (
                  <Grid item xs={6} key={field}>
                    <TextField
                      autoComplete="off"
                      name={field}
                      required
                      fullWidth
                      id={field}
                      label={field === "firstName" ? "First Name" : "Last Name"}
                      autoFocus={field === "firstName"}
                      type="text"
                      inputProps={{
                        style: {
                          color: "white",
                        },
                      }}
                      sx={{
                        ...textFieldStyles,
                      }}
                    />
                  </Grid>
                ))}
                {["username", "email", "password", "verifyPassword"].map(
                  (field) => (
                    <Grid item xs={12} key={field}>
                      <TextField
                        autoComplete="off"
                        name={field}
                        required
                        fullWidth
                        id={field}
                        label={
                          field === "username"
                            ? "Username"
                            : field === "password"
                            ? "Password"
                            : field === "verifyPassword"
                            ? "Verify Password"
                            : "Email Address"
                        }
                        type={
                          field === "password" || field === "verifyPassword"
                            ? "password"
                            : "text"
                        }
                        inputProps={{
                          style: {
                            color: "white",
                          },
                        }}
                        sx={{
                          ...textFieldStyles,
                        }}
                      />
                    </Grid>
                  )
                )}
                <Grid item xs={12}>
                  <FormControlLabel
                    control={
                      <Checkbox
                        value="allowExtraEmails"
                        sx={{
                          color: "white",
                          "&.Mui-checked": {
                            color: "#F6C927",
                          },
                        }}
                      />
                    }
                    label="I want to receive inspiration, marketing promotions and updates via email."
                  />
                </Grid>
              </Grid>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{
                  ...buttonStyles,
                }}
              >
                Sign Up
              </Button>
              <Grid container justifyContent="flex-end">
                <Grid item>
                  <NavLink to="/signIn" style={{ color: "#F6C927" }}>
                    Already have an account? Sign in
                  </NavLink>
                </Grid>
              </Grid>
            </Box>
          </Box>
          <Typography
            variant="body2"
            align="center"
            sx={{ mt: 5, color: "white" }}
          >
            {"Copyright © "}
            <Link color="inherit" href="https://mui.com/">
              CodeClique
            </Link>{" "}
            {new Date().getFullYear()}
            {"."}
          </Typography>
        </Container>
      </ThemeProvider>
    </Box>
  );
}

const textFieldStyles = {
  "& .MuiOutlinedInput-notchedOutline": {
    borderColor: "white",
  },
  "& .MuiInputLabel-root": {
    color: "white",
  },
  "& .MuiInputLabel-root.Mui-focused": {
    color: "#F6C927",
  },
  "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
    borderColor: "#F6C927",
  },
  "& .MuiOutlinedInput-input": {
    color: "white",
  },
  "& .MuiOutlinedInput-input.Mui-focused": {
    color: "white",
  },
  "&:hover, &:hover .MuiInputLabel-root, &:hover .MuiOutlinedInput-notchedOutline": {
    borderColor: "#F6C927",
    color: "#F6C927",
  },
};



const buttonStyles = {
  mt: 3,
  mb: 2,
  backgroundColor: "#F6C927",
  border: "solid white 2px",
  "&:hover": {
    backgroundColor: "#21213E",
    borderColor: "#F6C927",

  },
  "&.Mui-focusVisible": {
    backgroundColor: "#21213E",
    borderColor: "#F6C927",
  },
};

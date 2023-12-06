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
import { NavLink, useNavigate } from "react-router-dom";
import { userSchema } from "../../validations/UserValidation";
import { Password } from "@mui/icons-material";

const theme = createTheme();

export default function SignUp() {

  const createUser = async (event) => {
    event.preventDefault();
    let formDtatValid = {
      firstName: event.target.firstName.value,
      lastName: event.target.lastName.value,
      username: event.target.username.value,
      email: event.target.email.value,
      password: event.target.password.value,
    }
    const isValid = await userSchema.isValid(formDtatValid);
  
    if(isValid && event.target.verifyPassword.value===event.target.password.value ){handleSubmit(formDtatValid)}
  }

  const navigeteSignIn = useNavigate();

  const handleSubmit = async (verifiedDataForm) => {
    console.log(verifiedDataForm);

    try {
      const response = await axios.post("https://infra-jerusalem-2-server.vercel.app/signup", {
        firstName: verifiedDataForm.firstName,
        lastName: verifiedDataForm.lastName,
        userName: verifiedDataForm.username,
        password: verifiedDataForm.password,
        email: verifiedDataForm.email,
      });

      if (response.status === 200){

        navigeteSignIn('/signIn')


      }

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
            <svg
              width="50px"
              height="50px"
              viewBox="0 0 87 101"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M44.2397 2.69504L43.5 2.27581L42.7603 2.69504L22.5328 14.16L22.5225 14.1659L22.5122 14.1719L2.46952 25.957L1.73663 26.3879L1.72987 27.2381L1.54505 50.4881L1.54495 50.5L1.54505 50.5119L1.72987 73.7619L1.73663 74.6121L2.46952 75.043L22.5122 86.8281L22.5225 86.8341L22.5328 86.84L42.7603 98.305L43.5 98.7242L44.2397 98.305L64.4671 86.84L64.4775 86.8341L64.4878 86.8281L84.5305 75.043L85.2634 74.6121L85.2701 73.7619L85.455 50.5119L85.455 50.5L85.455 50.4881L85.2701 27.2381L85.2634 26.3879L84.5305 25.957L64.4878 14.1719L64.4775 14.1659L64.4671 14.16L44.2397 2.69504Z"
                stroke="#F6C927"
                stroke-width="3"
              />
              <path
                d="M36.2897 60.414L22 54.0032V48.4682L36.2897 42.0573V47.3471L23.6422 52.742V49.7293L36.2897 55.1242V60.414Z"
                fill="#F6C927"
              />
              <path
                d="M36.8754 67L46.3827 34H51.3956L41.8883 67H36.8754Z"
                fill="#F6C927"
              />
              <path
                d="M51.7103 60.414V55.1242L64.3578 49.7293V52.742L51.7103 47.3471V42.0573L66 48.4682V54.0032L51.7103 60.414Z"
                fill="#F6C927"
              />
            </svg>
            <Typography component="h1" variant="h5">
              Sign up
            </Typography>
            <Box
              component="form"
              noValidate
              onSubmit={createUser}
              sx={{ mt: 3 }}
            >
              <Grid container spacing={2}>
                {["firstName", "lastName"].map((field) => (
                  <Grid item xs={6} key={field}>
                    <TextField
                      autoComplete=""
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
                        autoComplete=""
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
                  <NavLink to="/sign-in" style={{ color: "#F6C927" }}>
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

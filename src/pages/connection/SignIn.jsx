import React, { useState } from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import axios from 'axios';
import { NavLink } from 'react-router-dom';

const theme = createTheme();

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
    color: "white", // Set the text color to white
  },
  "& .MuiOutlinedInput-input.Mui-focused": {
    color: "white", // Set the focused text color to white
  },
  "&:hover": {
    "& .MuiOutlinedInput-notchedOutline": {
      borderColor: "#F6C927",
    },
    "& .MuiInputLabel-root": {
      color: "#F6C927",
    },
    "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
      borderColor: "#F6C927",
    },
  },
};


const buttonStyles = {
  mt: 3,
  mb: 2,
  backgroundColor: "#F6C927",
  border: "solid white 2px",
  "&:hover": {
    backgroundColor: "#21213E",
  },
  "&.Mui-focusVisible": {
    backgroundColor: "#21213E",
    borderColor: "#F6C927",
  },
};

const checkboxStyles = {
  color: "white",
  "&.Mui-checked": {
    color: "#F6C927",
  },
};

const rememberMeStyles = {
  color: "white",
  "&:hover": {
    color: "#F6C927",
  },
};

export default function SignIn() {
  const [token, setToken] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    try {
      const response = await axios.post("http://localhost:3000/signin", {
        email: data.get("email"),
        password: data.get("password"),
      });
      console.log(response);
      setToken(response.data.token);
      localStorage.setItem("token", response.data.token);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Box sx={{ p: "50px", bgcolor: "#121231", minHeight: "100vh", color: "white" }}>
      <ThemeProvider theme={theme}>
        <Container component="main" maxWidth="xs">
          <CssBaseline />
          <Box
            sx={{
              marginTop: 8,
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
              Sign In
            </Typography>
            <Box
              component="form"
              onSubmit={handleSubmit}
              noValidate
              sx={{ mt: 1 }}
            >
              <TextField
              
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="off"
                autoFocus
                sx={textFieldStyles}
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                sx={textFieldStyles}
              />
              <FormControlLabel
                control={<Checkbox value="remember"  sx={checkboxStyles} />}
                label={
                  <Typography variant="body2" sx={rememberMeStyles}>
                    Remember me
                  </Typography>
                }
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={buttonStyles}
              >
                Sign In
              </Button>
              <Grid container>
                <Grid item xs>
                  <NavLink href="#" variant="body2" style={{ color: "#F6C927" }}>
                    Forgot password?
                  </NavLink>
                </Grid>
                <Grid item>
                  <NavLink to="/signUp" style={{ color: "#F6C927" }}>
                    {"Don't have an account? Sign Up"}
                  </NavLink>
                </Grid>
              </Grid>
            </Box>
          </Box>
        </Container>
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
      </ThemeProvider>
    </Box>
  );
}

import React, { useState } from "react";
import axios from "axios";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { NavLink, useNavigate } from "react-router-dom";
import useUserEmail from "../../atom/emailAtom";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import Visibility from "@mui/icons-material/Visibility";
import IconButton from "@mui/material/IconButton";
import InputAdornment from "@mui/material/InputAdornment";
import useLoading from "../../atom/loading";


const isString = (value) =>
  value.length >= 1 && typeof value === "string" && isNaN(Number(value));
const isEmail = (value) =>
  /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value) &&
  value.indexOf("@") < value.lastIndexOf(".");
const isPassword = (value) => {
  return (
    /[a-z]/.test(value) &&
    /[A-Z]/.test(value) &&
    /\d/.test(value) &&
    /[!@#$%^&*(),.?":{}|<>]/.test(value) &&
    value.length >= 8
  );
};

const validateFirstName = (value) => isString(value);
const validateLastName = (value) => isString(value);
const validateUsername = (value) => isString(value);
const validateEmail = (value) => isEmail(value);
const validatePassword = (value) => isPassword(value);
const validateVerifyPassword = (value, password) => value === password;

const theme = createTheme();

export default function SignUp() {
  const navigateVerify = useNavigate();
  const [email, setEmail] = useUserEmail();
  const [loading, setLoading] = useLoading()


  const [firstName, setFirstName] = useState("");
  const [firstNameError, setFirstNameError] = useState("");
  const [isFirstNameValid, setIsFirstNameValid] = useState(true);

  const [lastName, setLastName] = useState("");
  const [lastNameError, setLastNameError] = useState("");
  const [isLastNameValid, setIsLastNameValid] = useState(true);

  const [username, setUsername] = useState("");
  const [usernameError, setUsernameError] = useState("");
  const [isUsernameValid, setIsUsernameValid] = useState(true);

  const [emailInput, setEmailInput] = useState("");
  const [emailError, setEmailError] = useState("");
  const [isEmailValid, setIsEmailValid] = useState(true);

  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [isPasswordValid, setIsPasswordValid] = useState(true);

  const [verifyPassword, setVerifyPassword] = useState("");
  const [verifyPasswordError, setVerifyPasswordError] = useState("");
  const [isVerifyPasswordValid, setIsVerifyPasswordValid] = useState(true);

  const [allowExtraEmails, setAllowExtraEmails] = useState(false);

  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  const [showVerifyPassword, setShowVerifyPassword] = useState(false);
  const handleClickShowVerifyPassword = () => setShowVerifyPassword((show) => !show);
  const handleMouseDownVerifyPassword = (event) => {
    event.preventDefault();
  };

  const handleFirstNameChange = (event) => {
    const value = event.target.value;
    setFirstName(value);
    setIsFirstNameValid(validateFirstName(value));
    setFirstNameError(validateFirstName(value) ? "" : "First name must be text only");
  };

  const handleLastNameChange = (event) => {
    const value = event.target.value;
    setLastName(value);
    setIsLastNameValid(validateLastName(value));
    setLastNameError(validateLastName(value) ? "" : "Last name must be text only");
  };

  const handleUsernameChange = (event) => {
    const value = event.target.value;
    setUsername(value);
    setIsUsernameValid(validateUsername(value));
    setUsernameError(validateUsername(value) ? "" : "Username must be text only");
  };

  const handleEmailChange = (event) => {
    const value = event.target.value;
    setEmailInput(value);
    setIsEmailValid(validateEmail(value));
    setEmailError(validateEmail(value) ? "" : "Invalid email address format");
  };

  const handlePasswordChange = (event) => {
    const value = event.target.value;
    setPassword(value);
    setIsPasswordValid(validatePassword(value));
    setPasswordError(validatePassword(value) ? "" : "Invalid password format");
  };

  const handleVerifyPasswordChange = (event) => {
    const value = event.target.value;
    setVerifyPassword(value);
    setIsVerifyPasswordValid(validateVerifyPassword(value, password));
    setVerifyPasswordError(
      validateVerifyPassword(value, password) ? "" : "Passwords do not match"
    );
  };

  const handleAllowExtraEmailsChange = (event) => {
    setAllowExtraEmails(event.target.checked);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsFirstNameValid(validateFirstName(firstName));
    setFirstNameError(
      validateFirstName(firstName) ? "" : "First name required"
    );
    setIsLastNameValid(validateLastName(lastName));
    setLastNameError(validateLastName(lastName) ? "" : "Last name required");
    setIsUsernameValid(validateUsername(username));
    setUsernameError(validateUsername(username) ? "" : "Username required");
    setIsEmailValid(validateEmail(emailInput));
    setEmailError(
      validateEmail(emailInput) ? "" : "Invalid email address format"
    );
    setIsPasswordValid(validatePassword(password));
    setPasswordError(
      validatePassword(password) ? "" : "Invalid password format"
    );
    setIsVerifyPasswordValid(validateVerifyPassword(verifyPassword, password));
    setVerifyPasswordError(
      validateVerifyPassword(verifyPassword, password)
        ? ""
        : "Passwords do not match"
    );
    const isValid =
      isFirstNameValid &&
      isLastNameValid &&
      isUsernameValid &&
      isEmailValid &&
      isPasswordValid &&
      isVerifyPasswordValid;

    if (!isValid) {
      return;
    }
    const formData = new FormData(event.currentTarget);

    try {
      setLoading(true)

      const response = await axios.post(
        "https://infra-jerusalem-2-server.vercel.app/signup",
        {
          firstName: formData.get("firstName"),
          lastName: formData.get("lastName"),
          userName: formData.get("username"),
          password: formData.get("password"),
          email: formData.get("email"),
        }
      );

      if (response.status === 200) {
        const emailVerificationResponse = await axios.post(
          "https://infra-jerusalem-2-server.vercel.app/sendemail",
          {
            email: formData.get("email"),
          }
        );

        if (emailVerificationResponse.status === 200) {
          setEmail(formData.get("email"));
          setLoading(false)
          navigateVerify("/verify");
        } else {
          console.error("Email verification request failed");
        }
      } else {
        console.log(response.status);
        console.log(response.data);
        console.error("Signup request failed");
      }
    } catch (error) {
      if (error.response.status === 500) {
        setEmailError(error.response.data.message);
        setIsEmailValid(false);
      }
      setLoading(false)
      console.error(error);
    }
  };

  return (
    <Box
      sx={{ p: "1px", bgcolor: "#121231", minHeight: "100vh", color: "white" }}
    >
      <ThemeProvider theme={theme}>
        <Container component="main" maxWidth="xs">
          <CssBaseline />
          <Box
            sx={{
              borderRadius: "10px",
              paddingTop: "25px",
              p: "20px",
              height: "820px",
              width: "100%",
              bgcolor: "#21213E",
              marginTop: 8,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Box sx={{ mb: "10px" }}>
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
                  strokeWidth="3"
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
            </Box>{" "}
            <Typography component="h1" variant="h5">
              Sign up
            </Typography>
            <Box
              component="form"
              noValidate
              onSubmit={handleSubmit}
              sx={{ mt: 3, width: "90%" }}
            >
              <TextField
                autoComplete=""
                name="firstName"
                required
                fullWidth
                id="firstName"
                label="First Name"
                autoFocus
                type="text"
                value={firstName}
                onChange={handleFirstNameChange}
                inputProps={{
                  style: {
                    color: "white",
                    textAlign: "left",

                  },
                }}
                sx={{
                  mt: "1",
                  ...(isFirstNameValid
                    ? textFieldStyles
                    : invalidTextFieldStyles),
                }}
              />
              <Box sx={{ color: "red", fontSize: "small", height: "28px" }}>
                {firstNameError}
              </Box>
              <TextField
                autoComplete=""
                name="lastName"
                required
                fullWidth
                id="lastName"
                label="Last Name"
                type="text"
                value={lastName}
                onChange={handleLastNameChange}
                inputProps={{
                  style: {
                    color: "white",
                    textAlign: "left",

                  },
                }}
                sx={{
                  ...(isLastNameValid
                    ? textFieldStyles
                    : invalidTextFieldStyles),
                }}
              />
              <Box sx={{ color: "red", fontSize: "small", height: "28px" }}>
                {lastNameError}
              </Box>
              <TextField
                autoComplete=""
                name="username"
                required
                fullWidth
                id="username"
                label="Username"
                type="text"
                value={username}
                onChange={handleUsernameChange}
                inputProps={{
                  style: {
                    color: "white",
                    textAlign: "left",

                  },
                }}
                sx={{
                  ...(isUsernameValid
                    ? textFieldStyles
                    : invalidTextFieldStyles),
                }}
              />
              <Box sx={{ color: "red", fontSize: "small", height: "28px" }}>
                {usernameError}
              </Box>
              <TextField
                autoComplete=""
                name="email"
                required
                fullWidth
                id="email"
                label="Email Address"
                type="text"
                value={emailInput}
                onChange={handleEmailChange}
                inputProps={{
                  style: {
                    color: "white",
                    textAlign: "left",

                  },
                }}
                sx={{
                  ...(isEmailValid ? textFieldStyles : invalidTextFieldStyles),
                }}
              />
              <Box sx={{ color: "red", fontSize: "small", height: "28px" }}>
                {emailError}
              </Box>
              <TextField
                autoComplete=""
                name="password"
                required
                fullWidth
                id="password"
                label="Password"
                type={showPassword ? "text" : "password"}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
                        edge="end"
                        color="white"
                      >
                        {showPassword ? (
                          <Visibility sx={{ color: "white" }} />
                        ) : (
                          <VisibilityOff sx={{ color: "white" }} />
                        )}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
                value={password}
                onChange={handlePasswordChange}
                inputProps={{
                  style: {
                    color: "white",
                    textAlign: "left",

                  },
                }}
                sx={{
                  ...(isPasswordValid
                    ? textFieldStyles
                    : invalidTextFieldStyles),
                }}
              />
              <Box sx={{ color: "red", fontSize: "small", height: "28px" }}>
                {passwordError}
              </Box>
              <TextField
                autoComplete=""
                name="verifyPassword"
                required
                fullWidth
                id="verifyPassword"
                label="Verify Password"
                type={showVerifyPassword ? "text" : "password"}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowVerifyPassword}
                        onMouseDown={handleMouseDownVerifyPassword}
                        edge="end"
                        color="white"
                      >
                        {showVerifyPassword ? (
                          <Visibility sx={{ color: "white" }} />
                        ) : (
                          <VisibilityOff sx={{ color: "white" }} />
                        )}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
                value={verifyPassword}
                onChange={handleVerifyPasswordChange}
                inputProps={{
                  style: {
                    color: "white",
                    textAlign: "left",

                  },
                }}
                sx={{
                  mt: "1",
                  ...(isVerifyPasswordValid
                    ? textFieldStyles
                    : invalidTextFieldStyles),
                }}
              />
              <Box sx={{ color: "red", fontSize: "small", height: "28px" }}>
                {verifyPasswordError}
              </Box>
              <Grid item xs={12}>
                <FormControlLabel
                  control={
                    <Checkbox
                      value="allowExtraEmails"
                      checked={allowExtraEmails}
                      onChange={handleAllowExtraEmailsChange}
                      sx={{
                        color: "white",
                        "&.Mui-checked": {
                          color: "#F6C927",
                        },
                      }}
                    />
                  }
                  label="I agree to receive marketing emails and updates.

                  "
                />
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
            sx={{ mt: 5, color: "#ffffff63", mb: "50px" }}
          >
            {"Copyright © "}
            <Link color="inherit" href="https://infra-jerusalem-2.vercel.app/">
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
  "&:hover, &:hover .MuiInputLabel-root, &:hover .MuiOutlinedInput-notchedOutline":
    {
      borderColor: "#F6C927 !important",
      color: "#F6C927",
    },
  "& input:-webkit-autofill": {
    WebkitBoxShadow: "0 0 0 1000px #21213E inset",
    WebkitTextFillColor: "white !important",
  },
};

const invalidTextFieldStyles = {
  "& .MuiOutlinedInput-notchedOutline": {
    borderColor: "red",
  },
  "& .MuiInputLabel-root": {
    color: "red",
  },
  "& .MuiInputLabel-root.Mui-focused": {
    color: "red",
  },
  "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
    borderColor: "red",
  },
  "& .MuiOutlinedInput-input": {
    color: "white",
  },
  "& .MuiOutlinedInput-input.Mui-focused": {
    color: "white",
  },
  "&:hover, &:hover .MuiInputLabel-root, &:hover .MuiOutlinedInput-notchedOutline":
    {
      borderColor: "red !important",
      color: "red",
    },
  "& input:-webkit-autofill": {
    WebkitBoxShadow: "0 0 0 1000px #21213E inset",
    WebkitTextFillColor: "white !important",
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

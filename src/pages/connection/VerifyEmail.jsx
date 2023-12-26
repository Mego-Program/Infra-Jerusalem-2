import React, { useState } from "react";
import axios from "axios";
import Grid from "@mui/system/Unstable_Grid/Grid";
import { NavLink } from "react-router-dom";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import useUserEmail from "../../atom/emailAtom";

const theme = createTheme();

const isLength = (value) => value.length === 5;
const validateCode = (value) => isLength(value);

export default function Verify() {
  const navigateVerify = useNavigate();
  const [code, setCode] = useState("");
  const [email, setEmail] = useUserEmail();
  const [isCodeValid, setIsCodeValid] = useState(true);
  const [codeError, setCodeError] = useState("");

  const handleCodeChange = (event) => {
    const value = event.target.value;
    setCode(value);
    setIsCodeValid(validateCode(value));
    setCodeError(validateCode(value) ? "" : "Code must have 5 digits");
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      console.log(email);

      const response = await axios.post(
        "https://infra-jerusalem-2-server.vercel.app/verifyemailcode",
        { code: code, email: email }
      );

      if (response.status === 200) {
        const token = response.data.token;
        localStorage.setItem("token", response.data.token);
        navigateVerify("/new-password");
      }
    } catch (error) {
      if (error.response.status === 401 || error.response.status === 500) {
        setIsCodeValid(false);
        setCodeError(error.response.data);
      }
      console.error(error);
    }
  };

  return (
    <Box
      sx={{ p: "50px", bgcolor: "#121231", minHeight: "100vh", color: "white" }}
    >
      <ThemeProvider theme={theme}>
        <Container component="main" maxWidth="xs">
          <Box
            sx={{
              borderRadius: "10px",
              paddingTop: "25px",
              p: "20px",
              height: "350px",
              width: "100%",
              bgcolor: "#21213E",
              mt: 8,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Box sx={{ margin: "20px" }}>
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
            </Box>
            <Typography component="h1" variant="h5">
              Verify Code
            </Typography>
            <Box
              component="form"
              noValidate
              onSubmit={handleSubmit}
              sx={{ mt: 3, width: "80%" }}
            >
              <TextField
                autoComplete=""
                name="code"
                required
                fullWidth
                id="code"
                label="Enter code from Email"
                type="text"
                value={code}
                onChange={handleCodeChange}
                inputProps={{
                  style: {
                    color: "white",
                  },
                }}
                sx={{
                  mt: "1",
                  ...(isCodeValid ? textFieldStyles : invalidTextFieldStyles),
                }}
              />
              <Box sx={{ color: "red", fontSize: "small", height: "28px" }}>
                {codeError}
              </Box>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{
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
                }}
              >
                Send
              </Button>
            </Box>
          </Box>
        </Container>
      </ThemeProvider>
    </Box>
  );
}
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

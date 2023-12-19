import React from "react";
import ReactDOM from "react-dom/client";
import CssBaseline from '@mui/material/CssBaseline';
import App from "./App.jsx";
import "./index.css";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { GoogleOAuthProvider } from '@react-oauth/google';
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

// Creating a custom theme for MUI components
const theme = createTheme({
  palette: {
    primary: {
      main: "#21213E",
    },
    secondary: {
      main: "#0A0A1B",
    },
    background: {
      main: "#21213E",
    },
  },
});

// Rendering the main App component in a root element
ReactDOM.createRoot(document.getElementById("R")).render(
  <GoogleOAuthProvider clientId="1051094080273-ud1o37boptetpriu373ocur2hkv335ho.apps.googleusercontent.com">
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <App />
    </ThemeProvider>
  </React.StrictMode>
  </GoogleOAuthProvider>
);

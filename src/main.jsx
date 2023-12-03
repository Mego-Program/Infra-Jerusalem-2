import React from "react";
import ReactDOM from "react-dom/client";
import CssBaseline from '@mui/material/CssBaseline';
import App from "./App.jsx";
import "./index.css";
import { ThemeProvider, createTheme } from "@mui/material/styles";

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
  <React.StrictMode>
    {/* Providing the custom theme to the entire app */}
    <ThemeProvider theme={theme}>
      {/* CssBaseline kickstarts an elegant, consistent, and simple baseline to build upon. */}
      <CssBaseline />
      {/* Main App component */}
      <App />
    </ThemeProvider>
  </React.StrictMode>
);

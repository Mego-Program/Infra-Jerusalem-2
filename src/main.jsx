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
const theme = createTheme({
  palette: {
    primary: {
      main: "#F6C927",
    },
    secondary: {
      main: "#0A0A1B",
    },
    background: {
      main: "#21213E",
    },

  },
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
      <CssBaseline />
      <App />
    </ThemeProvider>
  </React.StrictMode>
);

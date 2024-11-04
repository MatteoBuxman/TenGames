import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { ThemeProvider, createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#03030B",
    },
    secondary: {
      main: "#0f1032",
    },
    text: {
      main: "#708090",
      selected: "#5348A9",
    },
    button: {
      main: "#5348A9",
    },
    success: {
      main: "#2f7c31",
    },
    gold:{
      main : "#FFD700"
    }
  },
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ThemeProvider theme={theme}>
    <App />
  </ThemeProvider>
);

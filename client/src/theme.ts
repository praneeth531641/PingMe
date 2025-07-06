// src/theme.ts
import { createTheme } from "@mui/material/styles";

export const getTheme = (mode: "light" | "dark") =>
  createTheme({
    palette: {
      mode,
      ...(mode === "light"
        ? {
            background: {
              default: "#f4f6f8",
              paper: "#fff",
            },
            primary: { main: "#1976d2" },
          }
        : {
            background: {
              default: "#121212",
              paper: "#1e1e1e",
            },
            primary: { main: "#90caf9" },
          }),
    },
    typography: {
      fontFamily: `"Segoe UI", Roboto, "Helvetica Neue", sans-serif`,
    },
  });

import React, { useMemo, useState } from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { ThemeProvider, CssBaseline } from "@mui/material";
import { getTheme } from "./theme";

// eslint-disable-next-line react-refresh/only-export-components
const Main = () => {
  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const [mode,setMode] = useState<"light" | "dark">(prefersDark ? "dark" : "light");
  const theme = useMemo(() => getTheme(mode), [mode]);

 

  return (
    <ThemeProvider theme={theme}>
  <CssBaseline />
  <App mode={mode} toggleTheme={() => setMode(mode === "light" ? "dark" : "light")} />
</ThemeProvider>

  );
};

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Main />
  </React.StrictMode>
);

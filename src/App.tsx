import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { ThemeProvider } from "@emotion/react";
import { darkTheme, lightTheme } from "./theme/theme";
import { Button, Paper, Stack } from "@mui/material";

function App() {
  const theme = true;
  return (
    <ThemeProvider theme={theme ? darkTheme : lightTheme}>
      <Paper sx={{ height: "100vh", borderRadius: 0 }}>
        <Stack direction={"row"} gap={2}>
          <Button variant="contained" color="success">
            contained
          </Button>
          <Button variant="outlined">outlined</Button>
          <Button variant="text">text</Button>
        </Stack>
      </Paper>
    </ThemeProvider>
  );
}

export default App;

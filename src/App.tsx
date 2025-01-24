import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { ThemeProvider } from "@emotion/react";
import { darkTheme, lightTheme } from "./theme/theme";
import { Button, Paper, Stack, TextField } from "@mui/material";

function App() {
  const theme = true;
  return (
    <ThemeProvider theme={!theme ? darkTheme : lightTheme}>
      <Paper sx={{ height: "100vh", borderRadius: 0, padding: "10px" }}>
        <Stack direction={"row"} gap={2}>
          <Button variant="contained" color="primary">
            contained
          </Button>
          <Button variant="outlined">outlined</Button>
          <Button variant="text">text</Button>
        </Stack>
        <Stack direction={"row"} gap={2}>
          <TextField label="Default title 3" variant="standard" size="small" />
          <TextField label="Default title 1" variant="filled" size="small" />
          <TextField label="Default title 2" variant="outlined" size="small" />
        </Stack>
      </Paper>
    </ThemeProvider>
  );
}

export default App;

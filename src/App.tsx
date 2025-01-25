// import { useState } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
import "./App.css";
import { ThemeProvider } from "@emotion/react";
import { darkTheme, lightTheme } from "./theme/theme";
import { Paper } from "@mui/material";
import AppRouter from "./routes/AppRoutes";

function App() {
  const theme = true;
  return (
    <ThemeProvider theme={theme ? darkTheme : lightTheme}>
      <Paper sx={{ height: "100vh", borderRadius: 0 }}>
        {/* <Stack direction={"row"} gap={2}>
          <Button variant="contained" color="primary">
            contained
          </Button>
          <Button variant="outlined">outlined</Button>
          <Button variant="text">text</Button>
        </Stack>
        <Stac direction={"row"} gap={2}>
          <TextField label="Default title 1" variant="filled" size="small" />
          <TextField label="Default title 2" variant="outlined" size="small" />
          <TextField label="Default title 3" variant="standard" size="small" />
        </Stac'k> */}
        <AppRouter />
      </Paper>
    </ThemeProvider>
  );
}

export default App;

// const typography = {
//   fontFamily: "'Inter', 'Roboto', 'Helvetica', 'Arial', sans-serif",
//   body1: { fontSize: "1rem", fontWeight: 400 },
//   body2: { fontSize: "0.875rem", fontWeight: 400 },
//   h1: { fontSize: "2.25rem", fontWeight: 700 },
//   h2: { fontSize: "2rem", fontWeight: 600 },
//   h3: { fontSize: "1.75rem", fontWeight: 500 },
// };

import { createTheme } from "@mui/material/styles";
import { Components, Theme } from "@mui/material/styles";

// Minimal color palette for light mode
const minimalColorsLight = {
  primary: "#333333", // Dark Gray
  secondary: "#757575", // Medium Gray
  text: "#212121", // Almost Black
  background: "#ffffff", // White
  surface: "#f9f9f9", // Very Light Gray
  error: "#e53935", // Soft Red
  success: "#43a047", // Soft Green
  neutral: "#9e9e9e", // Light Gray
};

// Minimal color palette for dark mode
const minimalColorsDark = {
  primary: "#ffffff", // White
  secondary: "#bdbdbd", // Light Gray
  text: "#e0e0e0", // Light Text
  background: "#121212", // Dark Background
  surface: "#1d1d1d", // Slightly Lighter Surface
  error: "#cf6679", // Soft Red for Dark Mode
  success: "#66bb6a", // Soft Green for Dark Mode
  neutral: "#757575", // Medium Gray
};

// Shared typography settings
const typography = {
  fontFamily: "'Inter', 'Roboto', 'Helvetica', 'Arial', sans-serif",
  body1: { fontSize: "1rem", fontWeight: 400 },
  body2: { fontSize: "0.875rem", fontWeight: 400 },
  h1: { fontSize: "2.25rem", fontWeight: 700 },
  h2: { fontSize: "2rem", fontWeight: 600 },
  h3: { fontSize: "1.75rem", fontWeight: 500 },
};

const modernComponentOverrides = (
  colors: typeof minimalColorsLight | typeof minimalColorsDark
): Components<Theme> => ({
  MuiButton: {
    styleOverrides: {
      root: {
        textTransform: "none", // Keep text as is (no uppercase)
        borderRadius: 5,
        fontWeight: "normal",
        transition: "all 0.3s ease",
        boxShadow: "none",
        "&:hover": {
          backgroundColor: colors.primary,
          color: colors.background,
          boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)",
        },
      },
    },
  },
  MuiPaper: {
    styleOverrides: {
      root: {
        borderRadius: 12,
        boxShadow: "0px 4px 16px rgba(0, 0, 0, 0.1)",
      },
    },
  },
  MuiTextField: {
    styleOverrides: {
      root: {
        margin: "12px 0px",
        borderColor: colors.neutral, // Subtle border
        "& .MuiInputLabel-root": {
          color: colors.secondary,
        },
        "& .MuiInputLabel-root.Mui-focused": {
          color: colors.primary,
        },
      },
    },
  },
  MuiAutocomplete: {
    styleOverrides: {
      root: {
        margin: "20px 0px",
        borderRadius: 5,
      },
    },
  },
  MuiFormControl: {
    styleOverrides: {
      root: {
        margin: "12px 0px",
      },
    },
  },
  MuiDialog: {
    styleOverrides: {
      paper: {
        borderRadius: 12,
        boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.2)",
      },
    },
  },
});

// Light mode theme (minimal and typographic focus)
export const lightTheme = createTheme({
  palette: {
    mode: "light",
    primary: { main: minimalColorsLight.primary },
    secondary: { main: minimalColorsLight.secondary },
    text: { primary: minimalColorsLight.text },
    background: {
      default: minimalColorsLight.background,
      paper: minimalColorsLight.surface,
    },
    error: { main: minimalColorsLight.error },
    success: { main: minimalColorsLight.success },
  },
  typography,
  components: modernComponentOverrides(minimalColorsLight),
});

// Dark mode theme (minimal and typographic focus)
export const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: { main: minimalColorsDark.primary },
    secondary: { main: minimalColorsDark.secondary },
    text: { primary: minimalColorsDark.text },
    background: {
      default: minimalColorsDark.background,
      paper: minimalColorsDark.surface,
    },
    error: { main: minimalColorsDark.error },
    success: { main: minimalColorsDark.success },
  },
  typography,
  components: modernComponentOverrides(minimalColorsDark),
});

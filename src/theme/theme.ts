import { createTheme } from "@mui/material/styles";
import { Components, Theme } from "@mui/material/styles";

// Light mode color conventions
const lightColors = {
  primary: "#0F172A", // Deep navy for modern contrast
  secondary: "#64748B", // Subtle gray-blue
  text: "#1E293B", // Strong dark gray
  background: "#F8FAFC", // Soft off-white
  surface: "#FFFFFF", // Pure white
  error: "#EF4444", // Bold red
  success: "#22C55E", // Bright green
  neutral: "#E2E8F0", // Soft gray for borders
};

// Dark mode color conventions
const darkColors = {
  primary: "#38BDF8", // Vivid cyan-blue
  secondary: "#94A3B8", // Muted gray-blue
  text: "#F1F5F9", // Light gray
  background: "#0F172A", // Deep navy
  surface: "#1E293B", // Dark slate gray
  error: "#F87171", // Warm red
  success: "#4ADE80", // Bright green
  neutral: "#334155", // Darker gray for borders
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
  colors: typeof lightColors | typeof darkColors
): Components<Theme> => ({
  MuiButton: {
    styleOverrides: {
      root: {
        textTransform: "none",
        borderRadius: 12,
        fontWeight: 600,
        fontSize: "0.875rem",
        padding: "8px 16px",
        transition: "all 0.3s ease",
        boxShadow: "none",
        "&:hover": {
          backgroundColor: colors.primary,
          color: "#ffffff",
          boxShadow: `0px 4px 12px rgba(0, 0, 0, 0.1)`,
        },
      },
    },
  },
  MuiPaper: {
    styleOverrides: {
      root: {
        borderRadius: 16,
        boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.05)",
      },
    },
  },
  MuiTextField: {
    styleOverrides: {
      root: {
        margin: "12px 0px",
        borderRadius: 8,
      },
    },
  },
  MuiAppBar: {
    styleOverrides: {
      root: {
        backgroundColor: colors.surface,
        color: colors.text,
        boxShadow: "none",
        borderBottom: `1px solid ${colors.neutral}`,
      },
    },
  },
  MuiAutocomplete: {
    styleOverrides: {
      root: {
        margin: "20px 0px",
        borderRadius: 8,
        boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.05)",
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
});

// Light mode theme
export const lightTheme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: lightColors.primary,
    },
    secondary: {
      main: lightColors.secondary,
    },
    text: {
      primary: lightColors.text,
      secondary: lightColors.neutral,
    },
    background: {
      default: lightColors.background,
      paper: lightColors.surface,
    },
    error: {
      main: lightColors.error,
    },
    success: {
      main: lightColors.success,
    },
  },
  typography,
  components: modernComponentOverrides(lightColors),
});

// Dark mode theme
export const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: darkColors.primary,
    },
    secondary: {
      main: darkColors.secondary,
    },
    text: {
      primary: darkColors.text,
      secondary: darkColors.neutral,
    },
    background: {
      default: darkColors.background,
      paper: darkColors.surface,
    },
    error: {
      main: darkColors.error,
    },
    success: {
      main: darkColors.success,
    },
  },
  typography,
  components: modernComponentOverrides(darkColors),
});

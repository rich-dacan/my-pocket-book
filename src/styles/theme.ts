import { extendTheme } from "native-base";

export const THEME = extendTheme({
  colors: {
    // Add new color
    primary: {
      50: "#E3F2FD",
      100: "#BBDEFB",
      200: "#90CAF9",
      300: "#64B5F6",
      400: "#42A5F5",
      500: "#2196F3",
      600: "#1E88E5",
      700: "#1976D2",
      800: "#1565C0",
      900: "#0D47A1",
    },
    secondary: {
      50: "#F3E5F5",
      100: "#E1BEE7",
      200: "#CE93D8",
      300: "#BA68C8",
      400: "#AB47BC",
      500: "#9C27B0",
      600: "#8E24AA",
      700: "#7B1FA2",
      800: "#6A1B9A",
      900: "#4A148C",
    },
    yellow: {
      400: "#FFCA28",
      500: "#FFCF52",
      600: "#FFC107",
      700: "#FFB300",
    },
    green: {
      400: "#66BB6A",
      500: "#4CAF50",
      600: "#43A047",
      700: "#388E3C",
    },
    red: {
      400: "#EF5350",
      500: "#F44336",
      600: "#E53935",
      700: "#D32F2F",
    },
    gray: {
      300: "#e1e1e6",
      400: "#c4c4cc",
      500: "#7c7c8a",
      600: "#323238",
      700: "#282828",
      800: "#121214",
    },
    white: "#fff",
    black: "#000",
  },
  fonts: {
    // Changing default font
    heading: "Roboto_700Bold",
    body: "Roboto_400Regular",
  },
  // fontSizes: {
  //   // Changing default sizes
  //   xs: "0.75rem",
  //   sm: "0.875rem",
  //   md: "1rem",
  //   lg: "1.25rem",
  //   xl: "1.5rem",
  //   "2xl": "1.875rem",
  //   "3xl": "2.25rem",
  //   "4xl": "3rem",
  //   "5xl": "3.75rem",
  // },
  // sizes: {
  //   14: "3.5rem",
  // },
  config: {
    // Changing initialColorMode to 'dark'
    initialColorMode: "dark",
  },
});

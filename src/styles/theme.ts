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
    // Redefine only one shade of blue
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
      400: "#BDBDBD",
      500: "#9E9E9E",
      600: "#757575",
      700: "#616161",
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

import { createTheme } from "@shopify/restyle";
import { StatusBarStyle } from "react-native";

const p = {
  white: "white",
  black: "black",
  red: "red",
  blue: "blue",
  yellow: "yellow",
  paper00: "#ffffff",
  paper10: "#f5f5f4",
  paper20: "#e6e6e6",
  paper100: "#aeaeae",
  paper300: "#767577",
  paper900: "#202020",
  blue70: "#2185d0",
  navy20: "#171a21",
  navy900: "#b9babc",
};

const theme = createTheme({
  colors: {
    white: p.white,
    black: p.black,
  },
  spacing: {},
  breakpoints: {},
});

export default theme;

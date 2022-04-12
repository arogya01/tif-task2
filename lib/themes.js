import { extendTheme, LightMode } from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";
const light = "#F8F9FB";
const dark = "#f0f0f0";

const theme = extendTheme({
  fonts: {
    body: "Hanuman, serif",
    heading: "Hanuman , serif",
  },
  bg: {
    body: "#e5e5e5",
  },
  colors: {
    primary: {
      50: "#fcfce6",
      100: "#f5f7b8",
      200: "#f2f4a1",
      300: "#eff18a",
      400: "#ecee74",
      500: "#E6E946",
      600: "#dee11b",
      700: "#c7ca18",
      800: "#b1b415",
      900: "#848610",
    },
  },
  config: {
    intialColorMode: "light",
    useSystemColorMode: false,
  },
  styles: {
    global: (props) => ({
      body: {
        bg: mode(light, dark)(props),
      },
    }),
  },
});

export default theme;

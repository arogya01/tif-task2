import { extendTheme, LightMode } from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";
const light  = "#F8F9FB";
const dark = "#f0f0f0";

const theme = extendTheme({
  fonts: {
    body: "Sora , sans-serif",
  },
  bg: {
    body: "#e5e5e5",
  },
  config: {
    intialColorMode: "light",
    useSystemColorMode: false,
  },
  styles: {
    global: (props) => ({
      body: {
        bg: mode(light, dark)(props)
      }
    })
  }
});

export default theme;

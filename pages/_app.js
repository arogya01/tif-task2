import "../styles/globals.css";
import { ChakraProvider } from "@chakra-ui/react";
import theme from "../lib/themes";
import CurrentTab from "../components/providers/CurrentTabProvider";
import { AnimatePresence , LazyMotion , domAnimation} from "framer-motion";

function MyApp({ Component, pageProps, router }) {
  const url = `https://wallis.dev${router.route}`;

  return (
    <ChakraProvider theme={theme}>
      <CurrentTab>
        <AnimatePresence
          exitBeforeEnter
          initial="false"
          onExitComplete={() => window.scrollTo(0, 0)}
        >
          <Component {...pageProps} key={url} canonical={url} />
        </AnimatePresence>
      </CurrentTab>
    </ChakraProvider>
  );
}

export default MyApp;

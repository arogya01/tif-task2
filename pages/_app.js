import '../styles/globals.css'
import {ChakraProvider} from "@chakra-ui/react";
import theme from '../lib/themes';
import CurrentTab from '../components/providers/CurrentTabProvider';
import {AnimatePresence} from "framer-motion";

function MyApp({ Component, pageProps }) {

  return (
    <ChakraProvider theme={theme}>
    <CurrentTab>
    <AnimatePresence
        exitBeforeEnter
        intial={false}
        onExitComplete={() => window.scrollTo(0, 0)}
      >
    <Component {...pageProps} />
    </AnimatePresence>
    </CurrentTab>
    </ChakraProvider>
  )
}

export default MyApp

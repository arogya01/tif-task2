import '../styles/globals.css'
import {ChakraProvider} from "@chakra-ui/react";
import theme from '../lib/themes';
import CurrentTab from '../components/providers/CurrentTabProvider';

function MyApp({ Component, pageProps }) {

  return (
    <ChakraProvider theme={theme}>
    <CurrentTab>
    <Component {...pageProps} />
    </CurrentTab>
    </ChakraProvider>
  )
}

export default MyApp

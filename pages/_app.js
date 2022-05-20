import { ChakraProvider, extendTheme } from '@chakra-ui/react'
import '../styles/globals.css'

const theme = extendTheme({
  colors: {
    custom: {
      green: "#6CAC9C",
      red: "#E36B77",
      blue: "#5874DC",
      darkblue: "#384D78",
      black: "#262533",
      white: "#F0F0F0"
    }
  },
  breakpoints: {
    // phone
    ph: "300px",
    // desktop
    ds: "1200px",
  }
})

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  )
}

export default MyApp

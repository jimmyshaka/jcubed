import { extendTheme } from '@chakra-ui/react'

const theme = extendTheme({
  components: {},
  config: {
    initialColorMode: 'dark',
  },
  styles: {
    global: {
      'html, body': {
        height: '100%',
        backgroundColor: '#322659',
      },
      a: {
        textDecoration: 'none',
      },
    },
  },
})

export default theme

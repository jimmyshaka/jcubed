import { Box, Link } from '@chakra-ui/react'

export default function Card({ children, ...rest }) {
  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      backgroundColor="purple.500"
      borderRadius="8px"
      borderColor="cyan.300"
      borderWidth={4}
      color="cyan.300"
      height="7em"
      width="12em"
      padding="0.25em"
      fontSize="2xl"
      _hover={{ backgroundColor: 'purple.400' }}
      as={Link}
      {...rest}
    >
      {children}
    </Box>
  )
}

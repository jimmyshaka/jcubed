import { Box, Link, useBreakpointValue } from '@chakra-ui/react'

export default function Card({ children, ...rest }) {
  const heightVariant = useBreakpointValue({ base: '8ch', lg: '14ch' })
  console.log('heighVariant:', heightVariant)

  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      backgroundColor="purple.500"
      borderRadius="8px"
      borderColor="cyan.300"
      borderWidth={2}
      boxShadow="2xl"
      color="cyan.50"
      height={heightVariant}
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

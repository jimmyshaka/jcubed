import { Box, Link } from '@chakra-ui/react';

export default function Card({ children, ...rest }) {
  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      backgroundColor="blue.400"
      borderRadius="8px"
      color="blue.50"
      height="6em"
      width="12em"
      fontSize="2xl"
      as={Link}
      {...rest}
    >
      {children}
    </Box>
  );
}

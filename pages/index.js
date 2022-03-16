import Head from 'next/head';
import Image from 'next/image';
import { Center, Heading, Box, Stack } from '@chakra-ui/react';

import Card from '../src/components/Card';

export default function Home() {
  return (
    <Center marginTop="2em" marginBottom="2em" flexDirection="column">
      <Head>
        <title>Welcome to the Big Poot</title>
      </Head>

      <Box as="main" marginTop="1em">
        <Heading as="h1" size="3xl">
          Gender Reveal Party
        </Heading>
        <Stack>
          <Card>Vote</Card>
          <Card>Check Votes</Card>
        </Stack>
      </Box>
    </Center>
  );
}

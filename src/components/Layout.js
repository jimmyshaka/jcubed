import { Center, Heading, Box } from '@chakra-ui/react'
import Head from 'next/head'

export default function Layout({ children, title }) {
  return (
    <>
      <Center flexDirection="column" margin="1.5em">
        <Head>
          <title>{title}</title>
        </Head>
        <Heading as="h1" size="3xl">
          {title}
        </Heading>
        <Center as="main" marginTop="1em" flexDirection="column">
          {children}
        </Center>
      </Center>
    </>
  )
}

import Head from 'next/head'
import Image from 'next/image'
import { Stack, Text } from '@chakra-ui/react'

import { Card, Layout } from '../src/components'

export default function Home() {
  return (
    <Layout title="Walsh ♀️♂️ Party">
      <Text fontSize="md" textAlign="center">
        {' '}
        There are old <b>folklore tales</b> that help predict traits about your
        baby. Please select from the cards below if you would like to hear about
        Mom&apos;s symptoms, guess the gender, or see how friends and family
        voted
      </Text>
      <Stack marginTop="2em" spacing={8}>
        <Card href="/mom">Mom&apos;s Symptoms</Card>
        <Card href="/vote">Guess Gender⁉️</Card>
        <Card href="/results">See Results 🥳</Card>
      </Stack>
    </Layout>
  )
}

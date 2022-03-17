import { Stack, Text } from '@chakra-ui/react'

import { Card, Layout } from '../src/components'

export default function Home() {
  return (
    <Layout title="Walsh ♀️♂️ Party">
      <Text fontSize="md" textAlign="center">
        There are old <b>folklore tales</b> that help predict traits about your
        baby. Check Mom&apos;s symptoms using the cards below then guess the sex of the Walsh baby. Or check in and see how friends & family
        voted below.
      </Text>
      <Stack marginTop="2em" spacing={8}>
        <Card href="/mom">Mom&apos;s Symptoms</Card>
        <Card href="/vote">Guess Gender⁉️</Card>
        <Card href="/results">See Results 🥳</Card>
      </Stack>
    </Layout>
  )
}

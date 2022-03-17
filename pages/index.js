import Head from 'next/head'
import Image from 'next/image'
import { Stack } from '@chakra-ui/react'

import { Card, Layout } from '../src/components'

export default function Home() {
  return (
    <Layout title="Walsh ♀️♂️ Party">
      <Stack marginTop="2em" spacing={8}>
        <Card href="/vote">Guess Gender⁉️</Card>
        <Card href="/results">See Results 🥳</Card>
      </Stack>
    </Layout>
  )
}

import Head from 'next/head'
import Image from 'next/image'
import { Center, Heading, Box, Stack } from '@chakra-ui/react'

import { Card, Layout } from '../src/components'

export default function Home() {
  return (
    <Layout title="Gender Reveal Party">
      <Stack marginTop="2em" spacing={8}>
        <Card href="/voter">Vote</Card>
        <Card>Check Votes</Card>
      </Stack>
    </Layout>
  )
}

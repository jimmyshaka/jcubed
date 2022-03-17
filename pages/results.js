import { Box, Grid, GridItem, Heading, Text, useBreakpointValue } from '@chakra-ui/react'
import useSWR from 'swr'
import { useEffect, useState } from 'react'

import { Layout } from '../src/components'
import { fetcher } from '../src/utils/api'

export default function Home() {
  const { data: voteData } = useSWR(`api/votes`, fetcher)
  const [votes, setVotes] = useState([])
  const gridColumVariant = useBreakpointValue({ base: 'repeat(1, 1fr)', md: 'repeat(2, 1fr)' });

  console.log('gridColumVariant:', gridColumVariant)

  useEffect(() => {
    if (voteData) {
      setVotes(voteData)
    }
  }, [voteData])

  const girlVotes = votes.filter((r) => r.gender === 'girl') || []
  const boyVotes = votes.filter((r) => r.gender === 'boy') || []

  const voteRenderer = (vote, type) => {
    const listItemStyles = {
      backgroundColor: type == 'girl' ? 'purple.200' : 'cyan.600',
      borderRadius: '8px',
      padding: '0.25em',
      margin: '0.5em',
      color: type === 'girl' ? 'purple.800' : 'cyan.800',
      minHeight: '10ch',
      minWidth: '20ch'
    }
    const messageStyles = {
      backgroundColor: type === 'girl' ? 'purple.400' : 'cyan.300',
      borderRadius: '4px',
      maxWidth: 'fit-content',
      minWidth: '100%',
      minHeight: '48px',
      padding: '4px'
    }

    return (
      <GridItem key={vote.id} {...listItemStyles}>
        <Text fontSize="xl" color={type === 'girl' ? 'purple.600' : 'cyan.100'}>
          {type === 'boy' ? '♂️' : '♀️'}&nbsp;{vote.name}
        </Text>
        <Box {...messageStyles}>{vote.messageToParents}</Box>
      </GridItem>
    )
  }

  return (
    <Layout title="👶 🍼 Votes" id="results-list">
      <Box display="flex" flexDirection="row">
        <Box as="section" margin="0.5em">
          <Heading as="h2" color="cyan.400">
            Boy Votes
          </Heading>
          <Text fontSize="lg">Count: {boyVotes.length}</Text>
          <Grid templateColumns={gridColumVariant}>
            {boyVotes.map((vote) => voteRenderer(vote, 'boy'))}
          </Grid>
        </Box>
        <Box as="section" margin="0.5em">
          <Heading as="h2" color="purple.500">Girl Votes</Heading>
          <Text fontSize="lg">Count: {boyVotes.length}</Text>
          <Grid templateColumns={gridColumVariant}>
            {girlVotes.map((vote) => voteRenderer(vote, 'girl'))}
          </Grid>
        </Box>
      </Box>
    </Layout>
  )
}

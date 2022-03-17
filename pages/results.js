import { Box, List, ListItem, Heading, Text } from '@chakra-ui/react'
import useSWR from 'swr'
import { useEffect, useState } from 'react'

import { Layout } from '../src/components'
import { fetcher } from '../src/utils/api'

export default function Home() {
  const { data: voteData } = useSWR(`api/votes`, fetcher)
  const [votes, setVotes] = useState([])

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
      margin: '0.5em 0',
      color: 'purple.600',
      minHeight: '10ch',
    }
    const messageStyles = {
      backgroundColor: type === 'girl' ? 'purple.400' : 'cyan.300',
      borderRadius: '4px',
    }

    return (
      <ListItem key={vote.id} {...listItemStyles}>
        <Text fontSize="xl" color={type === 'girl' ? 'purple.600' : 'cyan.100'}>
          {type === 'boy' ? '♂️' : '♀️'}&nbsp;{vote.name}
        </Text>
        <Box {...messageStyles}>{vote.messageToParents}</Box>
      </ListItem>
    )
  }

  return (
    <Layout title="Results" id="results-list">
      <Box display="flex" flexDirection="row">
        <Box as="section" margin="0.5em">
          <Heading as="h2" color="cyan.400">
            Boy Votes
          </Heading>
          <List>
            {boyVotes.map((vote) => voteRenderer(vote, 'boy'))}
          </List>
        </Box>
        <Box as="section" margin="0.5em">
          <Heading as="h2" color="purple.500">Girl Votes</Heading>
          <List>
            {girlVotes.map((vote) => voteRenderer(vote, 'girl'))}
          </List>
        </Box>
      </Box>
    </Layout>
  )
}

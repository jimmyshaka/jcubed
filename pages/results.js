import {
  Box,
  Grid,
  GridItem,
  Heading,
  Text,
  useBreakpointValue,
  Spinner,
  HStack,
  Button,
  Tag,
} from '@chakra-ui/react'
import useSWR from 'swr'
import { useEffect, useState } from 'react'

import { Layout } from '../src/components'
import { useGet } from '../src/utils/api'
import { capitalize } from 'lodash'

export default function Home() {
  const { data: voteData } = useGet(useSWR, `api/votes`)
  const [votes, setVotes] = useState([])
  const gridColumVariant = useBreakpointValue({
    base: 'repeat(1, 1fr)',
    md: 'repeat(2, 1fr)',
  })
  const headerSizeVariant = useBreakpointValue({ base: '2xl', md: '4xl' })

  useEffect(() => {
    if (!voteData) return

    setVotes(voteData)
  }, [voteData])

  const girlVotes = votes.filter((r) => r.gender === 'girl') || []
  const boyVotes = votes.filter((r) => r.gender === 'boy') || []

  const voteRenderer = (vote, type) => {
    const tagStyles = {
      backgroundColor: type == 'girl' ? 'purple.400' : 'cyan.400',
      borderRadius: '8px',
      boxShadow: 'xl',
      px: '1em',
      py: '0.2em',
      margin: '0.5em',
      color: type === 'girl' ? 'purple.100' : 'cyan.100',
      fontSize: 'xl',
      fontWeight: 'normal',
      textAlign: 'center',
    }

    const formattedName = vote.name.split(' ').map(name => {
      return capitalize(name)
    }).join(' ').toString()

    return (
      <GridItem key={vote.id}>
        <Tag {...tagStyles}>
          <Text fontWeight="bold" fontSize="xl">
            {type === 'boy' ? '♂️' : '♀️'}
          </Text>
          &nbsp;
          <Text>{formattedName}</Text>
        </Tag>
      </GridItem>
    )
  }

  return (
    <Layout title="👶 🍼 Votes" id="results-list">
      <HStack marginBottom="0.5em">
        <Button as="a" href="/">
          🏠 Home
        </Button>
        <Button as="a" href="/mom">
          Moms Symptoms
        </Button>
      </HStack>
      {!voteData ? (
        <Spinner marginTop="2em" size="xl" />
      ) : (
        <Box display="flex" flexDirection="row">
          <Box as="section" margin="0.5em" width="50%">
            <Heading as="h2" color="cyan.400" fontSize={headerSizeVariant}>
              Boy Votes
            </Heading>
            <Text fontSize="lg">
              Count: {!voteData ? '-' : boyVotes.length}
            </Text>
            <Grid templateColumns={gridColumVariant}>
              {boyVotes.map((vote) => voteRenderer(vote, 'boy'))}
            </Grid>
          </Box>
          <Box as="section" margin="0.5em" width="50%">
            <Heading as="h2" color="purple.500" fontSize={headerSizeVariant}>
              Girl Votes
            </Heading>
            <Text fontSize="lg">
              Count: {!voteData ? '-' : girlVotes.length}
            </Text>
            <Grid templateColumns={gridColumVariant}>
              {girlVotes.map((vote) => voteRenderer(vote, 'girl'))}
            </Grid>
          </Box>
        </Box>
      )}
    </Layout>
  )
}

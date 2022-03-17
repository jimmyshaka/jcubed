import { List, ListItem } from '@chakra-ui/react'
import useSWR from 'swr'

import { Layout } from '../src/components'
import { fetcher } from '../src/utils/api'

export default function Home() {
  const { data: votes } = useSWR(`api/votes`, fetcher)

  const girlVotes = votes.filter((r) => r.gender === 'girl') || []
  const boyVotes = votes.filter((r) => r.gender === 'boy') || []

  return (
    <Layout title="Results">
      <div>Boy Votes</div>
      <List>
        {boyVotes.map((vote) => {
          return (
            <ListItem key={vote.id}>
              Name: {vote.name}
              Message to parents: {vote.messageToParents}
            </ListItem>
          )
        })}
      </List>
      <div>Girl Votes</div>
      <List>
        {girlVotes.map((vote) => {
          return (
            <ListItem key={vote.id}>
              Name: {vote.name}
              Message to parents: {vote.messageToParents}
            </ListItem>
          )
        })}
      </List>
    </Layout>
  )
}

import {
  Table,
  TableCaption,
  Thead,
  Tr,
  Th,
  Td,
  Tbody,
  Tfoot,
  Button,
  HStack,
} from '@chakra-ui/react'
import { capitalize } from 'lodash'

import { Card, Layout } from '../src/components'

export default function Mom() {
  const symptoms = [
    {
      name: 'Morning Sickness',
      girlData: 'Severe',
      boyData: 'mild',
      isGirl: true,
    },
    {
      name: `Baby's Heartrate`,
      girlData: '> 140',
      boyData: '< 140',
      isGirl: true,
    },
    {
      name: 'Cravings',
      boyData: 'Salty',
      girlData: 'Sweet',
      isBoy: true,
    },
    {
      name: 'Sleeping On',
      girlData: 'Right Side',
      boyData: 'Left Side',
      boy: false,
      isGirl: true,
      isBoy: true,
    },
    {
      name: 'Headaches',
      girlData: 'No',
      boyData: 'Yes',
      isBoy: true,
    },
    {
      name: 'Heartburn',
      girlData: 'Yes',
      boyData: 'No',
      isGirl: true,
    },
    {
      name: 'Chinese Calendar',
      girlData: 'Girl',
      boyData: 'Boy',
      isBoy: true,
    },
    {
      name: 'Mayan Calendar',
      girlData: 'Girl',
      boyData: 'Boy',
      isGirl: true,
    },
  ]

  return (
    <Layout title="Symptom Folklore">
      <HStack marginBottom="0.5em">
        <Button as="a" href="/">
          🏠
        </Button>
        <Button as="a" href="/vote">
          Ready to vote
        </Button>
        <Button as="a" href="results">
          Vote results
        </Button>
      </HStack>
      <Table variant="simple">
        <TableCaption>A breakdown of Jess&apos;pregnancy symptoms</TableCaption>
        <Thead>
          <Tr>
            <Th>Symptom</Th>BRB
            <Th>♀️ Girl</Th>
            <Th>♂️ Boy</Th>
          </Tr>
        </Thead>
        <Tbody>
          {symptoms.map((symptom) => {
            return (
              <Tr key={symptom.name}>
                <Td>{capitalize(symptom.name)}</Td>
                <Td>
                  {!!symptom.isGirl && '⭐'}
                  {capitalize(symptom.girlData)}
                </Td>
                <Td>
                  {!!symptom.isBoy && '⭐'} {capitalize(symptom.boyData)}
                </Td>
              </Tr>
            )
          })}
        </Tbody>
        <Tfoot>
          <Tr>
            <Th>Symptom</Th>
            <Th>♀️ Girl</Th>
            <Th>♂️ Boy</Th>
          </Tr>
        </Tfoot>
      </Table>
    </Layout>
  )
}

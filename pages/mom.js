import {
  Table,
  TableCaption,
  Thead,
  Tr,
  Th,
  Td,
  Tbody,
  Tfoot,
} from '@chakra-ui/react'

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
    <Layout title="Mom's Symptom Folklore">
      <Table variant="simple">
        <TableCaption>A breakdown of Jess&apos;pregnancy symptoms</TableCaption>
        <Thead>
          <Tr>
            <Th>Symptom</Th>
            <Th>♀️ Girl</Th>
            <Th>♂️ Boy</Th>
          </Tr>
        </Thead>
        <Tbody>
          {symptoms.map((symptom) => {
            return (
              <Tr key={symptom.name}>
                <Td>{symptom.name}</Td>
                <Td>{!!symptom.isGirl && '⭐'}{symptom.girlData}</Td>
                <Td>{!!symptom.isGirl && '⭐'}{symptom.boyData}</Td>
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

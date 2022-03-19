import {
  Button,
  FormControl,
  FormLabel,
  Input,
  Spacer,
  FormHelperText,
  Stack,
  RadioGroup,
  Radio,
  Textarea,
  Text,
} from '@chakra-ui/react'
import { useState } from 'react'
import { isNil } from 'lodash'
import { useRouter } from 'next/router'
import { useCookies } from 'react-cookie'

import { Layout } from '../src/components'
import { post } from '../src/utils/api'

export default function Voter() {
  const router = useRouter()

  const [name, setName] = useState(null)
  const [gender, setGender] = useState(null)
  const [messageToParents, setMessageToParents] = useState(null)
  const [cookies, setCookie, removeCookie] = useCookies(['user-voted'])

  const handleInputChange = (e) => setName(e.target.value)
  const handleMessageToParents = (e) => setMessageToParents(e.target.value)

  const handleSubmit = async () => {
    const response = await post('/api/votes', {
      name,
      gender,
      messageToParents,
    })

    setCookie('user-voted', true, ['/'])

    return router.push('/results')
  }

  const handleGoBack = () => {
    return router.push('/')
  }

  const userAlreadyVoted = !!cookies['user-voted']
  const formNotValid = isNil(name) || isNil(gender) || userAlreadyVoted

  return (
    <Layout title="Vote 🤔">
      <FormControl
        margin="1em"
        display="flex"
        flexDirection="column"
        backgroundColor="purple.500"
        minHeight="50vh"
        borderRadius="md"
        boxShadow="2xl"
        marginTop="2em"
        padding="1em"
      >
        <FormHelperText
          fontSize="lg"
          color={userAlreadyVoted ? 'red.200' : 'purple.lightest'}
        >
          {userAlreadyVoted
            ? `🚫 You can only vote once! Sit tight to see the results.`
            : 'Lil BB Walsh wants to know who you are and what you guessed.'}
        </FormHelperText>
        <FormLabel htmlFor="name" marginTop="1em">
          Name
        </FormLabel>
        <Input
          id="name"
          type="text"
          value={name || ''}
          focusBorderColor="purple.300"
          isDisabled={userAlreadyVoted}
          onChange={handleInputChange}
        />
        <FormLabel htmlFor="gender" marginTop="1em">
          Gender
        </FormLabel>
        <RadioGroup
          id="gender"
          onChange={setGender}
          value={gender}
          isDisabled={userAlreadyVoted}
        >
          <Stack direction="row">
            <Radio size="lg" value="girl" colorScheme="pink">
              <Text color="pink.300" fontWeight="semibold">
                ♀️ Girl
              </Text>
            </Radio>
            <Radio size="lg" value="boy" colorScheme="blue">
              <Text color="cyan.300" fontWeight="semibold">
                ♂️ Boy
              </Text>
            </Radio>
          </Stack>
        </RadioGroup>
        <FormLabel htmlFor="gender" marginTop="1em">
          Optional message to Mom & Dad
        </FormLabel>
        <Textarea
          focusBorderColor="purple.300"
          placeholder="Your child is destined to become the next President of the United States..."
          color="purple.100"
          isDisabled={userAlreadyVoted}
          onChange={handleMessageToParents}
        />
        <Spacer />
        <Button
          marginTop="1em"
          isDisabled={formNotValid}
          colorScheme="cyan"
          onClick={handleSubmit}
        >
          Cast my vote 🤙
        </Button>
        <Button marginTop="1em" colorScheme="purple" onClick={handleGoBack}>
          Lets go back ⬅️
        </Button>
      </FormControl>
    </Layout>
  )
}

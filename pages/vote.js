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

import { Layout } from '../src/components'
import { post } from '../src/utils/api'

export default function Voter() {
  const router = useRouter()

  const [name, setName] = useState(null)
  const [gender, setGender] = useState(null)
  const [messageToParents, setMessageToParents] = useState(null)

  const handleInputChange = (e) => setName(e.target.value)
  const handleMessageToParents = (e) => setMessageToParents(e.target.value)

  const handleSubmit = async () => {
    const response = await post('/api/votes', {
      name,
      gender,
      messageToParents,
    })

    return router.push('/results')
  }

  const handleGoBack = () => {
    return router.push('/')
  }

  const formNotValid = isNil(name) || isNil(gender)

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
        <FormHelperText fontSize="lg" color="purple.lightest">
          Lil BB Walsh wants to know who you are and what you guessed.
        </FormHelperText>
        <FormLabel htmlFor="name" marginTop="1em">
          Name
        </FormLabel>
        <Input
          id="name"
          type="text"
          value={name || ''}
          focusBorderColor="purple.300"
          onChange={handleInputChange}
        />
        <FormLabel htmlFor="gender" marginTop="1em">
          Gender
        </FormLabel>
        <RadioGroup id="gender" onChange={setGender} value={gender}>
          <Stack direction="row">
            <Radio size="lg" value="girl" colorScheme="pink">
            <Text color="pink.300" fontWeight="semibold">♀️ Girl</Text>
              
            </Radio>
            <Radio size="lg" value="boy" colorScheme="blue">
              <Text color="cyan.300" fontWeight="semibold">♂️ Boy</Text>
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
          onChange={handleMessageToParents}
        />
        <Spacer />
        <Button
          marginTop="1em"
          isDisabled={formNotValid}
          colorScheme="purple"
          onClick={handleSubmit}
        >
          Vote 🤙
        </Button>
        <Button
          marginTop="1em"
          colorScheme="cyan"
          onClick={handleGoBack}
        >
          Not ready yet, lets go back ⬅️
        </Button>
      </FormControl>
    </Layout>
  )
}

import { capitalize } from 'lodash'
import * as repository from './data/repository'

export default async function postVote(req, res) {
  if (req.method === 'POST') {
    const vote = req.body

    // validation & sanitization
    const params = {
      name : capitalize(vote.name.trim()),
      messageToParents: vote?.messageToParents?.trim(),
      gender: vote.gender.trim().toLowerCase()
    }

    const result = await repository.create(params)
    console.info('posted result:', result)

    return res.status(201).json(vote)
  }

  if (req.method === 'GET') {
    const votes = await repository.getAll()
    console.info('vote results:', votes)

    return res.send(votes)
  } else {
    return res.sendStatus(405)
  }
}

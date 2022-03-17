import { capitalize } from 'lodash'
import * as repository from './data/repository'

import logger from '../../src/utils/logger'

export default async function postVote(req, res) {
  if (req.method === 'POST') {
    const vote = req.body

    // validation & sanitization
    logger.info('Beginning to sanitize vote params')
    const params = {
      name: capitalize(vote.name.trim()),
      messageToParents: vote?.messageToParents?.trim(),
      gender: vote.gender.trim().toLowerCase(),
    }
    logger.info('Successfully sanitized vote params')

    const result = await repository.create(params)
    logger.info('Ran succesful POST for vote:', result)

    return res.status(201).json(vote)
  }

  if (req.method === 'GET') {
    const votes = await repository.getAll()
    logger.info(`Successfully retrieved vote results, ${votes.length}`)

    return res.send(votes)
  } else {
    logger.wartn('Client tried to request from a route that does not exist')
    return res.sendStatus(405)
  }
}

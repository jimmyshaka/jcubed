import * as repository from './data/repository'

export default async function postVote(req, res) {
  const vote = req.body

  // TODO: validate
  const result = await repository.create(vote)
  console.log('result:', result)

  return res.status(201).json(vote)
}

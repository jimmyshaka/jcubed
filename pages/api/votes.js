import * as repository from './data/repository'

export default async function postVote(req, res) {
  if (req.method === 'POST') {
    const vote = req.body

    // TODO: validate
    const result = await repository.create(vote)
    console.log('result:', result)

    return res.status(201).json(vote)
  }

  if (req.method === 'GET') {
    const votes = await repository.getAll()
    console.log('vote results:', votes)

    return res.send(votes)
  } else {
    return res.sendStatus(405)
  }
}

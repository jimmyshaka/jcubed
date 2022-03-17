export default function postVote(req, res) {
  const voter = req.body

  // TODO: validate

  return res.status(201).json(voter)
}

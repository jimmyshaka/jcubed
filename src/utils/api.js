export const fetcher = (...args) => fetch(...args).then((res) => res.json())


export async function post(url, body) {
  return await fetch(url, {
    method: 'POST',
    body: JSON.stringify(body),
    headers: {
      'Content-Type': 'application/json',
    },
  })
}

// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {

  const admin = {
    name: 'Jonny Admin',
    email: 'jonny.admin@example.com',
    isAdmin: true,
    isFlex: true,
    roles: [
      'admin',
      'flex',
    ],
    scopes: [
      '*:*'
    ],
    settings: {
      theme: 'light'
    }
  }

  const tech = {
    name: 'Bill Tech',
    email: 'bill.tech@example.com',
    isFlex: true,
    isTechnician: true,
    roles: [
      'flex'
    ],
    scopes: [
      'get:registrations',
      'put:claims',
    ]
  }

  const user = {
    name: 'Steve User',
    email: 'steve.user@example.com',
  }

  const randomizer = Math.round(Math.random() * (3-1) + 1)

  let response

  switch (randomizer) {
    case 1: response = admin
    break
    case 2: response = tech
    break
    default: response = user
  }

  res.status(200).json(response)
}

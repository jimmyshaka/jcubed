# J Cubed

A simple gender reveal website built using [Next.js](https://nextjs.org/), and the G-Suite Sheets API.

## Getting Started

First, run the development server:

```bash
yarn dev
```

## Setup

- Uses dotenv to manage config. All config values are stored in a `.env.local`
- Uses `google-spreadsheet` for data storage _(sigh... I know, I know...)_. [Documentation can be found here](https://www.npmjs.com/package/google-spreadsheet)

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

Pages will auto-update as you edit.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.js`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## Resources

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Google Spreadsheet API](https://www.npmjs.com/package/google-spreadsheet)

## Deploy

- Deploys are automatically triggered via Vercel integration. Log in to vercel to find out more information.

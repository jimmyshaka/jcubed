import { GoogleSpreadsheet } from 'google-spreadsheet'
import * as uuid from 'uuid'

import 'dotenv/config'

const {
  REACT_APP_SPREADSHEET_ID,
  REACT_APP_GOOGLE_CLIENT_EMAIL,
  REACT_APP_GOOGLE_SERVICE_PRIVATE_KEY,
} = process.env

const doc = new GoogleSpreadsheet(REACT_APP_SPREADSHEET_ID)


export async function create({ name, gender, messageToParents }) {
  const vote = {
    id: uuid.v4(),
    name,
    gender,
    messageToParents,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  }

  return await appendSpreadsheet(vote)
}

async function appendSpreadsheet(row) {
  try {
    await doc.useServiceAccountAuth({
      client_email: REACT_APP_GOOGLE_CLIENT_EMAIL,
      private_key: REACT_APP_GOOGLE_SERVICE_PRIVATE_KEY,
    })

    await doc.loadInfo() // loads document properties and worksheets

    const sheet = doc.sheetsByIndex[0]
    // ? THis is where the magic happens
    const res = await sheet.addRow(row)
    console.info('Sheet title', sheet.title)
    console.info('Sheet row count', sheet.rowCount)
  } catch (e) {
    console.error('Failed to upload to Google Sheets: ', e)
    throw Error(e)
  }
}

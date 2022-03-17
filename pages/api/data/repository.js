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

export async function getAll() {
  try {
    await loadDocument()

    const sheet = doc.sheetsByIndex[0]
    const rows = await sheet.getRows()

    console.info(
      `Retrieved ${rows.length} number of results from google sheets`
    )

    return rows.map((row) => ({
      id: row.id,
      name: row.name,
      gender: row.gender,
      messageToParents: row.messageToParents,
      createdAt: row.createdAt,
      updatedAt: row.updatedAt,
    }))
  } catch (e) {
    console.error('Failed to get data from Google Sheets: ', e)
    throw Error(e)
  }
}

async function appendSpreadsheet(row) {
  try {
    await loadDocument()

    const sheet = doc.sheetsByIndex[0]
    // ? THis is where the magic happens
    const res = await sheet.addRow(row)
    console.info('Sheet title', sheet.title)
    console.info('Sheet row count', sheet.rowCount)

    return res
  } catch (e) {
    console.error('Failed to upload to Google Sheets: ', e)
    throw Error(e)
  }
}

async function loadDocument() {
  await doc.useServiceAccountAuth({
    client_email: REACT_APP_GOOGLE_CLIENT_EMAIL,
    private_key: REACT_APP_GOOGLE_SERVICE_PRIVATE_KEY,
  })

  return await doc.loadInfo() // loads document properties and worksheets
}

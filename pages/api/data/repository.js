import { GoogleSpreadsheet } from 'google-spreadsheet'
import * as uuid from 'uuid'

import 'dotenv/config'

import logger from '../../../src/utils/logger'

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

    logger.info(`Retrieved ${rows.length} results from google sheets`)

    return rows.map((row) => ({
      id: row.id,
      name: row.name,
      gender: row.gender,
      messageToParents: row.messageToParents,
      createdAt: row.createdAt,
      updatedAt: row.updatedAt,
    }))
  } catch (e) {
    logger.error('Failed to get data from Google Sheets: ', e)
    throw Error(e)
  }
}

async function appendSpreadsheet(row) {
  try {
    await loadDocument()

    const sheet = doc.sheetsByIndex[0]
    logger.info('Sheet row count before', sheet.rowCount)

    // ? THis is where the magic happens
    const res = await sheet.addRow(row)
    logger.info('Appended new row to google sheet successfully')
    logger.info('Sheet row count after', sheet.rowCount)

    return res
  } catch (e) {
    logger.error('Failed to upload to Google Sheets: ', e)
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

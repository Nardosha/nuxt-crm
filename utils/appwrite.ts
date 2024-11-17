import { Account, Client, Databases, Storage, ID } from 'appwrite'

const client = new Client()

const account = new Account(client)

const DB = new Databases(client)

const storage = new Storage(client)

client
  .setEndpoint('https://cloud.appwrite.io/v1')
  .setProject(import.meta.env.APP_WRITE_ID)

export {
  account,
  DB,
  storage,
  ID
}

/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_APP_TITLE: string
  APP_WRITE_ID: string
  DB_ID: string
  COLLECTION_DEALS: string
  COLLECTION_CUSTOMERS: string
  COLLECTION_COMMENTS: string
  STORAGE_ID: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}

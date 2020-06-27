import { useEffect, useState } from 'react'
import faunadb from 'faunadb'
const { query: q } = faunadb
import { FAUNA_STATUS } from './constants'

export default function useUpdateDocument(
  db: faunadb.Client,
  collectionName: string,
  refId: string,
  data: object
) {
  const [status, setStatus] = useState<string>(FAUNA_STATUS.NOT_LOADED)
  const [document, setDocument] = useState<null | Document>(null)

  useEffect(() => {
    const request = db.query(q.Replace(q.Ref(q.Collection(collectionName), refId), { data }))

    request
      .then(res => {
        setStatus(FAUNA_STATUS.LOADING)
        setDocument(res as Document)
      })
      .then(() => setStatus(FAUNA_STATUS.LOADED))
      .catch(err => {
        console.error(`[fauna-hooks] ${err}`)
        setStatus(FAUNA_STATUS.ERROR)
      })
  }, [])

  return [document, status]
}
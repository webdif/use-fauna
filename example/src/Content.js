import React from 'react'
import faunadb from 'faunadb'

import {
  useFaunaClient,
  useGetDocument,
  useCreateDocument,
  useDeleteDocument,
  useUpdateDocument,
  useGetAllDocuments
  // useDatabase
} from 'use-fauna'

function Content(props) {
  const client = useFaunaClient('fnADrW9uexACE1_GWGovu3My4mXWcm-tgQ3Sp3oP')
  console.log('client', client)

  // const { DatabaseContext, DatabaseProvider } = useDatabase()
  // console.log('DatabaseContext', DatabaseContext)
  // console.log('DatabaseProvider', DatabaseProvider)
  // console.log('dbProvider', dbProvider)

  // const [getAllDocuments, allDocs, allDocsStatus] = useGetAllDocuments(client)
  // const [getDocument, singleDoc, singleDocStatus] = useGetDocument(client)
  // const [createDocument, createdDoc, createDocStatus] = useCreateDocument(client)
  // const [deleteDocument, deletedDoc, deleteDocStatus] = useDeleteDocument(client)
  // const [updateDocument, updatedDoc, updateDocStatus] = useUpdateDocument(client)

  // console.log('allDocs', allDocs)
  // console.log('singleDoc', singleDoc)
  // console.log('createdDoc', createdDoc)
  // console.log('deletedDoc', deletedDoc)
  // console.log('updatedDoc', updatedDoc)

  return (
    <div>
      {/* <button onClick={() => getAllDocuments('storehouses', 2)}>Get all docs</button>
      <button onClick={() => getDocument('storehouses', '264990427443102227')}>
        Get single doc
      </button>
      <button onClick={() => createDocument('storehouses', { name: 'john mayer' })}>
        Create single doc
      </button>
      <button onClick={() => deleteDocument('storehouses', '269443476876165650')}>
        Delete single doc
      </button>
      <button
        onClick={() =>
          updateDocument('storehouses', '269443543992369683', {
            band: 'funky'
          })
        }
      >
        Update document
      </button> */}
    </div>
  )
}

export default Content

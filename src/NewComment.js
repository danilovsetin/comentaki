import React, { useState } from 'react'
import firebase from './firebase'
import {useDatabasePush} from './database'

const NewComment = () => {
    const [, save] = useDatabasePush('comments')
    const [comment, setComment] = useState('')
    const createComment = () => {
      if (comment !== '') {
        save(
          {
            content: comment,
            createdAt: firebase.database.ServerValue.TIMESTAMP,
            user: {
              id: 1,
              name: 'Danilo'
            }
          }
        )
        setComment('')
      }    
    }
    return (
      <div>
        <textarea value={comment} onChange={evt => setComment(evt.target.value)} />    
        <button onClick={createComment}>Toogle</button>
      </div>
    )
  }

  export default NewComment
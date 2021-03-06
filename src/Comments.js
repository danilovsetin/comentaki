import React from 'react'
import { useDatabase } from './database'
import Comment from './Comment'

const Comments = () => {  
    const data = useDatabase('comments')  
    if(!data){
      return <p>Nenhum comentário encontrado</p>
    }
  
    const ids = Object.keys(data)
    return ids.map(id => {
      return <Comment key={id} comment={data[id]} />
    })
  }

export default Comments
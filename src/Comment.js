import React, { useContext } from 'react'
import Time from './Time'
import { AuthContext } from './auth'

const Comment = ({comment}) => {
    const auth = useContext(AuthContext)
    return <p>{comment.content} incluído por {comment.user.name} em <Time timestamp={comment.createdAt} /></p>
}

export default Comment
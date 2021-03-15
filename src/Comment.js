import React from 'react'
import Time from './Time'

const Comment = ({comment}) => {
    return <p>{comment.content} incluído por {comment.user.name} em <Time timestamp={comment.createdAt} /></p>
}

export default Comment
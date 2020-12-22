import React from 'react'
import "./UserPost.css"
import AvatarIcon from '../AvatarIcon'
import PostFooter from './PostFooter'
import formatTime from "../../utils/formatTime"

function UserPost({ data: { id, likeCount, title, likes, username, body, createdAt, profileColor }, createComment }) {
    return (
        <div className="post__container">
            <div className="post__head">
                <AvatarIcon user={{ profileColor, username }} />
                <div className="head__info">
                    <strong>{ username }</strong>
                    <p><small>
                        Posted { formatTime(createdAt) }
                    </small></p>
                </div>
            </div>
            <div className="post__body">
                <h4>{ title }</h4>
                <p>{ body }</p>
            </div>
            <PostFooter 
                postId={id} 
                likes={likes} 
                likeCount={likeCount} 
                createComment={createComment} 
            />
        </div>
    )
}

export default UserPost

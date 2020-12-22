import React, { useContext } from 'react'
import CreateCommentModal from '../CreateCommentModal'
import AuthContext from "../../context/AuthContext"
import LikeButton from '../LikeButton'
import { Link } from "react-router-dom"

function PostFooter({ postId, likes, likeCount, createComment }) {
    const { userData: user } = useContext(AuthContext)

    return (
        <div className="post__footer">
            { 
                createComment && user ?
                    <CreateCommentModal postId={postId} createComment={createComment} />
                : createComment ?
                    <Link to="/">Back to Home</Link> : 
                    <Link to={`/posts/${postId}`}>View More Info</Link> 
            }
            <LikeButton likeCount={likeCount} id={postId} likes={likes} user={user} />
        </div>
    )
}

export default PostFooter

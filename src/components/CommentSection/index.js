import React from 'react'
import AvatarIcon from '../AvatarIcon'
import "./CommentSection.css"
import formatTime from "../../utils/formatTime"

function Comment({ data: { username, profileColor, createdAt, body }}) {
    return (
        <div className="comment">
            <div className="post__head">
                <AvatarIcon user={{ username, profileColor }} />
                <div className="comment__info">
                    <strong>{ username }</strong>
                    <small className="comment__date">
                        Posted { formatTime(createdAt) }
                    </small>
                    <p className="comment__body">{ body }</p>
                </div>
            </div>
        </div>
    )
}

function CommentSection({ comments }) {
    return (
        <div className="comment-section">
            {comments.map(comment => (
                <Comment key={comment.id} data={comment} />
            ))}
        </div>
    )
}

export default CommentSection

import React, { useState } from 'react'
import Modal from "../utils/Modal"

function CreateCommentModal({ postId, createComment }) {
    const [comment, setComment] = useState("")
    const [isOpen, setIsOpen] = useState(false)

    const createCommentHandler = () => {
        createComment({
            variables: { postId, body: comment },
        }).then(() => setIsOpen(false))
    }

    return (
        <div>
            <button className="btn" id="comment-btn" onClick={() => setIsOpen(!isOpen)}>Comment</button>
            <Modal title="Create a new comment" isOpen={isOpen}>
                <p>Post a comment related to this post</p>
                <div className="form-control mt">
                    <textarea
                        onChange={e => setComment(e.target.value)}
                        value={comment}
                        placeholder="Body must be between 20-200 characters!"
                    />
                </div>
                <div className="modal__footer">
                    <button type="submit" className="btn primary" onClick={createCommentHandler}>Submit</button>
                    <button type="button" className="btn" onClick={() => setIsOpen(false)}>Cancel</button>
                </div>
            </Modal>
        </div>
    )
}

export default CreateCommentModal

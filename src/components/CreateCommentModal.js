import React, { useState } from 'react'
import Modal from "../utils/Modal"
import { Form, Formik } from "formik"
import { Input } from './FormControls'

function CreateCommentModal({ postId, createComment }) {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <div>
            <button className="btn" id="comment-btn" onClick={() => setIsOpen(!isOpen)}>Comment</button>
            <Modal title="Create a new post" isOpen={isOpen}>
                <p>Post a comment related to this post</p>
                <Formik
                    initialValues={{ body: "" }}
                    onSubmit={(values, { setErrors }) => {
                        createComment({
                            variables: { 
                                postId, 
                                body: values.body 
                            },
                            update() {
                                setIsOpen(false)
                            }
                        }).catch(err => setErrors(err.graphQLErrors[0].extensions.exception.exceptionObject))
                    }}
                >
                    <Form>
                        <Input 
                            name="body" 
                            placeholder="Body must be between 20-200 characters!" 
                            label="Body" 
                            as="textarea" 
                            type="text" 
                        />
                        <div className="modal__footer">
                            <button type="submit" className="btn primary">Submit</button>
                            <button type="button" className="btn" onClick={() => setIsOpen(false)}>Cancel</button>
                        </div>
                    </Form>
                </Formik>
            </Modal>
        </div>
    )
}

export default CreateCommentModal

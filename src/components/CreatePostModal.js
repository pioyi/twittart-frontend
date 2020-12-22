import React from 'react'
import Modal from '../utils/Modal'
import { Form, Formik } from "formik"
import { Input } from './FormControls'
import { CREATE_POST, FETCH_POSTS } from '../GraphQL/queries'
import { useMutation } from "@apollo/client"

function CreatePostModal({ isOpen, closeModal }) {
    const [createPost] = useMutation(CREATE_POST)

    return (
        <Modal title="Create a new post" isOpen={isOpen}>
            <p>What are you up to? Provide a bried title and a body!</p>
            <Formik
                initialValues={{ title: "", body: "" }}
                onSubmit={(values, { setErrors }) => {
                   createPost({
                        variables: values,
                        refetchQueries: [{ query: FETCH_POSTS }],
                   })
                    .then(closeModal)
                    .catch(err => setErrors(err.graphQLErrors[0].extensions.exception.exceptionObject))
                }}
            >
                <Form>
                    <Input name="title" placeholder="My new post" label="Title" type="text" />
                    <Input name="body" placeholder="Hello World!" label="Body" as="textarea" type="text" />
                    <div className="modal__footer">
                        <button type="submit" className="btn primary">Submit</button>
                        <button type="button" className="btn" onClick={closeModal}>Cancel</button>
                    </div>
                </Form>
            </Formik>
        </Modal>
    )
}

export default CreatePostModal

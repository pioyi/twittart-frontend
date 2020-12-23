import React from 'react'
import Layout from '../Layout/Layout'

import { useQuery, useMutation } from '@apollo/client'
import { FETCH_POST, CREATE_COMMENT } from '../GraphQL/queries'

import UserPost from '../components/UserPost'
import Spinner from '../components/Spinner'
import CommentSection from '../components/CommentSection'

function PostDetails(props) {
    const postId = props.match.params.postId

    const { loading, data } = useQuery(FETCH_POST, {
        variables: { 
            postId 
        }
    })

    const [createComment] = useMutation(CREATE_COMMENT)
    if (loading) return <Spinner />

    return data.post && (
        <div>
            <Layout>
                <UserPost key={data.post.id} data={data.post} createComment={createComment} />
                <CommentSection comments={data.post.comments} />
            </Layout>
        </div>
    )
}

export default PostDetails

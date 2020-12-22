import React from 'react'
import Spinner from '../components/Spinner'
import { useQuery } from "@apollo/client"
import { FETCH_POSTS } from "../GraphQL/queries"
import Layout from '../Layout/Layout'
import UserPost from '../components/UserPost'

function Home() {
    const { loading, error, data } = useQuery(FETCH_POSTS)
    if (loading) return <Spinner />
    if (error) return <p>{JSON.stringify(error)}</p> 

    return (
        <div>
            <Layout>
                {data.posts && data.posts.map(post => (
                    <UserPost key={post.id} data={post} />
                ))}
            </Layout>
        </div>
    )
}

export default Home

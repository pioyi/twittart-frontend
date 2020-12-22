import { gql } from "@apollo/client"

export const FETCH_POSTS = gql`
  query {
    posts {
      id
      title
      body
      username
      createdAt
      likes {
        username
      }
      likeCount
      profileColor
    }
  }
`

export const FETCH_POST = gql`
  query($postId: ID!) {
    post(id: $postId) {
      id
      title
      body
      username
      createdAt
      likes {
        username
      }
      likeCount
      profileColor
      commentCount
      comments {
        id body username createdAt profileColor
      }
    }
  }
`

export const SIGN_UP = gql`
  mutation SignUp($username: String!, $password: String!, $password2: String!) {
    addUser(username: $username, password: $password, password2: $password2) {
      token username profileColor
    }
  }
`

export const LOG_IN = gql`
  mutation Login($username: String!, $password: String!) {
    loginUser(username: $username, password: $password) {
      token username profileColor
    }
  }
`

export const LIKE_POST = gql`
  mutation likePost($postId: ID!) {
    likePost(postId: $postId) {
      id 
      likes {
        id username
      }
      likeCount
    }
  }
`

export const CREATE_COMMENT = gql`
  mutation createComment($postId: ID!, $body: String!) {
    createComment(postId: $postId, body: $body)  {
      id
      comments {
        id
        username
        profileColor
        createdAt
        body
      }
      commentCount
    }
  }
`

export const CREATE_POST = gql`
  mutation createPost($title: String!, $body: String!) {
    createPost(title: $title, body: $body) {
      id createdAt username profileColor body
      likeCount commentCount
      likes {
        username
      }
      comments {
        id username body createdAt profileColor
      }
    }
  }
`
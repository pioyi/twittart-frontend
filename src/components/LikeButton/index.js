import React, { useEffect, useState } from "react"
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai"
import { useMutation } from "@apollo/client"
import "./LikeButton.css"
import { LIKE_POST } from "../../GraphQL/queries"
import { useHistory } from "react-router-dom"

function LikeButton({ likeCount, likes, id, user }) {
    let history = useHistory()

    const [hasLiked, setHasLiked] = useState(false)
    const [likePost] = useMutation(LIKE_POST, {
        variables: { postId: id },
        onError(err) {
            history.push("/login")
        }
    })

    useEffect(() => {
        setHasLiked(
            user && likes.find(like => like.username === user.username)
        )
    }, [user, likes])

    return hasLiked ? (
        <button className="like-button active" onClick={likePost}>
            <AiFillHeart size={17} />
            { likeCount }
        </button>
    ) : (
        <button className="like-button" onClick={likePost}>
            <AiOutlineHeart size={17} />
            { likeCount }
        </button>
    )
}

export default LikeButton

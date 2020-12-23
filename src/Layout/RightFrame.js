import React, { useContext } from 'react'
import AuthContext from "../context/AuthContext"

function RightFrame() {
    const { userData: user } = useContext(AuthContext)

    return (
        <div className="layout__right">
            { user ? (
                <div className="card primary">
                    <h4 className="card__title">Create a new post</h4>
                    <p>Get started by creating a new post. Make sure to provide a brief title as well!</p>
                </div>
            ) : (
                <div className="card primary">
                    <h4 className="card__title">Create a new Account</h4>
                    <p>Sign up or log in in order to start publishing your own posts!</p>
                </div>
            )}
            
            <div className="card bg-white">
                <h4 className="card__title">Twittart is Open Source!</h4>
                <p>Are you a dev? Check out our detailed <a href="https://github.com/pioyi/twittart-frontend" target="_blank" rel="noreferrer">github repository</a> where we showcase the technologies that made this project possible.</p>
            </div>
        </div>
    )
}

export default RightFrame

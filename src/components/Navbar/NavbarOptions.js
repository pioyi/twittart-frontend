import { useState, useContext } from "react"
import { Link } from "react-router-dom"
import AuthContext from "../../context/AuthContext"
import AvatarIcon from "../AvatarIcon"
import CreatePostModal from "../CreatePostModal"

function AnonymousLinks() {
    return (
        <>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/login">Login</Link></li>
            <li><Link to="/register" className="btn">Register</Link></li>
        </>
    )
}

function AuthLinks({ context }) {
    const [isOpen, setIsOpen] = useState(false)
    const { userData: user, logout } = context

    return (
        <>
            <li><Link to="/">Home</Link></li>
            <li><button onClick={() => logout()} className="btn">Logout</button></li>
            <li><button onClick={() => setIsOpen(!isOpen)} className="btn">Create Post</button></li>
            <li><AvatarIcon user={user} /></li>
            <CreatePostModal 
                isOpen={isOpen} 
                closeModal={() => setIsOpen(false)}
            />
        </>
    )
}

function NavbarOptions() {
    const context = useContext(AuthContext)
    return context.userData ? <AuthLinks context={context} /> : <AnonymousLinks />
}

export default NavbarOptions

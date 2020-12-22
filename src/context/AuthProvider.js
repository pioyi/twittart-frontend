import React, { useState, useEffect } from "react"
import AuthContext from "./AuthContext"
import jwtDecode from "jwt-decode"

function AuthProvider({ children }) {
    const [userData, setUserData] = useState(null)

    useEffect(() => {
        const token = localStorage.getItem("twittart")
        if (token) {
            const decodedToken = jwtDecode(token)
            if (decodedToken.exp * 1000 < Date.now()) {
                localStorage.removeItem("twittart")
            } else {
                setUserData(decodedToken)
            }
        }
    }, [])

    function login(data) {
        localStorage.setItem("twittart", data.token)
        setUserData(data)
    }

    function logout() {
        localStorage.removeItem("twittart")
        setUserData(null)
    }

    return (
        <AuthContext.Provider value={{ userData, login, logout }}>
            { children }
        </AuthContext.Provider>
    )
}

export default AuthProvider
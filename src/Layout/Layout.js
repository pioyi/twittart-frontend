import React from 'react'
import RightFrame from "./RightFrame"
import "./Layout.css"

function Layout({ children }) {
    return (
        <div className="app-layout">
            <div className="layout__left">
                { children }
            </div>
            <RightFrame />
        </div>
    )
}

export default Layout

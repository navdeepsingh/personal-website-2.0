import React from "react"
import Header from "./header"
import "../sass/styles.scss"

const Layout = ({children}) => {
    return (
        <>
            <div className="body">
                <Header />
                {children}
            </div>            
        </>
    )
}

export default Layout;
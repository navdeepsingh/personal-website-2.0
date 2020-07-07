import React from "react"
import Header from "./header"
import "../sass/styles.scss"

const Layout = ({children}) => {
    return (
        <>
            <Header />
            <main>
                <div className="body">                    
                    {children}                    
                </div>
                <aside>
                    <h2 className="title">Remote Web Developer</h2>
                    <a href="mailto:navdeep.er@gmail.com" className="contact">navdeep.er@gmail.com</a>
                </aside>
            </main>            
        </>
    )
}

export default Layout;
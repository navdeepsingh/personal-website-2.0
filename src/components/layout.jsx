import React from "react"
import Header from "./header"
import "../sass/styles.scss"

const Layout = ({children}) => {
    return (
        <>
            
            <main>
                <div className="body">                    
                    {children}                    
                </div>                
            </main>
            <Header />
            <aside>
                <h2 className="title">Remote Web Developer</h2>
                <a href="mailto:navdeep.er@gmail.com" className="contact">navdeep.er@gmail.com</a>
            </aside>            
        </>
    )
}

export default Layout;
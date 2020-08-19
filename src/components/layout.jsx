import React from "react"
import Header from "./header"
import ProfilePicChanger from "./profilePicChanger"
import "../sass/styles.scss"

const Layout = ({ children }) => {
  return (
    <>
      <main>
        <div className="body">{children}</div>
      </main>
      <Header />
      <aside>
        <ProfilePicChanger />
        <a href="mailto:navdeep.er@gmail.com" className="contact">
          navdeep.er@gmail.com
        </a>
      </aside>
    </>
  )
}

export default Layout

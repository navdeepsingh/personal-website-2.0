import React, { useState } from "react"
import Header from "./Header"
import ProfilePicChanger from "./ProfilePicChanger"
import classNames from "classnames"
import "../sass/styles.scss"

import { defineCustomElements as deckDeckGoHighlightElement } from "@deckdeckgo/highlight-code/dist/loader"
deckDeckGoHighlightElement()

const Layout = props => {
  const [theme, setTheme] = useState("dark")
  const toggleTheme = () => {
    if (theme === "dark") {
      setTheme("bright")
    } else {
      setTheme("dark")
    }
  }

  const bodyClass = classNames({
    container: true,
    bright: theme === "bright",
  })

  return (
    <div className={bodyClass}>
      <main>
        <div className="body">{props.children}</div>
      </main>
      <Header mode={theme} themeSwitcher={toggleTheme} />
      <aside>
        <ProfilePicChanger />
        <a href="mailto:navdeep.er@gmail.com" className="contact">
          navdeep.er@gmail.com
        </a>
      </aside>
    </div>
  )
}

export default Layout

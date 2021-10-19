import React from "react"
import { Link } from "gatsby"
// import DayNightSwitcher from '@bit/navdeepsingh.react-components.ui.day-night-switcher';

const Header = props => {
  return (
    <nav aria-label="Primary">
      <ul className="links">
        <li>
          <Link to={"/"}>About</Link>
        </li>
        <li>
          <Link to={"/blog"}>Blog</Link>
        </li>
        <li>
          <Link to={"/uses"}>Uses</Link>
        </li>
      </ul>
    </nav>
  )
}

export default Header

import React from "react"
import { Link } from "gatsby"

const Header = () => {
    return (
        <nav aria-label="Primary">
            <ul className="links">
                <li>
                    <Link to={'/'}>About</Link>
                </li>                
                <li>
                    <Link to={'/blog'}>Blog</Link>
                </li>                
                <li>
                    <Link to={'/uses'}>Uses</Link>
                </li>
            </ul>
        </nav>
    )
}

export default Header;
import React from "react"
import { Link } from "gatsby"

const Header = () => {
    return (
        <>
            <ul className="links">
                <li>
                    <Link to={'/'}>about</Link>
                </li>
                <li>
                    <Link to={'/work'}>work</Link>
                </li>
                <li>
                    <Link to={'/blog'}>blog</Link>
                </li>                
                <li>
                    <Link to={'/uses'}>uses</Link>
                </li>
            </ul>
        </>
    )
}

export default Header;
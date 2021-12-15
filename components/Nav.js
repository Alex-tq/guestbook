import React from 'react'
import Link from 'next/link'
import navStyles from "../styles/Nav.module.scss"

export default function Nav() {
    return (
        <nav className={navStyles.nav}>
            <ul>
                <li><Link href="/" ><a>Form</a></Link></li>
                <li><Link href="/feed" ><a>Guestbook</a></Link></li>
            </ul>
        </nav>
    )
}

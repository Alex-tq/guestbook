import React from 'react'
import Nav from './Nav'
import Head from 'next/head'

export default function Layout({children}) {
    return (
        <div>
            <Head>
                <title>Guestbook</title>
                <meta charSet="utf-8"></meta>
                <meta name="description" content="NextJS web app to add guests to a list"></meta>
                <meta name="author" content="Alexander Tamarez"></meta>
                <meta name="keywords" content="NextJS, Javascript, CSS"></meta>
                <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
            </Head>
            <Nav/>
            {children}
        </div>
    )
}

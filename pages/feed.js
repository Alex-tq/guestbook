import React from 'react'
import GuestList from '../components/GuestList'
import { server } from '../config'

export default function Feed({guests}) {
    
    return (
        <div className="container">
            {guests.length? <h1>Guest List</h1>: <h1>The guest list is empty</h1>}
            <GuestList guests={guests}/>
        </div>
    )
}

export const getServerSideProps = async () =>{
    const res = await fetch(`${server}/api/guestbook`)
    
    const guests = await res.json()

    return {
        props:{
            guests
        }
    }
}
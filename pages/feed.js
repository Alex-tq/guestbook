import React from 'react'
import GuestList from '../components/GuestList'

export default function Feed({guests}) {
    
    return (
        <div className="container">
            <GuestList guests={guests}/>
        </div>
    )
}

export const getServerSideProps = async () =>{
    const res = await fetch("http://localhost:3000/api/guestbook")
    
    const guests = await res.json()

    return {
        props:{
            guests
        }
    }
}
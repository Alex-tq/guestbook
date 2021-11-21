import React, {useEffect} from 'react'
import GuestList from '../components/GuestList'

export default function Feed({guests}) {
    //console.log(guests[0])
    
    return (
        <div className="container">
            <GuestList guests={guests}/>
        </div>
    )
}

export const getStaticProps = async () =>{
    const res = await fetch("http://localhost:3000/api/guestbook")
    
    const guests = await res.json()

    return {
        props:{
            guests
        }
    }
}

// export const getStaticProps = async () =>{
//     const res = await fetch("https://jsonplaceholder.typicode.com/posts?_limit=20")
    
//     const guests = await res.json()

//     return {
//         props:{
//             guests
//         }
//     }
// }

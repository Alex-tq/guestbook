import React from 'react'
import guestStyles from '../styles/Guest.module.css'
import { server } from '../config'
import { useRouter } from 'next/router'

export default function Guest({name, message, id}) {

    const router = useRouter()

    const refreshData = () =>{
        router.replace(router.asPath)
    }

    const handleDelete = async (id) =>{

        const res = await fetch(`${server}/api/guestbook?id=${id}`,
            {
                method: "DELETE",
        })
        refreshData()
    }

    return (
        <div className={guestStyles.guestCard}> 
            <h4>{name}</h4>
            <p>{message}</p>
            <button onClick={()=>{handleDelete(id)}}>Delete</button>
        </div>
    )
}

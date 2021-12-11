import React from 'react'
import guestStyles from '../styles/Guest.module.css'

export default function Guest({name, message, id}) {

    const handleDelete = async (e) =>{
        const res = await fetch(`${server}/api/guestbook`,
            {
                method: "DELETE",
                body: id,
                headers: {
                    'Content-Type': 'application/json'
            }
        })
            
        
    }

    return (
        <div className={guestStyles.guestCard}> 
            <h4>{name}</h4>
            <p>{message}</p>
            <button onClick={handleDelete}>Delete</button>
        </div>
    )
}

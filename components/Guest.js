import React from 'react'
import guestStyles from '../styles/Guest.module.css'

export default function Guest({name, message}) {
    return (
        <div className={guestStyles.guestCard}> 
            <h4>{name}</h4>
            <p>{message}</p>
        </div>
    )
}

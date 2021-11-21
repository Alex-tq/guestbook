import React from 'react'
import guestStyles from '../styles/Guest.module.css'

export default function Guest({name}) {
    return (
        <div className={guestStyles.guestCard}> 
            <h4>{name}</h4>
        </div>
    )
}

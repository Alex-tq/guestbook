import React from 'react'
import Guest from './Guest'

export default function GuestList({guests}) {
    return (
        <div>
            
            {guests.map(guest => <Guest key={guest.id} id={guests.id} name={guest.name} message={guest.message}/>)}
        </div>
    )
}

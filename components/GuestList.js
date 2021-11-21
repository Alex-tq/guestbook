import React from 'react'
import Guest from './Guest'

export default function GuestList({guests}) {
    return (
        <div>
            
            {guests.map(guest => <Guest key={guest.id} name={guest.title}/>)}
        </div>
    )
}

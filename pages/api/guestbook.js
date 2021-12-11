import {guests} from "../../data/guests"

export default function handler (req, res){
    try{
        if(req.method === 'GET'){
            res.status(200).json(guests)
        } else if (req.method === "POST"){
            const guest = req.body
            const newGuest = {
                name: guest.name,
                message: guest.message,
                id: Date.now()
            }
            guests.push(newGuest)
            res.status(201).json(newGuest)
        }
        else if(req.method === "DELETE"){
        
            const id = req.query.id
            const index = guests.findIndex(obj => obj.id == id)
            const removed = guests.splice(index, 1)
            res.status(200).json(removed)
        }

    }catch(e){
        console.error(e)
    }
}
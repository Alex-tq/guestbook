import guests from "../../data/guests"

export default function handler (req, res){
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

        console.log(guests)
        res.status(201).json(newGuest)
    }
}
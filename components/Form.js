import React, {useState} from 'react'
import formStyles from '../styles/Form.module.css'


export default function Form(props) {
    const [formData, setFormData] = useState({name: '', message: ""})
    

    const handleSubmit = async (e) => {
        e.preventDefault()
        const [name, value] = e.target
        if(formData.name && formData.message){
            //console.log(formData)
            const res = await fetch("http://localhost:3000/api/guestbook",
            {
                method: "POST",
                body: JSON.stringify(formData),
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            const data = await res.json()
            console.log(data)
        }
        else{
            console.log("missing fields")
        }
        setFormData({name: '', message: ''})
        
    }
    const handleChange = (e)=>{
        const {name, value} = e.target
        setFormData(prev =>{
            return {
                ...prev,
                [name]:value
            }
        })
    }

    return (
        <form className={formStyles.form} onSubmit={handleSubmit}>
            <h3>Add your name and message</h3>
            <div className="field">
               
                <input 
                    type="text" 
                    value={formData.name} 
                    name="name" 
                    placeholder="Name"
                    onChange={handleChange}
                />
            </div>
            <div className="field">
                
                <textarea 
                    type="text" 
                    value={formData.message} 
                    name="message" 
                    placeholder="message"
                    onChange={handleChange}
                />
            </div>
            
            <button className="button" type="submit">Submit</button>
        </form>
    )
}

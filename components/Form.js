import React, {useState} from 'react'
import formStyles from '../styles/Form.module.scss'
import { server as serverUrl } from '../config'


export default function Form(props) {
    const [formData, setFormData] = useState({name: '', message: ""})
    const [submitMessage, setSubmitMessage] = useState({message: '', type: ''})
    

    const handleSubmit = async (e) => {
        e.preventDefault()
        const { name, message } = formData
        setFormData({name: '', message: ''})
        if(name && message){
            setSubmitMessage({message:'Guest Submitted', type: "success"})
            try{
                const res = await fetch(`${serverUrl}/api/guestbook`,
                {
                    method: "POST",
                    body: JSON.stringify({name: name, message: message}),
                    headers: {
                        'Content-Type': 'application/json'
                    }
                })

            } catch (err){
                console.log(err)
            }
        }
        else{
            setSubmitMessage({message:'Missing Fields', type: "error"})
        }
        
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
            <h3>Add guest name and message</h3>
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
                    placeholder="Message"
                    onChange={handleChange}
                />
            </div>
            {submitMessage.message? <h2 className={`${submitMessage.type}`}>{submitMessage.message}</h2>:''}
            <button className="button" type="submit">Submit</button>
        </form>
    )
}

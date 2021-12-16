import React, {useState} from 'react'
import formStyles from '../styles/Form.module.scss'
import { server } from '../config'


export default function Form(props) {
    const [formData, setFormData] = useState({name: '', message: ""})
    const [submitMessage, setSubmitMessage] = useState({message: '', type: ''})
    

    const handleSubmit = async (e) => {
        e.preventDefault()
        if(formData.name && formData.message){
            try{
                const res = await fetch(`${server}/api/guestbook`,
                {
                    method: "POST",
                    body: JSON.stringify(formData),
                    headers: {
                        'Content-Type': 'application/json'
                    }
                })
                setSubmitMessage({message:'Guest Submitted', type: "success"})

            } catch (err){
                console.log(err)
            }
        }
        else{
            setSubmitMessage({message:'Missing Fields', type: "error"})
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

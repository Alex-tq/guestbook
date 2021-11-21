import React, {useState} from 'react'
import formStyles from '../styles/Form.module.css'


export default function Form(props) {
    const [formData, setFormData] = useState({name: '', message: ""})
    

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(formData)
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

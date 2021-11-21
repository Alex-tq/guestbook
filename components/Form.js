import React, {useState} from 'react'
import formStyles from '../styles/Form.module.css'


export default function Form(props) {
    const [name, setName] = useState('')
    const [message, setMessage] = useState('')

    return (
        <form class={formStyles.form}>
            <div className="field">
               
                <input type="text" name="name" placeholder="Name"/>
            </div>
            <div className="field">
                
                <textarea type="text" name="message" placeholder="message"/>
            </div>
            
            <button class="button" type="submit">Submit</button>
        </form>
    )
}

import React, {useState} from 'react'

export default function Contact() {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleInputChange = (e) => {
        const {field, value} = e.target;
        if (field === 'name') {
            return setName(value)
        } else if (field === 'email') {
            return setEmail(value)
        } else if (field === 'message') {
            return setMessage(value)
        }
    }

    const handleFormSubmit = (e) => {
        e.preventDefault();
        alert(`Message sent!`)
        setName('');
        setEmail('');
        setMessage('');
    }

    return (
        <div>
            <p>Please contact me through the form below.</p>
            <form className="form">
                <input 
                value={name}
                name="name"
                onChange={handleInputChange}
                type="text"
                placeholder="name"
                />
                <input 
                value={email}
                name="email"
                onChange={handleInputChange}
                type="text"
                placeholder="email"
                />
                <input 
                value={message}
                name="message"
                onChange={handleInputChange}
                type="text"
                placeholder="message"
                />
                <button type="button" onClick={handleFormSubmit}>
                    Submit
                </button>
            </form>
        </div>
    )
    
}
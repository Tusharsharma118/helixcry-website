import React,{useState} from 'react'
import "../styles/contact.scss"

function Contact() {

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [message, setMessage] = useState("")

    const submit = (e) => {
        e.preventDefault();
        alert(`
            Name: ${name}
            Email: ${email}
            Message: ${message}
        `)
        setName('')
        setEmail('')
        setMessage('')
    }

    console.log(name+" "+email+" "+message);
    return (
        <>
        <section id="contact" className="contact-container">
            <h1 className="contact-head">Contact</h1>
            <form onSubmit={submit} className="contact-content">
                <ul>
                    <li>
                        <label htmlFor="Name">Full Name</label>
                        <input placeholder="Enter Your Name" value={name} onChange={(e)=>setName(e.target.value)}/>
                    </li>
                    <li>
                        <label htmlFor="Email">Email Id</label>
                        <input placeholder="Enter Your Email" value={email} onChange={(e)=>setEmail(e.target.value)}/>
                    </li>
                    <li>
                        <label htmlFor="Message">Message</label>
                        <textarea placeholder="Message" value={message} onChange={(e)=>setMessage(e.target.value)}/>
                    </li>
                    <li>
                     <input type="submit" value="submit" className="contact-button"/>
                    </li>
                </ul>               
            </form>
        </section>
        </>
    )
}

export default Contact
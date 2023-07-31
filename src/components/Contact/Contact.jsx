import React from 'react'
import emailjs from '@emailjs/browser'
import { useRef, useState } from 'react'
import { useContext } from 'react'
import { themeContext } from '../../Context'
import './Contact.css'

const Contact = () => {

    const form = useRef();
    const [Done, setDone] = useState(false);
    const [message, setMessage] = useState({
        user_name: "",
        user_email: "",
        user_message: ""
    })

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_n416ckw', 'template_ategqfr', form.current, 'n_0yRyOosG6NRSy7n')
            .then((result) => {
                console.log(result.text);
                setDone(true);
                setMessage({
                    user_name: "",
                    user_email: "",
                    user_message: ""
                })
            }, (error) => {
                console.log(error.text);
            });
    }

    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;

    return (
        <div className="contact_form" id='Contact'>
            <div className="app_left">
                <div className="contact_name">
                    <span style={{ color: darkMode ? 'white' : '' }}>Get in touch</span>
                    <span>Contact me</span>
                    <div className="blur blur-left"></div>
                </div>
            </div>
            <div className="app_right">
                <form ref={form} onSubmit={sendEmail}>
                    <input type="text"
                        placeholder='Name'
                        className='user'
                        name='user_name'
                        value={message.user_name}
                        onChange={(e) => setMessage({ ...message, user_name: e.target.value })} />
                    <input type="email"
                        name="user_email"
                        placeholder='Email'
                        className='user'
                        value={message.user_email}
                        onChange={(e) => setMessage({ ...message, user_email: e.target.value })} />
                    <textarea name="user_message"
                        placeholder='message'
                        className='user'
                        value={message.user_message}
                        onChange={(e) => setMessage({ ...message, user_message: e.target.value })} />
                    <input type="submit" value='Send' className='button' />
                    <span>{Done && "Thanks for contacting me!"}</span>
                    <div className="blur blur-right"></div>
                </form>
            </div>
        </div>
    )
}

export default Contact;

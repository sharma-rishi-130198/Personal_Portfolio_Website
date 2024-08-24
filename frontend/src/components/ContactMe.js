import React, { useState, useEffect } from 'react';
import '../App.css'; 

const ContactMe = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [responseMessage, setResponseMessage] = useState(''); 
    const [isError, setIsError] = useState(false); 
    const [fadeOut, setFadeOut] = useState(false); 

    const handleSubmit = (e) => {
        e.preventDefault();
        fetch('http://localhost:8000/api/contact/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ name, email, message }),
        })
            .then(response => response.json())
            .then(data => {
                setResponseMessage(data.message || 'Message sent successfully!');
                setIsError(false); 
                setName('');
                setEmail('');
                setMessage('');
                setFadeOut(false); 
                
                setTimeout(() => {
                    setFadeOut(true);
                    setTimeout(() => setResponseMessage(''), 1000); 
                }, 5000);
            })
            .catch(error => {
                console.error('Error:', error);
                setResponseMessage('There was an error sending your message.');
                setIsError(true); 
                setFadeOut(false); 
                
                setTimeout(() => {
                    setFadeOut(true);
                    setTimeout(() => setResponseMessage(''), 1000); 
                }, 5000);
            });
    };

    return (
        <div className="contact-me">
            <h2>Drop a Message</h2>
            <form className="contact-form" onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Your Name"
                    className="contact-input"
                />
                <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Your Email"
                    className="contact-input"
                />
                <textarea
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Your Message"
                    className="contact-textarea"
                />
                <button type="submit" className="contact-button">Send Message</button>
            </form>
            {responseMessage && (
                <div className={`response-message ${isError ? 'error' : ''} ${fadeOut ? 'fade-out' : ''}`}>
                    {responseMessage}
                </div>
            )}
        </div>
    );
};

export default ContactMe;

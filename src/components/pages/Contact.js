import React from 'react';
import '../../styles/Contact.css';
import ContactImage from '../../assets/fooda.jpeg';

function contact() {
    return (
        <div className="contact"> 
            <div className="leftSide" style={{backgroundImage:`url(${ContactImage})`}}>
            </div>
            <div className="rightSide">
                <h1>Contact Us</h1>
                <form id="contact-form" method="POST">
                    <lable htmlFor="name" style={{color:"grey"}}>Full Name</lable>
                    <input name="name" type="text" placeholder="Enter your Name" />
                    <label htmlFor="email">Email</label>
                    <input name="email" type="email" placeholder="Enter email address" />
                    <label htmlFor="message">Message</label>
                    <textarea name="message" rows="7" placeholder="Enter your message "></textarea>
                    <button type="submit">Send Message</button>
                </form>
       
            </div>
        </div>
    )
}

export default contact
 

import React from 'react'
import { useRef } from 'react';
import './contact.css'
import emailjs from '@emailjs/browser';





function Contact(){

  
    const form = useRef();
  
    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm("service_d9lg6hx","template_t3z5kud", form.current,"BUWHrEaq_4zq0jtYc")
        .then((result) => {
            console.log(result.text);
            e.target.reset();
            alert("Email sent successfully !");
        }, (error) => {
            console.log(error.text);
        });
    };
  return (
    <section id="contact">
      <h2 className="contact_heading">Contact Me</h2>
      <p className="contact_desc">Please fill out the form below to directly connect with me</p>
      <form  className="contact_form" ref={form} onSubmit={sendEmail} >
        <input type="text" className="name" name="from_name" placeholder='Your Name'/>
        <input type="email" className="email" name="from_email" placeholder='Your Email' />
        <textarea className="message" name="message"  rows="10" placeholder='Type Here'></textarea>
        <button type='submit' value='Send' className="submit_btn">Submit</button>
      </form>
    </section>
  )
}



export default Contact
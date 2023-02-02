import React from 'react'
import './contact.css';
import {MdOutlineEmail} from 'react-icons/md'
import {BsWhatsapp} from 'react-icons/bs'

const Contact = () => {
  return (
    <section id='contact' >
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>
      <div className="container contact__options">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail className='contact__option-icon'/>
            <h4>Email</h4>
            <h5>elmsceyda@gmail.com</h5>
            <a href='mailto:elmsceyda@gmail.com' target="_blank" rel="noreferrer" >Send a mail</a>
          </article>
          <article className="contact__option">
            <BsWhatsapp className='contact__option-icon'/>
            <h4>WhatsApp</h4>
            <h5>5455354383</h5>
            <a href="https://wa.me/5455354383" target="_blank" rel="noreferrer">Send a message</a>
          </article>
        </div>
      <form action="">
        <input type="text" name='name' placeholder='Your Full name' required />
        <input type="email" name='email' placeholder='Your Email' required />
        <textarea name="message" rows="7" placeholder='Your Message'></textarea>
        <button type='submit' className='btn btn-primary'>Send Message</button>
      </form>

      </div>
    </section>
  )
}

export default Contact
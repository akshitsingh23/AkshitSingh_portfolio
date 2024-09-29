import React from 'react'
import { useRef } from 'react';
import emailjs from 'emailjs-com';
import "./contact.css";
import { AiOutlineMail } from 'react-icons/ai';
import { RiMessengerLine } from 'react-icons/ri';
import { AiOutlineWhatsApp } from 'react-icons/ai';

const Contact = () => {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_1ml2bmi', 'template_ni2e0qm', form.current, 'Udv0L8VcHA4-qFbVn')
    e.target.reset();
  };

  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className='container contact__container'>
        <div className='contact__options '>
          <article className='contact__option flex justify-center items-center grid grid-cols-1'>
            <AiOutlineMail className='contact__option-icon' />
            <h4>Email</h4>
            <h5>singhakshit2k3@gmail.com</h5>
            <a href='mailto:singhakshit2k3@gmail.com' target='_blank' rel="noreferrer">Send a Message</a>
          </article>

          <article className='contact__option'>
            <RiMessengerLine className='contact__option-icon' />
            <h4>Messenger</h4>
            <h5>Akshit Singh</h5>
            <a href='https://m.me/iam.shreyasthana' target='_blank' rel="noreferrer" >Send a Message</a>
          </article>

          <article className='contact__option'>
            <AiOutlineWhatsApp className='contact__option-icon' />
            <h4>WhatsApp</h4>
            <h5>+91-87006-25101</h5>
            <a href='https://api.whatsapp.com/send?phone=918700625101' target='_blank' rel="noreferrer">Send a Message</a>
          </article>
        </div>
        {/*............ Contact Options End ...........*/}
        <div className='text-black font-mono text-white' id='form'>
          <form ref={form} onSubmit={sendEmail} className=''>
            <input  className='p-2 uppercase' type='text' name='name' placeholder='Your Full Name' required />
            <input type='email' className='p-2 lowercase' name='email' placeholder='Your Email' required />
            <textarea name='message' className='p-2' rows='7' placeholder='Your Message' required ></textarea>
            <button type='submit' className='btn'>Send Message</button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Contact
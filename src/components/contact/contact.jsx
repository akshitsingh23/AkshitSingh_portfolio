import React, { useRef, useState } from 'react';
import "./contact.css";
import { AiOutlineMail } from 'react-icons/ai';
import { RiMessengerLine } from 'react-icons/ri';
import { AiOutlineWhatsApp } from 'react-icons/ai';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Contact = () => {

  const form = useRef();
  const [status, setStatus] = useState('');
  const sendEmail = async (e) => {
    e.preventDefault();

    const formData = {
      name: e.target.name.value,
      email: e.target.email.value,
      message: e.target.message.value,
    };

    try {
      const response = await fetch('https://your-vercel-deployment-url/api/sendEmail', { // Update the URL to match your Vercel deployment
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus('Message sent successfully');
        alert('Message sent successfully');
        e.target.reset();
      } else {
        setStatus('Failed to send message');
        alert('Failed to send message');
      }
    } catch (error) {
      console.error('Error sending email:', error);
      setStatus('Error occurred. Please try again later.');
      alert('Error occurred. Please try again later.');
    }
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
        <div className='font-mono text-white' id='form'>
          <form ref={form} onSubmit={sendEmail} className=''>
            <input className='p-2 uppercase' type='text' name='name' placeholder='Your Full Name' required />
            <input type='email' className='p-2 lowercase' name='email' placeholder='Your Email' required />
            <textarea name='message' className='p-2' rows='7' placeholder='Your Message' required ></textarea>
            <button type='submit' className='btn'>Send Message</button>
          </form>
          {/* {status && <p>{status}</p>} */}
        </div>
      </div>
    </section>
  );
}

export default Contact;

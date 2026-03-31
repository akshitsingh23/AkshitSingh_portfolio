import React, { useState } from 'react';
import './contact.css';
import { AiOutlineMail, AiOutlineWhatsApp } from 'react-icons/ai';
import { CONTACT } from '../../data';

const options = [
  {
    icon: <AiOutlineMail />,
    label: 'Email',
    title: 'singhakshit2k3@gmail.com',
    sub: 'Typically replies within a day',
    href: 'mailto:singhakshit2k3@gmail.com',
  },
  {
    icon: <AiOutlineWhatsApp />,
    label: 'WhatsApp',
    title: '+91-87006-25101',
    sub: 'Chat anytime',
    href: 'https://api.whatsapp.com/send?phone=918700625101',
  },
];

const INITIAL = { name: '', email: '', phone: '', message: '' };

const Contact = () => {
  const [form, setForm] = useState(INITIAL);
  const [status, setStatus] = useState('idle');
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus('sending');

    try {
      const formData = new FormData();

      formData.append(CONTACT.FIELDS.name, form.name);
      formData.append(CONTACT.FIELDS.email, form.email);
      formData.append(CONTACT.FIELDS.phone, form.phone);
      formData.append(CONTACT.FIELDS.message, form.message);

      await fetch(CONTACT.FORM_ACTION, {
        method: 'POST',
        mode: 'no-cors',
        body: formData,
      });

      setStatus('success');
      setForm(INITIAL);
    } catch {
      setStatus('error');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="contact-section">
      <p className="contact-eyebrow">Get In Touch</p>
      <h2 className="contact-heading">Contact</h2>

      <div className="contact-container">
        
        {/* LEFT SIDE */}
        <div className="contact-options">
          {options.map((opt) => (
            <a
              key={opt.label}
              href={opt.href}
              target="_blank"
              rel="noreferrer"
              className="contact-card"
            >
              <div className="contact-icon">{opt.icon}</div>
              <div>
                <p className="contact-label">{opt.label}</p>
                <p className="contact-title">{opt.title}</p>
                <p className="contact-sub">{opt.sub}</p>
              </div>
            </a>
          ))}

          <div className="contact-availability">
            <p className="availability-title">🟢 Available for work</p>
            <p className="availability-text">
              Open to freelance projects, collaborations, and full-time opportunities.
            </p>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="contact-form-card">
          <h3 className="form-title">
            <span className="dot" /> Send a Message
          </h3>

          <form onSubmit={handleSubmit}>
            <div className="row">
              <input
                type="text"
                name="name"
                placeholder="Your name"
                required
                value={form.name}
                onChange={handleChange}
              />
              <input
                type="email"
                name="email"
                placeholder="you@example.com"
                required
                value={form.email}
                onChange={handleChange}
              />
            </div>

            <input
              type="tel"
              name="phone"
              placeholder="+91-00000-00000"
              value={form.phone}
              onChange={handleChange}
            />

            <textarea
              name="message"
              placeholder="Tell me about your project..."
              required
              value={form.message}
              onChange={handleChange}
            />

            <button type="submit" disabled={loading}>
              {loading ? 'Sending…' : 'Send Message'}
            </button>

            {status === 'success' && (
              <p className="success">✓ Message sent!</p>
            )}
            {status === 'error' && (
              <p className="error">✗ Something went wrong</p>
            )}
          </form>
        </div>

      </div>
    </section>
  );
};

export default Contact;
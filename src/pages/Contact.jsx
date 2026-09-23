import { useState } from 'react'
import { useScrollReveal } from '../hooks'

export default function Contact() {
  const ref = useScrollReveal()
  const [formData, setFormData] = useState({
    name: '', email: '', phone: '', service: '', message: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 5000)
  }

  return (
    <div ref={ref}>
      {/* PAGE HERO */}
      <section className="page-hero page-hero-sm">
        <div className="page-hero-bg">
          <img src="/images/hero-bg.jpg" alt="Contact Us" />
        </div>
        <div className="page-hero-content">
          <span className="section-label">Contact Us</span>
          <h1>Let's Build Together<span className="dot">.</span></h1>
          <p>Get in touch for a customized quote or any enquiries — we're available 24/7.</p>
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section className="contact-section">
        <div className="container">
          <div className="contact-grid">
            {/* FORM */}
            <div className="contact-form-wrapper reveal-left">
              <h2 className="section-title">Send Us a Message<span className="dot">.</span></h2>
              <p className="section-subtitle" style={{ marginBottom: '32px' }}>Fill in the form below and our team will get back to you within 24 hours.</p>

              {submitted ? (
                <div className="form-success">
                  <i className="fas fa-check-circle"></i>
                  <h3>Thank You!</h3>
                  <p>Your message has been sent successfully. We'll get back to you shortly.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="contact-form">
                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="name">Full Name *</label>
                      <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required placeholder="Your full name" />
                    </div>
                    <div className="form-group">
                      <label htmlFor="email">Email Address *</label>
                      <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required placeholder="your@email.com" />
                    </div>
                  </div>
                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="phone">Phone Number *</label>
                      <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleChange} required placeholder="+91 98765 43210" />
                    </div>
                    <div className="form-group">
                      <label htmlFor="service">Service Required</label>
                      <select id="service" name="service" value={formData.service} onChange={handleChange}>
                        <option value="">Select a service</option>
                        <option value="telescopic">Telescopic Crane Rental</option>
                        <option value="farana">Farana / Pick-N-Carry Crane</option>
                        <option value="boomlift">Boom Lift Rental</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                  </div>
                  <div className="form-group">
                    <label htmlFor="message">Your Message *</label>
                    <textarea id="message" name="message" rows="5" value={formData.message} onChange={handleChange} required placeholder="Tell us about your project requirements..."></textarea>
                  </div>
                  <button type="submit" className="btn btn-primary btn-lg">
                    <i className="fas fa-paper-plane"></i> Send Message
                  </button>
                </form>
              )}
            </div>

            {/* CONTACT INFO */}
            <div className="contact-info-wrapper reveal-right">
              <div className="contact-info-card">
                <h3>Get in Touch</h3>
                <div className="contact-info-item">
                  <div className="contact-info-icon"><i className="fas fa-phone-alt"></i></div>
                  <div>
                    <strong>Phone</strong>
                    <p>+91 98194 13664</p>
                    <p>+91 77382 87315</p>
                  </div>
                </div>
                <div className="contact-info-item">
                  <div className="contact-info-icon"><i className="fas fa-envelope"></i></div>
                  <div>
                    <strong>Email</strong>
                    <p>deepakcrane@gmail.com</p>
                  </div>
                </div>
                <div className="contact-info-item">
                  <div className="contact-info-icon"><i className="fas fa-map-marker-alt"></i></div>
                  <div>
                    <strong>Head Office</strong>
                    <p>Maharashtra, India</p>
                  </div>
                </div>
                <div className="contact-info-item">
                  <div className="contact-info-icon"><i className="fas fa-clock"></i></div>
                  <div>
                    <strong>Working Hours</strong>
                    <p>24/7 — Always Available</p>
                  </div>
                </div>
              </div>

              <a href="https://wa.me/919819413664" target="_blank" rel="noopener noreferrer" className="whatsapp-btn">
                <i className="fab fa-whatsapp"></i> Chat on WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* MAP */}
      <section className="map-section">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3770.006!2d72.8777!3d19.0760!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTnCsDA0JzMzLjYiTiA3MsKwNTInMzkuNyJF!5e0!3m2!1sen!2sin!4v1234567890"
          width="100%"
          height="450"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          title="Deepak Crane Service Location"
        ></iframe>
      </section>
    </div>
  )
}

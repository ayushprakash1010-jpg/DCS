import { Link } from 'react-router-dom'
import { useScrollReveal } from '../hooks'
import SEO from '../components/SEO'

const clientCategories = [
  {
    category: 'Construction & Infrastructure',
    clients: ['L&T Construction', 'AFCONS', 'HCC', 'NCC Limited', 'Gawar Construction', 'Tata Projects', 'J. Kumar Infraprojects', 'Shapoorji Pallonji', 'Eagle Infra', 'Tricon'],
  },
  {
    category: 'Engineering, Power & Energy',
    clients: ['Kalpataru', 'Sterling & Wilson', 'URB Engg', 'Welspun Michigan'],
  },
  {
    category: 'Real Estate & Hospitality',
    clients: ['Nesco', 'Chalet Hotels'],
  },
  {
    category: 'Other Sectors',
    clients: ['Gypsum Structural India', 'ITD Cem'],
  },
]

const testimonials = [
  {
    text: "Deepak Crane Service has been our go-to partner for all heavy lifting operations at our steel plant. Their equipment is always in top condition and operators are highly skilled.",
    author: "Project Manager",
    company: "Leading Steel Manufacturer",
  },
  {
    text: "We've worked with DCS on multiple refinery shutdown projects. Their 24/7 availability and on-time mobilization is unmatched in the industry.",
    author: "Site Engineer",
    company: "Oil & Gas Company",
  },
  {
    text: "Reliable, safe, and cost-effective. Deepak Crane Service delivers what they promise, every single time. Highly recommended for any heavy lifting needs.",
    author: "Construction Head",
    company: "Infrastructure Corporation",
  },
]

export default function Clients() {
  const ref = useScrollReveal()

  return (
    <div ref={ref}>
      <SEO 
        title="Our Clients" 
        description="Deepak Crane Service is trusted by industry leaders including L&T Construction, Tata Projects, AFCONS, and Shapoorji Pallonji for complex lifting projects across India." 
        url="/clients" 
      />
      {/* PAGE HERO */}
      <section className="page-hero">
        <div className="page-hero-bg">
          <img src="/images/hero-bg.jpg" alt="Our Clients" />
        </div>
        <div className="page-hero-content">
          <span className="section-label">Our Clients</span>
          <h1>Trusted by Industry Giants<span className="dot">.</span></h1>
          <p>Serving 50+ major corporations across steel, cement, oil & gas, power, and construction sectors.</p>
        </div>
      </section>

      {/* CLIENTS BY CATEGORY */}
      <section className="clients-categories">
        <div className="container">
          <div className="why-us-header reveal">
            <span className="section-label">Our Partners</span>
            <h2 className="section-title">Industries We Serve<span className="dot">.</span></h2>
            <p className="section-subtitle">From steel plants to oil refineries, our cranes power India's most critical infrastructure projects.</p>
          </div>
          {clientCategories.map((cat, i) => (
            <div className="client-category reveal" key={i} style={{ transitionDelay: `${0.1 * i}s` }}>
              <h3 className="client-category-title">
                <i className="fas fa-industry"></i> {cat.category}
              </h3>
              <div className="client-category-grid">
                {cat.clients.map((name, j) => (
                  <div className="client-logo-card" key={j}>
                    <span>{name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="testimonials-section">
        <div className="container">
          <div className="why-us-header reveal">
            <span className="section-label">Testimonials</span>
            <h2 className="section-title" style={{ color: 'var(--white)' }}>What Our Clients Say<span className="dot">.</span></h2>
          </div>
          <div className="testimonials-grid">
            {testimonials.map((t, i) => (
              <div className="testimonial-card reveal" key={i} style={{ transitionDelay: `${0.15 * (i + 1)}s` }}>
                <div className="testimonial-quote"><i className="fas fa-quote-left"></i></div>
                <p>{t.text}</p>
                <div className="testimonial-author">
                  <div className="testimonial-avatar"><i className="fas fa-user"></i></div>
                  <div>
                    <strong>{t.author}</strong>
                    <span>{t.company}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-banner">
        <div className="container">
          <h2 className="reveal">Join Our Growing List of Partners<span style={{ color: 'var(--gold)' }}>.</span></h2>
          <p className="reveal">Experience the DCS difference — reliability, safety, and precision for every project.</p>
          <div className="reveal" style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link to="/contact" className="btn btn-primary"><i className="fas fa-handshake"></i> Partner With Us</Link>
          </div>
        </div>
      </section>
    </div>
  )
}

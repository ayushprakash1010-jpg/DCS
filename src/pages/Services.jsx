import { Link } from 'react-router-dom'
import { useScrollReveal } from '../hooks'

const services = [
  {
    id: 'telescopic',
    title: 'Truck-Mounted Telescopic Cranes',
    badge: '15–350 MT',
    image: '/images/crane-telescopic.jpg',
    description: 'Our truck-mounted telescopic cranes are the backbone of heavy industrial lifting. With capacities ranging from 15MT to 350MT, these cranes are ideal for:',
    features: ['Steel plant erection & maintenance', 'Refinery shutdowns & turnarounds', 'Heavy module & equipment lifting', 'Bridge & flyover construction', 'Power plant installation'],
    specs: [
      { label: 'Capacity Range', value: '15MT – 350MT' },
      { label: 'Boom Length', value: 'Up to 60m' },
      { label: 'Mobility', value: 'Road-transportable' },
      { label: 'Setup Time', value: '30–60 minutes' },
    ],
  },
  {
    id: 'farana',
    title: 'Farana / Pick-N-Carry Cranes',
    badge: '8–20 MT',
    image: '/images/crane-farana.jpg',
    description: 'Versatile and compact, our Farana cranes are the ideal choice for material handling and lifting in tight spaces. They combine lifting power with mobility:',
    features: ['Factory floor material handling', 'Plant site equipment shifting', 'Warehouse loading/unloading', 'Confined space operations', 'Quick setup and repositioning'],
    specs: [
      { label: 'Capacity Range', value: '8MT – 20MT' },
      { label: 'Type', value: 'Pick-N-Carry' },
      { label: 'Mobility', value: 'Self-propelled' },
      { label: 'Setup Time', value: 'Immediate' },
    ],
  },
  {
    id: 'boomlift',
    title: 'Boom Lifts / MEWPs',
    badge: '18–52m',
    image: '/images/crane-boomlift.jpg',
    description: 'Mobile Elevated Work Platforms provide safe aerial access for maintenance, inspection, and construction at height:',
    features: ['Building facade maintenance', 'Industrial painting & coating', 'Electrical & plumbing work at height', 'Structure inspection', 'Installation of signage & cladding'],
    specs: [
      { label: 'Working Height', value: '18m – 52m' },
      { label: 'Type', value: 'Articulated & Telescopic' },
      { label: 'Platform Capacity', value: '200–300 kg' },
      { label: 'Power', value: 'Diesel / Electric' },
    ],
  },
]

const processSteps = [
  { icon: 'fa-clipboard-list', title: 'Requirement Assessment', desc: 'We understand your project scope, lifting requirements, and site conditions.' },
  { icon: 'fa-route', title: 'Planning & Mobilization', desc: 'Our team plans the optimal equipment, route, and deployment strategy.' },
  { icon: 'fa-hard-hat', title: 'On-Site Operations', desc: 'Skilled operators execute lifts with precision, following strict safety protocols.' },
  { icon: 'fa-truck', title: 'Demobilization', desc: 'Efficient teardown and transport once the job is complete.' },
]

import { useScrollReveal } from '../hooks'
import SEO from '../components/SEO'

export default function Services() {
  const ref = useScrollReveal()

  return (
    <div ref={ref}>
      <SEO 
        title="Our Services" 
        description="We provide comprehensive crane rental services, from heavy lifting and plant erection to customized lifting plans. Explore our specialized services." 
        url="/services" 
      />
      {/* PAGE HERO */}
      <section className="page-hero">
        <div className="page-hero-bg">
          <img src="/images/crane-telescopic.jpg" alt="Crane Services" />
        </div>
        <div className="page-hero-content">
          <span className="section-label">Our Services</span>
          <h1>End-to-End Lifting Solutions<span className="dot">.</span></h1>
          <p>From mobilization to demobilization — we handle every aspect of your heavy lifting needs.</p>
        </div>
      </section>

      {/* SERVICE DETAILS */}
      {services.map((service, index) => (
        <section
          className={`service-detail ${index % 2 !== 0 ? 'service-detail-alt' : ''}`}
          key={service.id}
          id={service.id}
        >
          <div className="container">
            <div className="service-detail-grid">
              <div className={`service-detail-image ${index % 2 !== 0 ? 'reveal-right' : 'reveal-left'}`}>
                <img src={service.image} alt={service.title} />
                <span className="service-card-badge">{service.badge}</span>
              </div>
              <div className={`service-detail-content ${index % 2 !== 0 ? 'reveal-left' : 'reveal-right'}`}>
                <h2 className="section-title">{service.title}<span className="dot">.</span></h2>
                <p className="section-subtitle">{service.description}</p>
                <ul className="service-features">
                  {service.features.map((f, i) => (
                    <li key={i}><i className="fas fa-check-circle"></i> {f}</li>
                  ))}
                </ul>
                <div className="service-specs">
                  {service.specs.map((s, i) => (
                    <div className="spec-item" key={i}>
                      <span className="spec-label">{s.label}</span>
                      <span className="spec-value">{s.value}</span>
                    </div>
                  ))}
                </div>
                <Link to="/contact" className="btn btn-primary" style={{ marginTop: '24px' }}>
                  <i className="fas fa-phone-alt"></i> Get a Quote
                </Link>
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* PROCESS */}
      <section className="process-section">
        <div className="container">
          <div className="why-us-header reveal">
            <span className="section-label">Our Process</span>
            <h2 className="section-title">How We Work<span className="dot">.</span></h2>
            <p className="section-subtitle">A streamlined 4-step process ensuring smooth, safe, and efficient lifting operations.</p>
          </div>
          <div className="process-grid">
            {processSteps.map((step, i) => (
              <div className="process-step reveal" key={i} style={{ transitionDelay: `${0.1 * (i + 1)}s` }}>
                <div className="process-number">{String(i + 1).padStart(2, '0')}</div>
                <div className="process-icon"><i className={`fas ${step.icon}`} style={{ color: 'white' }}></i></div>
                <h3>{step.title}</h3>
                <p>{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-banner">
        <div className="container">
          <h2 className="reveal">Have a Project in Mind<span style={{ color: 'var(--gold)' }}>?</span></h2>
          <p className="reveal">Tell us about your requirements and get a customized quote within 24 hours.</p>
          <div className="reveal" style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link to="/contact" className="btn btn-primary"><i className="fas fa-envelope"></i> Request a Quote</Link>
            <a href="tel:+919819413664" className="btn btn-outline"><i className="fas fa-phone-alt"></i> Call Now</a>
          </div>
        </div>
      </section>
    </div>
  )
}

import { useRef, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useScrollReveal, useCounter } from '../hooks'
import SEO from '../components/SEO'

export default function Home() {
  const sectionRef = useScrollReveal()
  const statsRef = useRef(null)
  useCounter(statsRef)

  // Parallax effect
  useEffect(() => {
    const heroBg = document.querySelector('.hero-bg img')
    if (!heroBg) return
    const handleScroll = () => {
      const scrolled = window.scrollY
      if (scrolled < window.innerHeight) {
        heroBg.style.transform = `translateY(${scrolled * 0.3}px) scale(1.05)`
      }
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div ref={sectionRef}>
      <SEO 
        title="Crane Rental Services in India" 
        description="Deepak Crane Service delivers high-performance crane and boom lift rentals for India's toughest infrastructure and industrial demands. Precision, reliability, and safety — every lift, every time." 
        url="/" 
      />
      {/* HERO */}
      <section className="hero" id="home">
        <div className="hero-bg">
          <img src="/images/hero-bg.webp" alt="Crane at construction site" />
        </div>
        <div className="hero-content">
          <div className="hero-badge">Established 2006 — 19+ Years of Trust</div>
          <h1>Built to <span className="highlight">Lift.</span><br />Trusted to <span className="highlight">Deliver.</span></h1>
          <p>Deepak Crane Service delivers high-performance crane and boom lift rentals for India's toughest infrastructure and industrial demands. Precision, reliability, and safety — every lift, every time.</p>
          <div className="hero-buttons">
            <Link to="/fleet" className="btn btn-primary">
              <i className="fas fa-truck-loading"></i> Explore Our Fleet
            </Link>
            <Link to="/contact" className="btn btn-outline">
              <i className="fas fa-phone-alt"></i> Get a Quote
            </Link>
          </div>
        </div>
        <div className="hero-floating-stats" ref={statsRef}>
          <div className="container">
            <div className="floating-stat">
              <div className="stat-number" data-target="30">0</div>
              <div className="stat-label">Cranes</div>
            </div>
            <div className="floating-stat">
              <div className="stat-number" data-target="250" data-suffix="MT">0</div>
              <div className="stat-label">Max Capacity</div>
            </div>
            <div className="floating-stat">
              <div className="stat-number" data-target="19">0</div>
              <div className="stat-label">Years Experience</div>
            </div>
            <div className="floating-stat">
              <div className="stat-number" data-target="10">0</div>
              <div className="stat-label">Boom Lifts</div>
            </div>
            <div className="floating-stat">
              <div className="stat-number" data-target="20">0</div>
              <div className="stat-label">Farana Cranes</div>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT PREVIEW */}
      <section className="about" id="about">
        <div className="container">
          <div className="about-image reveal-left">
            <img src="/images/about-crane.webp" alt="Deepak Crane Service Operations" loading="lazy" />
            <div className="about-image-accent"></div>
          </div>
          <div className="about-content reveal-right">
            <span className="section-label">About Us</span>
            <h2 className="section-title">Raising India's Industrial Future<span className="dot">.</span></h2>
            <p className="section-subtitle">
              Since 2006, Deepak Crane Service has been a trusted partner in India's infrastructure growth. Under the leadership of <strong>Mr. Gharbharan Shivdas Yadav</strong>, we have built a reputation for delivering precision lifting solutions across steel plants, refineries, power plants, and large-scale construction projects.
            </p>
            <p className="section-subtitle" style={{ marginTop: '16px' }}>
              From cement plants to oil & gas refineries, we bring precision, reliability, and safety to every lift — powering complex operations with confidence and control.
            </p>
            <div className="about-features">
              <div className="about-feature">
                <div className="about-feature-icon"><i className="fas fa-shield-alt" style={{ color: 'white' }}></i></div>
                <div><h4>Safety First</h4><p>Certified operators & equipment</p></div>
              </div>
              <div className="about-feature">
                <div className="about-feature-icon"><i className="fas fa-headset" style={{ color: 'white' }}></i></div>
                <div><h4>24/7 Support</h4><p>Round-the-clock availability</p></div>
              </div>
              <div className="about-feature">
                <div className="about-feature-icon"><i className="fas fa-cogs" style={{ color: 'white' }}></i></div>
                <div><h4>Modern Fleet</h4><p>Well-maintained equipment</p></div>
              </div>
              <div className="about-feature">
                <div className="about-feature-icon"><i className="fas fa-map-marker-alt" style={{ color: 'white' }}></i></div>
                <div><h4>Pan-India Reach</h4><p>Operating across all states</p></div>
              </div>
            </div>
            <Link to="/about" className="btn btn-navy" style={{ marginTop: '32px' }}>Know More</Link>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="services" id="services">
        <div className="container">
          <div className="services-heading reveal">
            <span className="section-label">Our Fleet</span>
            <h2 className="section-title">Powering Projects with Precision<span className="dot">.</span></h2>
            <p className="section-subtitle">With deep industry expertise, Deepak Crane Service delivers cost-effective heavy lifting solutions backed by real-time coordination and on-site precision.</p>
          </div>
          <div className="services-grid">
            <div className="service-card reveal" style={{ transitionDelay: '0.1s' }}>
              <img src="/images/crane-telescopic.webp" alt="Telescopic Cranes" />
              <span className="service-card-badge">15–350 MT</span>
              <div className="service-card-overlay">
                <h3>Truck-Mounted Telescopic Cranes</h3>
                <p>High-capacity telescopic cranes ranging from 15MT to 350MT, ideal for industrial construction, steel erection, and heavy module lifts.</p>
              </div>
            </div>
            <div className="service-card reveal" style={{ transitionDelay: '0.2s' }}>
              <img src="/images/crane-farana.webp" alt="Farana Cranes" />
              <span className="service-card-badge">Pick-N-Carry</span>
              <div className="service-card-overlay">
                <h3>Farana / Pick-N-Carry Cranes</h3>
                <p>Versatile pick-and-carry cranes perfect for confined spaces, material handling, and quick deployment across factory floors and plant sites.</p>
              </div>
            </div>
            <div className="service-card reveal" style={{ transitionDelay: '0.3s' }}>
              <img src="/images/crane-boomlift.webp" alt="Boom Lifts" />
              <span className="service-card-badge">Aerial Access</span>
              <div className="service-card-overlay">
                <h3>Boom Lifts / MEWPs</h3>
                <p>Mobile Elevated Work Platforms for safe aerial access, maintenance operations, painting, and high-altitude inspection tasks.</p>
              </div>
            </div>
          </div>
          <div style={{ textAlign: 'center', marginTop: '48px' }} className="reveal">
            <Link to="/services" className="btn btn-primary">View All Services</Link>
          </div>
        </div>
      </section>

      {/* WHY US */}
      <section className="why-us" id="why-us">
        <div className="container">
          <div className="why-us-header reveal">
            <span className="section-label">Why Choose Us</span>
            <h2 className="section-title">Your Trusted Lifting Partner<span className="dot">.</span></h2>
            <p className="section-subtitle">Every project we take on is a promise of safety, precision, and performance. Here's what sets Deepak Crane Service apart.</p>
          </div>
          <div className="why-us-grid">
            {[
              { icon: 'fa-hard-hat', title: 'Experienced Operators', desc: 'Skilled, certified crane operators with years of hands-on experience in complex industrial environments.' },
              { icon: 'fa-clock', title: 'On-Time Mobilization', desc: 'Rapid deployment and de-mobilization ensuring your project timelines are never compromised.' },
              { icon: 'fa-tools', title: 'Well-Maintained Fleet', desc: 'Regular servicing and inspection protocols keep our entire fleet in peak operating condition.' },
              { icon: 'fa-rupee-sign', title: 'Competitive Pricing', desc: 'Cost-effective rental solutions tailored to your project scale, from single lifts to long-term contracts.' },
            ].map((item, i) => (
              <div className="why-us-card reveal" key={i} style={{ transitionDelay: `${0.1 * (i + 1)}s` }}>
                <div className="why-us-icon"><i className={`fas ${item.icon}`} style={{ color: 'white' }}></i></div>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CLIENTS */}
      <section className="clients" id="clients">
        <div className="container">
          <div className="clients-header reveal">
            <span className="section-label">Our Clients</span>
            <h2 className="section-title">Trusted by Industry Leaders<span className="dot">.</span></h2>
          </div>
        </div>
        <div className="clients-marquee">
          <div className="marquee-track">
            {['L&T Construction', 'Nesco', 'Chalet Hotels', 'AFCONS', 'Gypsum Structural India', 'HCC', 'NCC Limited', 'Welspun Michigan', 'Gawar Construction', 'Tata Projects', 'Kalpataru', 'ITD Cem', 'J. Kumar Infraprojects', 'URB Engg', 'Eagle Infra', 'Sterling & Wilson', 'Tricon', 'Shapoorji Pallonji',
              'L&T Construction', 'Nesco', 'Chalet Hotels', 'AFCONS', 'Gypsum Structural India', 'HCC', 'NCC Limited', 'Welspun Michigan', 'Gawar Construction', 'Tata Projects', 'Kalpataru', 'ITD Cem', 'J. Kumar Infraprojects', 'URB Engg', 'Eagle Infra', 'Sterling & Wilson', 'Tricon', 'Shapoorji Pallonji'
            ].map((name, i) => (
              <div className="client-item" key={i}>{name}</div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-banner" id="contact-cta">
        <div className="container">
          <h2 className="reveal">Need a Crane? Let's Talk<span style={{ color: 'var(--gold)' }}>.</span></h2>
          <p className="reveal">Get in touch with our team for a customized quote. We're available 24/7 for all your heavy lifting needs.</p>
          <div className="reveal" style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href="tel:+919819413664" className="btn btn-primary"><i className="fas fa-phone-alt"></i> Call Now</a>
            <Link to="/contact" className="btn btn-outline"><i className="fas fa-envelope"></i> Contact Us</Link>
          </div>
        </div>
      </section>
    </div>
  )
}

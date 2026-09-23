import { Link } from 'react-router-dom'
import { useScrollReveal } from '../hooks'

export default function About() {
  const ref = useScrollReveal()

  return (
    <div ref={ref}>
      {/* PAGE HERO */}
      <section className="page-hero">
        <div className="page-hero-bg">
          <img src="/images/about-team.jpg" alt="Deepak Crane Service Team" />
        </div>
        <div className="page-hero-content">
          <span className="section-label">About Us</span>
          <h1>Building Trust, One Lift at a Time<span className="dot">.</span></h1>
          <p>19+ years of precision lifting solutions across India's toughest industrial landscapes.</p>
        </div>
      </section>

      {/* COMPANY STORY */}
      <section className="about-story">
        <div className="container">
          <div className="about-story-grid">
            <div className="reveal-left">
              <span className="section-label">Our Story</span>
              <h2 className="section-title">From Humble Beginnings to Industry Leaders<span className="dot">.</span></h2>
              <p className="section-subtitle">
                Founded in <strong>2006</strong> by <strong>Mr. Gharbharan Shivdas Yadav</strong>, Deepak Crane Service began with a single crane and a vision to provide reliable, safe, and efficient heavy lifting solutions.
              </p>
              <p className="section-subtitle" style={{ marginTop: '16px' }}>
                Over 19+ years, we have grown into one of the most trusted crane rental companies in Maharashtra and beyond, operating a fleet of <strong>30+ cranes</strong>, <strong>10+ boom lifts</strong>, and <strong>20+ Farana cranes</strong> with capacities ranging from <strong>15MT to 350MT</strong>.
              </p>
              <p className="section-subtitle" style={{ marginTop: '16px' }}>
                Today, we serve India's largest industrial conglomerates including L&T, Tata Projects, Adani, JSW, and Reliance — powering complex operations at steel plants, oil refineries, cement factories, and power plants.
              </p>
            </div>
            <div className="about-timeline reveal-right">
              <div className="timeline-item">
                <div className="timeline-year">2006</div>
                <div className="timeline-content">
                  <h4>Company Founded</h4>
                  <p>Deepak Crane Service established by Mr. Gharbharan Shivdas Yadav in Maharashtra.</p>
                </div>
              </div>
              <div className="timeline-item">
                <div className="timeline-year">2010</div>
                <div className="timeline-content">
                  <h4>Fleet Expansion</h4>
                  <p>Expanded fleet to 10+ cranes serving major infrastructure projects.</p>
                </div>
              </div>
              <div className="timeline-item">
                <div className="timeline-year">2015</div>
                <div className="timeline-content">
                  <h4>Pan-India Operations</h4>
                  <p>Extended services across multiple states, partnering with L&T and Tata Projects.</p>
                </div>
              </div>
              <div className="timeline-item">
                <div className="timeline-year">2020</div>
                <div className="timeline-content">
                  <h4>30+ Fleet Milestone</h4>
                  <p>Fleet grew to 30+ cranes with capacities up to 250MT, adding boom lifts and Farana cranes.</p>
                </div>
              </div>
              <div className="timeline-item">
                <div className="timeline-year">2025</div>
                <div className="timeline-content">
                  <h4>Industry Leader</h4>
                  <p>Trusted by 50+ major clients across oil & gas, steel, cement, and power sectors.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* VISION & MISSION */}
      <section className="vision-mission">
        <div className="container">
          <div className="vm-grid">
            <div className="vm-card reveal" style={{ transitionDelay: '0.1s' }}>
              <div className="vm-icon"><i className="fas fa-eye" style={{ color: 'white' }}></i></div>
              <h3>Our Vision</h3>
              <p>To be India's most reliable and innovative crane rental service, setting the gold standard in safety, efficiency, and customer satisfaction across all heavy lifting operations.</p>
            </div>
            <div className="vm-card reveal" style={{ transitionDelay: '0.2s' }}>
              <div className="vm-icon"><i className="fas fa-bullseye" style={{ color: 'white' }}></i></div>
              <h3>Our Mission</h3>
              <p>To deliver unmatched lifting solutions through a modern fleet, skilled operators, and 24/7 support — ensuring every project is completed safely, on time, and within budget.</p>
            </div>
            <div className="vm-card reveal" style={{ transitionDelay: '0.3s' }}>
              <div className="vm-icon"><i className="fas fa-heart" style={{ color: 'white' }}></i></div>
              <h3>Our Values</h3>
              <p>Safety. Integrity. Reliability. Customer-first approach. Continuous improvement. These are the pillars that guide every decision we make at Deepak Crane Service.</p>
            </div>
          </div>
        </div>
      </section>

      {/* PROPRIETOR SECTION */}
      <section className="proprietor">
        <div className="container">
          <div className="proprietor-grid">
            <div className="proprietor-image reveal-left">
              <div className="proprietor-placeholder">
                <i className="fas fa-user-tie"></i>
              </div>
            </div>
            <div className="proprietor-content reveal-right">
              <span className="section-label">Leadership</span>
              <h2 className="section-title">Our Proprietor<span className="dot">.</span></h2>
              <h3 style={{ fontFamily: 'var(--font-heading)', color: 'var(--navy)', marginBottom: '16px', fontSize: '1.4rem' }}>Mr. Gharbharan Shivdas Yadav</h3>
              <p className="section-subtitle">
                As the Founder and Proprietor of Deepak Crane Service, Mr. Gharbharan Shivdas Yadav brings extensive industry experience, strong leadership, and a hands-on approach to every project. Under his guidance, the company has grown into a trusted service provider known for reliability, safety, and operational excellence.
              </p>

              <h3 style={{ fontFamily: 'var(--font-heading)', color: 'var(--navy)', marginBottom: '16px', fontSize: '1.4rem', marginTop: '32px' }}>Mr. Deepak Gharbharan Yadav — Project Manager</h3>
              <p className="section-subtitle">
                Mr. Deepak Gharbharan Yadav plays a key role in managing on-site operations and ensuring the smooth execution of all lifting and material-handling activities. With strong technical knowledge and practical field experience, he oversees day-to-day project requirements and coordinates with clients, operators, and site teams for successful project delivery.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-banner">
        <div className="container">
          <h2 className="reveal">Ready to Work with Us<span style={{ color: 'var(--gold)' }}>?</span></h2>
          <p className="reveal">Let's discuss how Deepak Crane Service can power your next project.</p>
          <div className="reveal" style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link to="/contact" className="btn btn-primary"><i className="fas fa-phone-alt"></i> Contact Us</Link>
            <Link to="/fleet" className="btn btn-outline"><i className="fas fa-truck-loading"></i> View Our Fleet</Link>
          </div>
        </div>
      </section>
    </div>
  )
}

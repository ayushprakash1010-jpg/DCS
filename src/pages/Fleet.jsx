import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useScrollReveal } from '../hooks'
import SEO from '../components/SEO'

const equipment = [
  { type: 'Telescopic', name: 'Telescopic Crane 15MT', capacity: '15 MT', boom: '20m', image: '/images/crane-telescopic.jpg' },
  { type: 'Telescopic', name: 'Telescopic Crane 40MT', capacity: '40 MT', boom: '35m', image: '/images/crane-telescopic.jpg' },
  { type: 'Telescopic', name: 'Telescopic Crane 100MT', capacity: '100 MT', boom: '50m', image: '/images/telescopic-100.jpg' },
  { type: 'Telescopic', name: 'Telescopic Crane 250MT', capacity: '250 MT', boom: '60m', image: '/images/telescopic-250.jpg' },
  { type: 'Telescopic', name: 'Telescopic Crane 350MT', capacity: '350 MT', boom: '70m', image: '/images/telescopic-350.jpg' },
  { type: 'Farana', name: 'Farana Crane 8MT', capacity: '8 MT', boom: 'N/A', image: '/images/crane-farana.jpg' },
  { type: 'Farana', name: 'Farana Crane 12MT', capacity: '12 MT', boom: 'N/A', image: '/images/crane-farana.jpg' },
  { type: 'Farana', name: 'Farana Crane 15MT', capacity: '15 MT', boom: 'N/A', image: '/images/farana-15.jpg' },
  { type: 'Farana', name: 'Farana Crane 20MT', capacity: '20 MT', boom: 'N/A', image: '/images/farana-20.jpg' },
  { type: 'Boom Lift', name: 'Boom Lift 18m', capacity: '200 kg', boom: '18m', image: '/images/crane-boomlift.jpg' },
  { type: 'Boom Lift', name: 'Boom Lift 35m', capacity: '250 kg', boom: '35m', image: '/images/boomlift-35.jpg' },
  { type: 'Boom Lift', name: 'Boom Lift 52m', capacity: '300 kg', boom: '52m', image: '/images/crane-boomlift.jpg' },
]

const filterOptions = ['All', 'Telescopic', 'Farana', 'Boom Lift']

const galleryImages = [
  '/images/hero-bg.jpg',
  '/images/crane-telescopic.jpg',
  '/images/crane-farana.jpg',
  '/images/crane-boomlift.jpg',
  '/images/about-crane.jpg',
  '/images/hero-bg.jpg',
]

export default function Fleet() {
  const ref = useScrollReveal()
  const [filter, setFilter] = useState('All')
  const [lightbox, setLightbox] = useState(null)

  const filtered = filter === 'All' ? equipment : equipment.filter((e) => e.type === filter)

  return (
    <div ref={ref}>
      <SEO 
        title="Our Equipment Fleet" 
        description="Browse our extensive fleet of Telescopic Cranes, Farana Cranes, and Boom Lifts. Ranging from 15MT to 350MT capacities, maintained to the highest standards." 
        url="/fleet" 
      />
      {/* PAGE HERO */}
      <section className="page-hero">
        <div className="page-hero-bg">
          <img src="/images/hero-bg.jpg" alt="Fleet" />
        </div>
        <div className="page-hero-content">
          <span className="section-label">Equipment Fleet</span>
          <h1>Our Equipment Catalog<span className="dot">.</span></h1>
          <p>Browse our extensive fleet of cranes and boom lifts — all maintained to the highest standards.</p>
        </div>
      </section>

      {/* FLEET CATALOG */}
      <section className="fleet-catalog">
        <div className="container">
          <div className="fleet-filters reveal">
            {filterOptions.map((f) => (
              <button
                key={f}
                className={`fleet-filter-btn ${filter === f ? 'active' : ''}`}
                onClick={() => setFilter(f)}
              >
                {f}
              </button>
            ))}
          </div>
          <div className="fleet-grid">
            {filtered.map((item, i) => (
              <div className="fleet-card reveal" key={i} style={{ transitionDelay: `${0.05 * i}s` }}>
                <div className="fleet-card-image">
                  <img src={item.image} alt={item.name} />
                  <span className="fleet-card-type">{item.type}</span>
                </div>
                <div className="fleet-card-info">
                  <h3>{item.name}</h3>
                  <div className="fleet-card-specs">
                    <div className="fleet-spec">
                      <i className="fas fa-weight-hanging"></i>
                      <span>{item.capacity}</span>
                    </div>
                    <div className="fleet-spec">
                      <i className="fas fa-arrows-alt-v"></i>
                      <span>{item.boom}</span>
                    </div>
                  </div>
                  <Link to="/contact" className="btn btn-navy btn-sm">Enquire Now</Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* GALLERY */}
      <section className="gallery-section">
        <div className="container">
          <div className="why-us-header reveal">
            <span className="section-label">Gallery</span>
            <h2 className="section-title">Our Cranes in Action<span className="dot">.</span></h2>
          </div>
          <div className="gallery-grid">
            {galleryImages.map((img, i) => (
              <div
                className="gallery-item reveal"
                key={i}
                style={{ transitionDelay: `${0.1 * i}s` }}
                onClick={() => setLightbox(img)}
              >
                <img src={img} alt={`Gallery ${i + 1}`} />
                <div className="gallery-overlay">
                  <i className="fas fa-search-plus"></i>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {lightbox && (
        <div className="lightbox" onClick={() => setLightbox(null)}>
          <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
            <button className="lightbox-close" onClick={() => setLightbox(null)}>
              <i className="fas fa-times"></i>
            </button>
            <img src={lightbox} alt="Gallery fullscreen" />
          </div>
        </div>
      )}

      {/* CTA */}
      <section className="cta-banner">
        <div className="container">
          <h2 className="reveal">Need Specific Equipment<span style={{ color: 'var(--gold)' }}>?</span></h2>
          <p className="reveal">Contact us with your requirements and we'll recommend the perfect crane for your project.</p>
          <div className="reveal" style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link to="/contact" className="btn btn-primary"><i className="fas fa-phone-alt"></i> Contact Us</Link>
          </div>
        </div>
      </section>
    </div>
  )
}

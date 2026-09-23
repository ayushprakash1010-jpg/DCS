import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 80)
    window.addEventListener('scroll', handleScroll)
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setMobileOpen(false)
  }, [location])

  const isActive = (path) => location.pathname === path

  return (
    <header className={`header ${scrolled ? 'scrolled' : ''}`} id="header">
      <div className="container">
        <Link to="/" className="logo">
          <div className="logo-text">D<span>C</span>S</div>
        </Link>
        <nav className={`nav-links ${mobileOpen ? 'active' : ''}`} id="navLinks">
          <Link to="/" className={isActive('/') ? 'active' : ''}>Home</Link>
          <Link to="/about" className={isActive('/about') ? 'active' : ''}>About Us</Link>
          <Link to="/services" className={isActive('/services') ? 'active' : ''}>Services</Link>
          <Link to="/fleet" className={isActive('/fleet') ? 'active' : ''}>Our Fleet</Link>
          <Link to="/clients" className={isActive('/clients') ? 'active' : ''}>Clients</Link>
          <Link to="/contact" className="btn btn-primary">Contact Us</Link>
        </nav>
        <div
          className={`mobile-toggle ${mobileOpen ? 'open' : ''}`}
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </header>
  )
}

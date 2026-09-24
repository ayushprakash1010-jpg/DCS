import { Link } from 'react-router-dom';
import SEO from '../components/SEO';

export default function NotFound() {
  return (
    <div style={{ textAlign: 'center', padding: '120px 20px', minHeight: '60vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
      <SEO title="404 - Page Not Found" description="The page you are looking for does not exist." />
      <h1 style={{ fontSize: '6rem', color: 'var(--navy-dark)', marginBottom: '10px', lineHeight: 1 }}>404</h1>
      <h2 className="section-title" style={{ marginBottom: '20px' }}>Page Not Found<span className="dot">.</span></h2>
      <p style={{ marginBottom: '40px', color: '#718096', maxWidth: '500px', fontSize: '1.1rem' }}>
        Oops! The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
      </p>
      <Link to="/" className="btn btn-primary">
        <i className="fas fa-home"></i> Back to Home
      </Link>
    </div>
  );
}

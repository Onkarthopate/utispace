import { MessageCircle, Mail, Phone, MapPin, Send, CheckCircle } from 'lucide-react';
import {useState} from 'react';

const Instagram = ({ size = 24, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

const LocationContact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: 'Full Home Handover',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.name && formData.email) {
      setSubmitted(true);
      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        service: 'Full Home Handover',
        message: ''
      });
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="contact-section section-padding" style={{ backgroundColor: 'var(--bg-secondary)', borderTop: '1px solid var(--border-color)' }}>
      <div className="container">
        <div className="contact-layout">
          {/* Left: Contact Info & FAQ Accordion info */}
          <div>
            <span className="hero-subtitle">Get In Touch</span>
            <h2 className="serif-title" style={{ fontSize: '3.2rem', marginBottom: '1.5rem' }}>Let’s Co-Create Your Space</h2>
            <p style={{ color: 'var(--text-secondary)', marginBottom: '3rem', fontSize: '1.05rem', maxWidth: '550px' }}>
              Have an upcoming residential or office project in Pune? Contact us to schedule an initial design layout consultation or site measurement tour.
            </p>

            <div className="contact-info-grid">
              <div className="contact-info-card">
                <div className="info-card-label">Visit Us</div>
                <div className="info-card-val" style={{ display: 'flex', gap: '0.5rem', alignItems: 'flex-start' }}>
                  <MapPin size={18} className="gold-text" style={{ flexShrink: 0, marginTop: '0.2rem' }} />
                  <span>Office No C3-312, EPIC Plaza, Kesnand Phata, Wagholi, Pune, Maharashtra 412207</span>
                </div>
              </div>

              <div className="contact-info-card">
                <div className="info-card-label">Contact Details</div>
                <div className="info-card-val" style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                  <a href="tel:+918624052526" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <Phone size={15} className="gold-text" />
                    <span>+91 86240 52526</span>
                  </a>
                  <a href="mailto:utispace01@gmail.com" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <Mail size={15} className="gold-text" />
                    <span>utispace01@gmail.com</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Social Connect links */}
            <div style={{ marginBottom: '2.5rem' }}>
              <h4 style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '1rem' }}>
                Follow our Design Journal
              </h4>
              <div className="social-links">
                <a href="https://instagram.com/utispace_" target="_blank" rel="noopener noreferrer" className="social-icon-btn" aria-label="Instagram">
                  <Instagram size={18} />
                </a>
                <a href="https://wa.me/918624052526" target="_blank" rel="noopener noreferrer" className="social-icon-btn" aria-label="WhatsApp">
                  <MessageCircle size={18} />
                </a>
                <a href="mailto:utispace01@gmail.com" className="social-icon-btn" aria-label="Email">
                  <Mail size={18} />
                </a>
              </div>
            </div>

            {/* Map Preview */}
            <div className="map-container">
              <div className="simulated-map">
                <MapPin className="simulated-map-pin" />
                <div className="simulated-map-label">utispace Studio</div>
                <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>EPIC Plaza, Kesnand Phata, Wagholi, Pune</div>
                </div>
            </div>
          </div>

          {/* Right: Booking / Inquiry Form */}
          <div className="inquiry-form-card">
            <h3 className="inquiry-title serif-title gold-text">Request a Consultation</h3>
            <p className="inquiry-desc">
              Fill in your layout details and our design coordinator will connect with you within 24 hours.
            </p>

            {submitted ? (
              <div style={{ textAlign: 'center', padding: '3rem 0', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem' }}>
                <CheckCircle size={48} className="gold-text" />
                <h4 className="serif-title" style={{ fontSize: '1.5rem' }}>Consultation Request Sent!</h4>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
                  Thank you for reaching out. Neha from our styling desk will coordinate your appointment shortly.
                </p>
                <button className="btn-secondary" style={{ marginTop: '1rem' }} onClick={() => setSubmitted(false)}>
                  Send Another Inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label>Full Name</label>
                  <input 
                    type="text" 
                    name="name"
                    className="form-control" 
                    required 
                    placeholder="Enter name"
                    value={formData.name}
                    onChange={handleChange}
                  />
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label>Email Address</label>
                    <input 
                      type="email" 
                      name="email"
                      className="form-control" 
                      required 
                      placeholder="name@email.com"
                      value={formData.email}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="form-group">
                    <label>Phone Number</label>
                    <input 
                      type="tel" 
                      name="phone"
                      className="form-control" 
                      placeholder="e.g. +91 99999..."
                      value={formData.phone}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label>Space Designing Type</label>
                  <select 
                    name="service"
                    className="form-control" 
                    value={formData.service}
                    onChange={handleChange}
                  >
                    <option value="Full Home Handover">Full Turnkey Home Handover</option>
                    <option value="Office Design">Premium Office / Commercial</option>
                    <option value="Living Room">Living & Dining Area</option>
                    <option value="Bedroom Styling">Bespoke Bedroom Design</option>
                    <option value="Kitchen Remodel">Modern Kitchen Remodeling</option>
                    <option value="General Consultation">1-Hour Consultation Call</option>
                  </select>
                </div>

                <div className="form-group">
                  <label>Project Details / Ambitions</label>
                  <textarea 
                    name="message"
                    rows="4" 
                    className="form-control" 
                    placeholder="Describe your design goals, materials, ideas..."
                    value={formData.message}
                    onChange={handleChange}
                  ></textarea>
                </div>

                <button type="submit" className="btn-primary" style={{ width: '100%', justifyContent: 'center', marginTop: '1rem' }}>
                  <span>Book Consultation</span>
                  <Send size={15} />
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationContact;

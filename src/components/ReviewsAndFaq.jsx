import React, { useState, useEffect } from 'react';
import { Star, ChevronDown, MessageSquare } from 'lucide-react';

const REVIEWS = [
  {
    id: 1,
    name: 'Priya Nair',
    title: 'Homeowner, Koregaon Park Penthouse',
    comment: 'The before/after transformation was unbelievable! Our raw apartment structure was turned into a warm, wood-paneled ambient sanctuary. Amit and Neha are true visual poets.',
    stars: 5
  },
  {
    id: 2,
    name: 'Rohit Sen',
    title: 'Founder, TechScale Offices',
    comment: 'Designed our corporate space in Baner. The ergonomic layouts, built-in library backlighting, and modern conference lounge have received endless compliments from clients and candidates alike.',
    stars: 5
  },
  {
    id: 3,
    name: 'Meera Joshi',
    title: 'Villa Owner, Aundh',
    comment: 'I loved using the online pricing estimator! It gave me a realistic budget view, and the final turnkey execution was completed exactly on budget and on schedule. 10/10 recommendation!',
    stars: 5
  }
];

const FAQS = [
  {
    question: 'How long does a standard full home project take?',
    answer: 'A standard interior execution (e.g. 2BHK/3BHK) takes roughly 75 to 90 working days from design finalization. This includes civil, electrical, false ceiling, painting, and customized furniture carpentry installations.'
  },
  {
    question: 'Can you design a project if I want to use my own local contractor?',
    answer: 'Yes, absolutely. You can select our "Concept & 3D Render" package. We will provide all 3D visualizations, layout blueprints, and electrical/false ceiling schematic maps for your nominated contractor to execute.'
  },
  {
    question: 'What is your studio design philosophy?',
    answer: 'We specialize in modern warm luxury. We focus heavily on ambient indirect lighting systems, layered natural textures (like veneers, fluted paneling, linen fabrics), and high-contrast styling with champagne-gold hardware.'
  },
  {
    question: 'Do you charge a styling consulting fee or take execution margins?',
    answer: 'We maintain complete transparency. We offer fixed design packages for consultations, and a standard, pre-agreed management margin on turnkey execution materials, which is fully itemized in our estimation sheets.'
  }
];

const ReviewsAndFaq = () => {
  const [activeReview, setActiveReview] = useState(0);
  const [activeFaq, setActiveFaq] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveReview((prev) => (prev + 1) % REVIEWS.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const toggleFaq = (idx) => {
    setActiveFaq(activeFaq === idx ? -1 : idx);
  };

  return (
    <section className="reviews-section section-padding">
      <div className="container">
        
        {/* Testimonials Carousel */}
        <div className="section-header" style={{ marginBottom: '3rem' }}>
          <span className="hero-subtitle">Testimonials</span>
          <h2 className="serif-title">Client Conversations</h2>
        </div>

        <div className="reviews-slider">
          <div className="quote-icon">“</div>
          {REVIEWS.map((rev, idx) => (
            <div 
              key={rev.id} 
              className={`review-slide ${idx === activeReview ? 'active' : ''}`}
            >
              <p className="review-comment">{rev.comment}</p>
              
              <div className="review-stars">
                {[...Array(rev.stars)].map((_, sidx) => (
                  <Star key={sidx} size={15} fill="currentColor" />
                ))}
              </div>
              <div className="review-client-name">{rev.name}</div>
              <div className="review-client-title">{rev.title}</div>
            </div>
          ))}

          {/* Dots Nav */}
          <div className="reviews-nav">
            <div className="reviews-dot-nav">
              {REVIEWS.map((_, idx) => (
                <div 
                  key={idx} 
                  className={`review-dot ${idx === activeReview ? 'active' : ''}`}
                  onClick={() => setActiveReview(idx)}
                ></div>
              ))}
            </div>
          </div>
        </div>

        {/* FAQ Accordion Grid */}
        <div style={{ marginTop: '7rem' }}>
          <div className="section-header" style={{ marginBottom: '3.5rem' }}>
            <span className="hero-subtitle">Got Questions?</span>
            <h2 className="serif-title">Frequently Asked Questions</h2>
            <p>Clear details about design consultations, site management, budgets, and timelines.</p>
          </div>

          <div className="faq-container" style={{ maxWidth: '800px', margin: '0 auto' }}>
            {FAQS.map((faq, idx) => (
              <div 
                key={idx} 
                className={`faq-item ${activeFaq === idx ? 'active' : ''}`}
              >
                <div 
                  className="faq-question" 
                  onClick={() => toggleFaq(idx)}
                >
                  <span>{faq.question}</span>
                  <ChevronDown className="faq-icon" size={16} />
                </div>
                <div className="faq-answer">
                  <p>{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default ReviewsAndFaq;

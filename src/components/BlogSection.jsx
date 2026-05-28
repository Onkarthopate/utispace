import React, { useState } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const BLOG_CATEGORIES = ['All', 'Real Stories', 'Decor Trends', 'Seasonal', 'Business Office', 'Style and Guides'];

const ARTICLES = [
  {
    id: 1,
    title: 'The Art of Ambient Lighting in Luxury Bedrooms',
    category: 'Decor Trends',
    date: 'May 15, 2026',
    readTime: '5 min read',
    excerpt: 'Ambient, task, and accent lighting must harmonize. Learn how warm backlights and fluted wooden panels can double your space\'s visual warmth.',
    image: '/images/bedroom.png'
  },
  {
    id: 2,
    title: 'Maximizing Space in Modern Urban Kitchens',
    category: 'Style and Guides',
    date: 'April 28, 2026',
    readTime: '7 min read',
    excerpt: 'From hidden drawers to integrated lighting channels, these hacks will convert a compact kitchen layout into a culinary haven.',
    image: '/images/kitchen.png'
  },
  {
    id: 3,
    title: 'From Skeleton to Splendor: A Koregaon Park Story',
    category: 'Real Stories',
    date: 'April 10, 2026',
    readTime: '9 min read',
    excerpt: 'Follow the raw-concrete skeleton transformation of a 4-bedroom penthouse into a luxury residence for a local tech leader.',
    image: '/images/bedroom.png'
  },
  {
    id: 4,
    title: 'Seasonal Color Tones for Warm Indian Summers',
    category: 'Seasonal',
    date: 'March 22, 2026',
    readTime: '4 min read',
    excerpt: 'Incorporate soft sand beige, subtle sage green, and light champagne gold to give your interior layout a cooling visual relief.',
    image: '/images/bedroom.png'
  },
  {
    id: 5,
    title: 'Designing Collaborative Modern Office Hubs',
    category: 'Business Office',
    date: 'Feb 18, 2026',
    readTime: '6 min read',
    excerpt: 'Discover how modern corporations in Pune are merging ergonomic workstations with luxury lounge aesthetics to improve office morale.',
    image: '/images/kitchen.png'
  },
  {
    id: 6,
    title: 'Selecting the Right Marble Facades for Accent Walls',
    category: 'Style and Guides',
    date: 'Jan 05, 2026',
    readTime: '5 min read',
    excerpt: 'Not all marble is created equal. Learn why Calacatta Gold or Grey Slate texture suits different interior lighting set ups.',
    image: '/images/kitchen.png'
  }
];

const BlogSection = ({ searchFilter = '' }) => {
  const [selectedCat, setSelectedCat] = useState('All');

  const filteredArticles = ARTICLES.filter((article) => {
    const catMatch = selectedCat === 'All' || article.category === selectedCat;
    const searchMatch = 
      article.title.toLowerCase().includes(searchFilter.toLowerCase()) ||
      article.category.toLowerCase().includes(searchFilter.toLowerCase()) ||
      article.excerpt.toLowerCase().includes(searchFilter.toLowerCase());
    return catMatch && searchMatch;
  });

  return (
    <section id="blog" className="section-padding" style={{ backgroundColor: 'var(--bg-secondary)', borderTop: '1px solid var(--border-color)' }}>
      <div className="container">
        <div className="section-header">
          <span className="hero-subtitle">Design Insights</span>
          <h2 className="serif-title">Journal & Decor Trends</h2>
          <p>
            Stay updated with our latest design principles, seasonal guides, materials studies, and real renovation walk-throughs.
          </p>
        </div>

        {/* Blog Category Links */}
        <div className="blog-categories">
          {BLOG_CATEGORIES.map((cat) => (
            <button
              key={cat}
              className={`blog-cat-btn ${selectedCat === cat ? 'active' : ''}`}
              onClick={() => setSelectedCat(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Blog Grid */}
        <div className="blog-grid">
          {filteredArticles.map((article) => (
            <article key={article.id} className="blog-card">
              <div className="blog-img-holder">
                <img src={article.image} alt={article.title} />
              </div>
              <div className="blog-date-row">
                <span className="tag">{article.category}</span>
                <span>•</span>
                <span>{article.date}</span>
                <span>•</span>
                <span>{article.readTime}</span>
              </div>
              <h3 className="blog-card-title serif-title">{article.title}</h3>
              <p className="blog-excerpt">{article.excerpt}</p>
              <Link to="/blog" className="blog-read-more">
                <span>Read Article</span>
                <ArrowUpRight size={14} />
              </Link>
            </article>
          ))}
        </div>

        {filteredArticles.length === 0 && (
          <div style={{ textAlign: 'center', marginTop: '3rem', color: 'var(--text-secondary)' }}>
            No articles found matching your criteria. Try another category filter.
          </div>
        )}
      </div>
    </section>
  );
};

export default BlogSection;

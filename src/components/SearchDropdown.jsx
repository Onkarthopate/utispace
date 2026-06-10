import { useState, useEffect, useRef, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search, ArrowRight, Home, Grid, BookOpen, Users, DollarSign, Phone } from 'lucide-react';

// ── All searchable items across the site ──────────────────────────────────────
const SEARCH_DATA = [
  // Pages
  { id: 1,  label: 'Home',                     desc: 'Back to homepage',                        path: '/',          category: 'Pages',     icon: Home },
  { id: 2,  label: 'Portfolio',                 desc: 'Browse all design projects',              path: '/portfolio', category: 'Pages',     icon: Grid },
  { id: 3,  label: 'Blog',                      desc: 'Interior design articles & tips',         path: '/blog',      category: 'Pages',     icon: BookOpen },
  { id: 4,  label: 'About Us',                  desc: 'Meet the utispace studio team',           path: '/about',     category: 'Pages',     icon: Users },
  { id: 5,  label: 'Pricing',                   desc: 'Design packages & turnkey estimator',     path: '/pricing',   category: 'Pages',     icon: DollarSign },
  { id: 6,  label: 'Contact',                   desc: 'Book a consultation or site visit',       path: '/contact',   category: 'Pages',     icon: Phone },

  // Services
  { id: 7,  label: 'Full Turnkey Home Handover',desc: 'End-to-end home design & execution',      path: '/pricing',   category: 'Services',  icon: ArrowRight },
  { id: 8,  label: 'Premium Office Design',     desc: 'Commercial & executive office interiors', path: '/pricing',   category: 'Services',  icon: ArrowRight },
  { id: 9,  label: 'Living & Dining Area',      desc: 'Living room & dining space redesign',     path: '/portfolio', category: 'Services',  icon: ArrowRight },
  { id: 10, label: 'Bespoke Bedroom Design',    desc: 'Custom bedroom styling & layout',         path: '/portfolio', category: 'Services',  icon: ArrowRight },
  { id: 11, label: 'Modern Kitchen Remodeling', desc: 'Kitchen design with premium finishes',    path: '/portfolio', category: 'Services',  icon: ArrowRight },
  { id: 12, label: 'Consultation Call',         desc: '1-hour design layout consultation',       path: '/contact',   category: 'Services',  icon: ArrowRight },

  // Topics / Blog
  { id: 13, label: 'Interior Design Tips',      desc: 'Expert styling advice & ideas',           path: '/blog',      category: 'Topics',    icon: BookOpen },
  { id: 14, label: 'Vastu & Space Planning',    desc: 'Vastu-compliant design layouts',          path: '/blog',      category: 'Topics',    icon: BookOpen },
  { id: 15, label: 'Material & Finishes',       desc: 'Veneer, laminates, stone & more',         path: '/blog',      category: 'Topics',    icon: BookOpen },
  { id: 16, label: 'Lighting Design',           desc: 'Ambient & task lighting ideas',           path: '/blog',      category: 'Topics',    icon: BookOpen },
  { id: 17, label: 'Modular Furniture',         desc: 'Custom modular storage solutions',        path: '/portfolio', category: 'Topics',    icon: BookOpen },
  { id: 18, label: 'Pune Interior Designer',    desc: 'Top-rated studio in Wagholi, Pune',       path: '/about',     category: 'Topics',    icon: BookOpen },
];

// ── Highlight matching characters in gold ────────────────────────────────────
const Highlight = ({ text, query }) => {
  if (!query.trim()) return <span>{text}</span>;
  const regex = new RegExp(`(${query.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')})`, 'gi');
  const parts = text.split(regex);
  return (
    <span>
      {parts.map((part, i) =>
        regex.test(part)
          ? <mark key={i} className="search-highlight">{part}</mark>
          : <span key={i}>{part}</span>
      )}
    </span>
  );
};

// ── Main SearchDropdown component ─────────────────────────────────────────────
const SearchDropdown = ({ onClose }) => {
  const [query, setQuery]           = useState('');
  const [results, setResults]       = useState([]);
  const [activeIdx, setActiveIdx]   = useState(-1);
  const [isOpen, setIsOpen]         = useState(false);
  const inputRef                    = useRef(null);
  const dropdownRef                 = useRef(null);
  const navigate                    = useNavigate();

  // Filter results whenever query changes
  useEffect(() => {
    if (!query.trim()) {
      setResults([]);
      setIsOpen(false);
      setActiveIdx(-1);
      return;
    }
    const q = query.toLowerCase();
    const filtered = SEARCH_DATA.filter(
      item =>
        item.label.toLowerCase().includes(q) ||
        item.desc.toLowerCase().includes(q)  ||
        item.category.toLowerCase().includes(q)
    );
    setResults(filtered.slice(0, 8)); // max 8 results
    setIsOpen(filtered.length > 0);
    setActiveIdx(-1);
  }, [query]);

  // Navigate to selected item
  const selectItem = useCallback((item) => {
    navigate(item.path);
    setQuery('');
    setResults([]);
    setIsOpen(false);
    if (onClose) onClose();
  }, [navigate, onClose]);

  // Keyboard navigation
  const handleKeyDown = (e) => {
    if (!isOpen) return;
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setActiveIdx(i => Math.min(i + 1, results.length - 1));
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setActiveIdx(i => Math.max(i - 1, 0));
    } else if (e.key === 'Enter') {
      e.preventDefault();
      if (activeIdx >= 0 && results[activeIdx]) {
        selectItem(results[activeIdx]);
      }
    } else if (e.key === 'Escape') {
      setIsOpen(false);
      setQuery('');
    }
  };

  // Close on outside click
  useEffect(() => {
    const handler = (e) => {
      if (
        dropdownRef.current && !dropdownRef.current.contains(e.target) &&
        inputRef.current && !inputRef.current.contains(e.target)
      ) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, []);

  // Scroll active item into view
  useEffect(() => {
    if (activeIdx >= 0 && dropdownRef.current) {
      const el = dropdownRef.current.querySelector(`[data-idx="${activeIdx}"]`);
      if (el) el.scrollIntoView({ block: 'nearest' });
    }
  }, [activeIdx]);

  // Group results by category
  const grouped = results.reduce((acc, item) => {
    if (!acc[item.category]) acc[item.category] = [];
    acc[item.category].push(item);
    return acc;
  }, {});

  // Flat list for keyboard index tracking
  const flatList = Object.values(grouped).flat();

  return (
    <div className="search-wrapper" style={{ position: 'relative' }}>
      {/* Input */}
      <form className="nav-search-bar" onSubmit={e => e.preventDefault()}>
        <Search size={16} className="gold-text" />
        <input
          ref={inputRef}
          type="text"
          placeholder="Search ideas..."
          value={query}
          onChange={e => setQuery(e.target.value)}
          onKeyDown={handleKeyDown}
          onFocus={() => query.trim() && results.length > 0 && setIsOpen(true)}
          autoComplete="off"
        />
      </form>

      {/* Dropdown */}
      {isOpen && (
        <div className="search-dropdown" ref={dropdownRef}>
          {Object.entries(grouped).map(([category, items]) => (
            <div key={category} className="search-group">
              <div className="search-group-label">{category}</div>
              {items.map((item) => {
                const globalIdx = flatList.findIndex(r => r.id === item.id);
                const Icon = item.icon;
                const isActive = globalIdx === activeIdx;
                return (
                  <button
                    key={item.id}
                    data-idx={globalIdx}
                    className={`search-result-item ${isActive ? 'active' : ''}`}
                    onMouseEnter={() => setActiveIdx(globalIdx)}
                    onMouseDown={() => selectItem(item)}
                  >
                    <span className="search-result-icon">
                      <Icon size={14} />
                    </span>
                    <span className="search-result-text">
                      <span className="search-result-label">
                        <Highlight text={item.label} query={query} />
                      </span>
                      <span className="search-result-desc">
                        <Highlight text={item.desc} query={query} />
                      </span>
                    </span>
                    {isActive && (
                      <span className="search-result-enter">↵</span>
                    )}
                  </button>
                );
              })}
            </div>
          ))}

          {/* Footer hint */}
          <div className="search-footer">
            <span><kbd>↑</kbd><kbd>↓</kbd> navigate</span>
            <span><kbd>↵</kbd> select</span>
            <span><kbd>Esc</kbd> close</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default SearchDropdown;

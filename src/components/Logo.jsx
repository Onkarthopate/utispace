import React from 'react';

const Logo = ({ className = 'logo-icon-img', ...props }) => {
  return (
    <img 
      src="/images/logo.jpg" 
      alt="utispace Logo" 
      className={className} 
      {...props}
      onError={(e) => {
        // In case it fails to load, degrade gracefully to text-only logo
        e.target.style.display = 'none';
      }}
    />
  );
};

export default Logo;

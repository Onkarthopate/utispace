import React from 'react';
import BlogSection from '../components/BlogSection';

const Blog = ({ searchFilter }) => {
  return (
    <div style={{ paddingTop: '80px' }}>
      <BlogSection searchFilter={searchFilter} />
    </div>
  );
};

export default Blog;

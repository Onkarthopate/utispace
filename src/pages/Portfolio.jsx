import React from 'react';
import ProjectShowcase from '../components/ProjectShowcase';
import BeforeAfterSlider from '../components/BeforeAfterSlider';
import ReelsSection from '../components/ReelsSection';

const Portfolio = ({ searchFilter }) => {
  return (
    <div style={{ paddingTop: '80px' }}>
      <ReelsSection />
      {/* We can show Transformations first, then the Showcase */}
      <BeforeAfterSlider />
      <ProjectShowcase searchFilter={searchFilter} />
    </div>
  );
};

export default Portfolio;

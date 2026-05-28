import React from 'react';
import HeroCarousel from '../components/HeroCarousel';

const Home = () => {
  return (
    <div>
      <HeroCarousel />
      {/* We can add a quick intro or call to action here, but HeroCarousel handles the main landing. */}
    </div>
  );
};

export default Home;

import HeroCarousel from '../components/HeroCarousel';
import ProjectShowcase from '../components/ProjectShowcase';
import BeforeAfterSlider from '../components/BeforeAfterSlider';
import BlogSection from '../components/BlogSection';
import AboutSection from '../components/AboutSection';
import PricingSection from '../components/PricingSection';
import ReviewsAndFaq from '../components/ReviewsAndFaq';
import LocationContact from '../components/LocationContact';
import Chatbot from '../components/Chatbot';

const Home = ({ searchVal }) => {
  return (
    <>
      <HeroCarousel />
      <ProjectShowcase searchFilter={searchVal} />
      <BeforeAfterSlider />
      <BlogSection searchFilter={searchVal} />
      <AboutSection />
      <PricingSection />
      <ReviewsAndFaq />
      <LocationContact />
      <Chatbot />
    </>
  );
};

export default Home;
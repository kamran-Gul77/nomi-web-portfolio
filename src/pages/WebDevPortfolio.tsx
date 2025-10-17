import WebDevHero from '../components/webdev/WebDevHero';
import WebDevAbout from '../components/webdev/WebDevAbout';
import TechStack from '../components/webdev/TechStack';
import DesignProcess from '../components/webdev/DesignProcess';
import QuranAcademyShowcase from '../components/webdev/QuranAcademyShowcase';
import Features from '../components/webdev/Features';
import BeforeAfter from '../components/webdev/BeforeAfter';
import PerformanceMetrics from '../components/webdev/PerformanceMetrics';
import ClientJourney from '../components/webdev/ClientJourney';
import WebDevTestimonials from '../components/webdev/WebDevTestimonials';
import WebDevPricing from '../components/webdev/WebDevPricing';
import FAQ from '../components/webdev/FAQ';
import WebDevFooter from '../components/webdev/WebDevFooter';
import CustomCursor from '../components/CustomCursor';

export default function WebDevPortfolio() {
  return (
    <div className="min-h-screen">
      <CustomCursor />
      <WebDevHero />
      <WebDevAbout />
      <TechStack />
      <DesignProcess />
      <QuranAcademyShowcase />
      <Features />
      <BeforeAfter />
      <PerformanceMetrics />
      <ClientJourney />
      <WebDevTestimonials />
      <WebDevPricing />
      <FAQ />
      <WebDevFooter />
    </div>
  );
}

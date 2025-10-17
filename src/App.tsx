import CustomCursor from "./components/CustomCursor";
import WebDevHero from "./components/webdev/WebDevHero";
import WebDevAbout from "./components/webdev/WebDevAbout";
import QuranAcademyShowcase from "./components/webdev/QuranAcademyShowcase";
import PerformanceMetrics from "./components/webdev/PerformanceMetrics";
import WebDevTestimonials from "./components/webdev/WebDevTestimonials";
import WebDevPricing from "./components/webdev/WebDevPricing";
import Features from "./components/webdev/Features";
import ClientJourney from "./components/webdev/ClientJourney";
import DesignProcess from "./components/webdev/DesignProcess";
import BeforeAfter from "./components/webdev/BeforeAfter";
import TechStack from "./components/webdev/TechStack";
import WebDevFooter from "./components/webdev/WebDevFooter";

function App() {
  return (
    <div className="min-h-screen">
      <CustomCursor />
      {/* <Hero />
      <About />
      <Team />
      <Services />
      <Clients />
      <CaseStudies />
      <Websites />
      <Testimonials />
      <Pricing />
      <Footer /> */}
      <WebDevHero />
      <WebDevAbout />
      <QuranAcademyShowcase />
      <Features />
      <ClientJourney />
      <DesignProcess />
      <BeforeAfter />
      <PerformanceMetrics />
      <WebDevTestimonials />
      <WebDevPricing />
      <TechStack />
      <WebDevFooter />
    </div>
  );
}

export default App;

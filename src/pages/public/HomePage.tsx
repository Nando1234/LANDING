import HeroSection from '../../components/home/HeroSection';
import ServicesSection from '../../components/home/ServicesSection';
import TestimonialsSection from '../../components/home/TestimonialsSection';
import StatsSection from '../../components/home/StatsSection';
import ProjectsShowcase from '../../components/home/ProjectsShowcase';
import ClientsSection from '../../components/home/ClientsSection';
import BlogPreview from '../../components/home/BlogPreview';
import CtaSection from '../../components/home/CtaSection';

const HomePage = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <ServicesSection />
      <StatsSection />
      <ProjectsShowcase />
      <TestimonialsSection />
      <ClientsSection />
      <BlogPreview />
      <CtaSection />
    </div>
  );
};

export default HomePage;
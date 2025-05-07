import MainLayout from '@/components/layout/MainLayout';
import HeroSection from '@/components/home/HeroSection';
import ServicesOverview from '@/components/home/ServicesOverview';
import FeaturedPortfolio from '@/components/home/FeaturedPortfolio';
import Testimonials from '@/components/home/Testimonials';
import ContactCTA from '@/components/home/ContactCTA';

export default function Home() {
  return (
    <MainLayout>
      <HeroSection />
      <ServicesOverview />
      <FeaturedPortfolio />
      <Testimonials />
      <ContactCTA />
    </MainLayout>
  );
}

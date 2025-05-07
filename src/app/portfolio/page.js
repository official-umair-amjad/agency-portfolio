import MainLayout from '@/components/layout/MainLayout';
import PageHeader from '@/components/ui/PageHeader';
import PortfolioGrid from '@/components/portfolio/PortfolioGrid';
import ContactCTA from '@/components/home/ContactCTA';

export const metadata = {
  title: 'Portfolio - The Travels of Zee',
  description: 'Explore our work in content writing, graphic design, and software development.',
};

export default function PortfolioPage() {
  return (
    <MainLayout>
      <PageHeader 
        title="Our Portfolio" 
        description="Explore our best work across different industries and disciplines"
      />
      
      <PortfolioGrid />
      
      <ContactCTA />
    </MainLayout>
  );
} 
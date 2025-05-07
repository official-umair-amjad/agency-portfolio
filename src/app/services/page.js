import MainLayout from '@/components/layout/MainLayout';
import PageHeader from '@/components/ui/PageHeader';
import ServiceSection from '@/components/services/ServiceSection';
import ContactCTA from '@/components/home/ContactCTA';

export const metadata = {
  title: 'Services - The Travels of Zee',
  description: 'Professional content writing, graphic design, and software development services.',
};

const services = [
  {
    id: 'content-writing',
    title: 'Content Writing',
    description: 'Our content writing services deliver engaging, SEO-optimized copy that resonates with your target audience and drives conversions. From blog posts to website copy, we create content that tells your story effectively.',
    features: [
      'Blog Posts and Articles',
      'Website Copy and Landing Pages',
      'Email Newsletters',
      'Social Media Content',
      'Technical Writing',
      'SEO Content Optimization',
      'Content Strategy Development'
    ],
    isReversed: false
  },
  {
    id: 'graphic-design',
    title: 'Graphic Design',
    description: 'Our graphic design services transform your brand vision into compelling visual elements that capture attention and convey your message. We create designs that stand out and leave a lasting impression.',
    features: [
      'Brand Identity Design',
      'Logo Creation',
      'Marketing Materials',
      'Social Media Graphics',
      'UI/UX Design',
      'Illustration',
      'Print Design'
    ],
    isReversed: true
  },
  {
    id: 'software-development',
    title: 'Software Development',
    description: 'Our software development team builds custom mobile and web applications tailored to your business needs. We use the latest technologies to create scalable, secure, and user-friendly software solutions.',
    features: [
      'Mobile App Development',
      'Web Application Development',
      'Custom Software Solutions',
      'E-commerce Development',
      'API Integration',
      'Software Maintenance and Support',
      'UI/UX Implementation'
    ],
    isReversed: false
  }
];

export default function ServicesPage() {
  return (
    <MainLayout>
      <PageHeader 
        title="Our Services" 
        description="Professional solutions tailored to meet your business needs"
      />
      
      {services.map((service, index) => (
        <ServiceSection 
          key={service.id}
          id={service.id}
          title={service.title}
          description={service.description}
          features={service.features}
          isReversed={service.isReversed}
        />
      ))}
      
      <ContactCTA />
    </MainLayout>
  );
} 
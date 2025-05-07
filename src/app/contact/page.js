import MainLayout from '@/components/layout/MainLayout';
import PageHeader from '@/components/ui/PageHeader';
import ContactForm from '@/components/contact/ContactForm';
import ContactInfo from '@/components/contact/ContactInfo';

export const metadata = {
  title: 'Contact Us - The Travels of Zee',
  description: 'Get in touch with us for any inquiries or project discussions.',
};

export default function ContactPage() {
  return (
    <MainLayout>
      <PageHeader 
        title="Contact Us" 
        description="We'd love to hear from you. Drop us a message and we'll respond as soon as possible."
      />
      
      <section className="py-16 bg-gray-900 text-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="md:col-span-2">
              <ContactForm />
            </div>
            <div>
              <ContactInfo />
            </div>
          </div>
        </div>
      </section>
    </MainLayout>
  );
} 
import React from 'react';
import { ContactForm } from '../components/contact/ContactForm';
import { updateMetadata } from '../utils/seo';

export function Contact() {
  React.useEffect(() => {
    updateMetadata(
      'Contact Us - AI Tools Hub',
      'Get in touch with us for support, partnerships, or general inquiries about our AI tools.'
    );
  }, []);

  return (
    <div className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Get in Touch</h1>
            <p className="text-xl text-gray-600">
              Have questions or suggestions? We'd love to hear from you.
            </p>
          </div>
          <ContactForm />
        </div>
      </div>
    </div>
  );
}
import React from 'react';
import { Hero } from '../components/Hero';
import { Features } from '../components/Features';
import { Tools } from '../components/Tools';
import { updateMetadata } from '../utils/seo';

export function Home() {
  React.useEffect(() => {
    updateMetadata();
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      <Hero />
      <Features />
      <Tools />
    </div>
  );
}
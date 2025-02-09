import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Zap, Shield, Star } from 'lucide-react';

export function InteractiveFeatures() {
  const features = [
    {
      icon: Sparkles,
      title: 'AI-Powered Analysis',
      description: 'Advanced machine learning algorithms for accurate results'
    },
    {
      icon: Zap,
      title: 'Real-time Processing',
      description: 'Get instant results with our optimized processing'
    },
    {
      icon: Shield,
      title: 'Secure & Private',
      description: 'Your data is encrypted and never stored'
    },
    {
      icon: Star,
      title: 'Premium Features',
      description: 'Access to advanced tools and capabilities'
    }
  ];

  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
      {features.map((feature, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          whileHover={{ scale: 1.05 }}
          className="bg-white p-6 rounded-lg shadow-md"
        >
          <feature.icon className="h-12 w-12 text-indigo-600 mb-4" />
          <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
          <p className="text-gray-600">{feature.description}</p>
        </motion.div>
      ))}
    </div>
  );
}
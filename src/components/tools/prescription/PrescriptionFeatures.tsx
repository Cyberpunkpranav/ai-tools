import React from 'react';
import { Shield, Zap, FileText, Languages } from 'lucide-react';

export function PrescriptionFeatures() {
  const features = [
    {
      icon: Shield,
      title: 'Privacy Protected',
      description: 'Your prescriptions are processed securely and never stored'
    },
    {
      icon: Zap,
      title: 'Real-time Processing',
      description: 'Get results in seconds with our advanced AI technology'
    },
    {
      icon: FileText,
      title: 'Multiple Formats',
      description: 'Support for various prescription formats and styles'
    },
    {
      icon: Languages,
      title: 'Multi-language',
      description: 'Support for prescriptions in multiple languages'
    }
  ];

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h3 className="text-xl font-bold mb-6">Key Features</h3>
      <div className="grid grid-cols-2 gap-6">
        {features.map((feature, index) => (
          <div key={index} className="flex items-start space-x-3">
            <feature.icon className="h-6 w-6 text-indigo-600 flex-shrink-0" />
            <div>
              <h4 className="font-semibold mb-1">{feature.title}</h4>
              <p className="text-sm text-gray-600">{feature.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
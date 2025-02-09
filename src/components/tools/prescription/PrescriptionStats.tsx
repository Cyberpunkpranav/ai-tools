import React from 'react';
import { Users, CheckCircle, Clock } from 'lucide-react';

export function PrescriptionStats() {
  const stats = [
    {
      icon: Users,
      value: '50,000+',
      label: 'Active Users'
    },
    {
      icon: CheckCircle,
      value: '99.9%',
      label: 'Accuracy Rate'
    },
    {
      icon: Clock,
      value: '< 5 sec',
      label: 'Processing Time'
    }
  ];

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h3 className="text-xl font-bold mb-6">Our Impact</h3>
      <div className="grid grid-cols-3 gap-4">
        {stats.map((stat, index) => (
          <div key={index} className="text-center">
            <stat.icon className="h-8 w-8 text-indigo-600 mx-auto mb-2" />
            <div className="text-2xl font-bold text-gray-900">{stat.value}</div>
            <div className="text-sm text-gray-600">{stat.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
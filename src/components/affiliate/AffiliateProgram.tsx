import React from 'react';
import { DollarSign, Users, BarChart, Gift } from 'lucide-react';

export function AffiliateProgram() {
  const benefits = [
    {
      icon: DollarSign,
      title: 'High Commission Rates',
      description: 'Earn up to 30% commission on every successful referral'
    },
    {
      icon: Users,
      title: 'Lifetime Attribution',
      description: 'Get credited for all future purchases from your referrals'
    },
    {
      icon: BarChart,
      title: 'Real-time Analytics',
      description: 'Track your performance with detailed analytics dashboard'
    },
    {
      icon: Gift,
      title: 'Exclusive Rewards',
      description: 'Special bonuses and rewards for top performers'
    }
  ];

  return (
    <div className="bg-gradient-to-br from-indigo-50 to-white py-16">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Join Our Affiliate Program
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Partner with us and earn competitive commissions by promoting our AI tools
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
            >
              <benefit.icon className="h-12 w-12 text-indigo-600 mb-4" />
              <h3 className="text-xl font-bold mb-2">{benefit.title}</h3>
              <p className="text-gray-600">{benefit.description}</p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <button className="bg-indigo-600 text-white px-8 py-3 rounded-md hover:bg-indigo-700 transition-colors">
            Apply Now
          </button>
        </div>
      </div>
    </div>
  );
}
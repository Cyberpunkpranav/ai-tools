import React from 'react';
import { Users, Wrench, MessageSquare, BarChart } from 'lucide-react';

export function Overview() {
  const stats = [
    { label: 'Total Users', value: '1,234', icon: Users },
    { label: 'Tools Used', value: '45,678', icon: Wrench },
    { label: 'Messages', value: '892', icon: MessageSquare },
    { label: 'Success Rate', value: '98%', icon: BarChart }
  ];

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold">Dashboard Overview</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex items-center justify-between mb-4">
              <stat.icon className="h-8 w-8 text-indigo-600" />
              <span className="text-2xl font-bold">{stat.value}</span>
            </div>
            <p className="text-gray-600">{stat.label}</p>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-lg font-semibold mb-4">Recent Activity</h2>
          <div className="space-y-4">
            {[1, 2, 3].map((_, index) => (
              <div key={index} className="flex items-center justify-between py-3 border-b last:border-0">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 rounded-full bg-green-500"></div>
                  <span>New user registered</span>
                </div>
                <span className="text-sm text-gray-500">2 minutes ago</span>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-lg font-semibold mb-4">Popular Tools</h2>
          <div className="space-y-4">
            {['Prescription Reader', 'Code Generator', 'Hashtag Generator'].map((tool, index) => (
              <div key={index} className="flex items-center justify-between py-3 border-b last:border-0">
                <span>{tool}</span>
                <span className="text-sm text-gray-500">{Math.floor(Math.random() * 1000)} uses</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
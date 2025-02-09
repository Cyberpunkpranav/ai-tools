import React from 'react';
import { BarChart2, TrendingUp, Users, Clock } from 'lucide-react';

export function Analytics() {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold">Analytics</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {[
          { label: 'Total Usage', value: '156,789', icon: BarChart2 },
          { label: 'Growth Rate', value: '+12.5%', icon: TrendingUp },
          { label: 'Active Users', value: '1,234', icon: Users },
          { label: 'Avg. Time', value: '2m 34s', icon: Clock }
        ].map((stat, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex items-center justify-between mb-4">
              <stat.icon className="h-8 w-8 text-indigo-600" />
              <span className="text-2xl font-bold">{stat.value}</span>
            </div>
            <p className="text-gray-600">{stat.label}</p>
          </div>
        ))}
      </div>

      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-lg font-semibold mb-4">Usage Trends</h2>
        <div className="h-64 flex items-center justify-center text-gray-500">
          Chart placeholder - Add your preferred charting library
        </div>
      </div>
    </div>
  );
}
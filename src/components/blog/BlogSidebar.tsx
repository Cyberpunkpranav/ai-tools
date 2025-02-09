import React from 'react';
import { Search, Tag } from 'lucide-react';

export function BlogSidebar() {
  const categories = [
    { name: 'Healthcare', count: 12 },
    { name: 'Social Media', count: 8 },
    { name: 'Technology', count: 15 },
    { name: 'AI Updates', count: 10 }
  ];

  return (
    <div className="space-y-8">
      <div className="bg-white rounded-lg shadow-md p-6">
        <h3 className="text-lg font-bold mb-4">Search</h3>
        <div className="relative">
          <input
            type="text"
            placeholder="Search articles..."
            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
          />
          <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-md p-6">
        <h3 className="text-lg font-bold mb-4">Categories</h3>
        <div className="space-y-3">
          {categories.map((category, index) => (
            <div key={index} className="flex items-center justify-between">
              <div className="flex items-center text-gray-600 hover:text-indigo-600">
                <Tag className="h-4 w-4 mr-2" />
                {category.name}
              </div>
              <span className="text-sm text-gray-500">{category.count}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-md p-6">
        <h3 className="text-lg font-bold mb-4">Subscribe</h3>
        <p className="text-gray-600 mb-4">Get the latest articles and updates directly in your inbox.</p>
        <input
          type="email"
          placeholder="Your email address"
          className="w-full px-4 py-2 mb-3 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
        />
        <button className="w-full bg-indigo-600 text-white py-2 rounded-md hover:bg-indigo-700">
          Subscribe
        </button>
      </div>
    </div>
  );
}
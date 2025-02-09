import React from 'react';
import { BlogList } from '../components/blog/BlogList';
import { BlogSidebar } from '../components/blog/BlogSidebar';
import { updateMetadata } from '../utils/seo';

export function Blog() {
  React.useEffect(() => {
    updateMetadata(
      'AI Tools Blog - Latest Updates & Insights',
      'Stay updated with the latest AI technology trends, tips, and insights from our experts.'
    );
  }, []);

  return (
    <div className="py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">AI Tools Blog</h1>
          <p className="text-xl text-gray-600">Stay updated with the latest AI technology trends and insights</p>
        </div>
        
        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <BlogList />
          </div>
          <div className="lg:col-span-1">
            <BlogSidebar />
          </div>
        </div>
      </div>
    </div>
  );
}
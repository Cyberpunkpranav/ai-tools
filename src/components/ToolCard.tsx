import React from 'react';
import { Link } from 'react-router-dom';
import { LucideIcon, ArrowRight } from 'lucide-react';

interface ToolCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  to: string;
  category: string;
  image: string;
}

export function ToolCard({ title, description, icon: Icon, to, category, image }: ToolCardProps) {
  return (
    <Link to={to} className="block group">
      <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
        <div className="relative mb-4 overflow-hidden rounded-lg">
          <img 
            src={image} 
            alt={title}
            className="w-full h-48 object-cover transform group-hover:scale-105 transition-transform duration-300"
          />
          <div className="absolute top-4 left-4 bg-indigo-600 text-white px-3 py-1 rounded-full text-sm">
            {category}
          </div>
        </div>
        <div className="flex items-start space-x-4">
          <div className="bg-indigo-50 p-3 rounded-lg group-hover:bg-indigo-100 transition-colors">
            <Icon className="h-6 w-6 text-indigo-600" />
          </div>
          <div className="flex-1">
            <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-indigo-600 transition-colors">
              {title}
            </h3>
            <p className="text-gray-600 mb-4 line-clamp-2">{description}</p>
            <div className="flex items-center text-indigo-600 font-medium">
              Try Now
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}
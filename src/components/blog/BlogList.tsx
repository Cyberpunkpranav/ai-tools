import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, User, ArrowRight } from 'lucide-react';

export function BlogList() {
  const posts = [
    {
      id: 1,
      title: 'The Future of AI in Healthcare',
      excerpt: 'Discover how artificial intelligence is revolutionizing healthcare diagnosis and treatment...',
      image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?ixlib=rb-1.2.1',
      date: '2024-03-15',
      author: 'Dr. Sarah Johnson',
      category: 'Healthcare'
    },
    {
      id: 2,
      title: 'Maximizing Social Media Reach with AI',
      excerpt: 'Learn how to leverage AI tools to enhance your social media presence and engagement...',
      image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?ixlib=rb-1.2.1',
      date: '2024-03-12',
      author: 'Mark Thompson',
      category: 'Social Media'
    }
  ];

  return (
    <div className="space-y-8">
      {posts.map(post => (
        <article key={post.id} className="bg-white rounded-lg shadow-md overflow-hidden">
          <img 
            src={post.image} 
            alt={post.title}
            className="w-full h-64 object-cover"
          />
          <div className="p-6">
            <div className="flex items-center text-sm text-gray-500 mb-4">
              <Calendar className="h-4 w-4 mr-2" />
              {new Date(post.date).toLocaleDateString()}
              <span className="mx-2">•</span>
              <User className="h-4 w-4 mr-2" />
              {post.author}
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">{post.title}</h2>
            <p className="text-gray-600 mb-4">{post.excerpt}</p>
            <Link 
              to={`/blog/${post.id}`}
              className="inline-flex items-center text-indigo-600 hover:text-indigo-500"
            >
              Read More
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </article>
      ))}
    </div>
  );
}
import React from 'react';
import { Link } from 'react-router-dom';
import { Twitter, Facebook, Instagram, Linkedin, ArrowUp } from 'lucide-react';

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gray-50 border-t border-gray-200 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* Resources Column */}
          <div>
            <h3 className="text-lg font-bold text-gray-900 mb-4">Resources</h3>
            <ul className="space-y-3">
              <li><Link to="/blog" className="text-gray-600 hover:text-indigo-600">Blog</Link></li>
              <li><Link to="/deals" className="text-gray-600 hover:text-indigo-600">Deals</Link></li>
              <li><Link to="/categories" className="text-gray-600 hover:text-indigo-600">All AI Categories</Link></li>
              <li><Link to="/popular" className="text-gray-600 hover:text-indigo-600">Most Popular AI</Link></li>
              <li><Link to="/top-100" className="text-gray-600 hover:text-indigo-600">Top 100 AI Tools</Link></li>
              <li><Link to="/free-tools" className="text-gray-600 hover:text-indigo-600">Free AI Tools</Link></li>
            </ul>
          </div>

          {/* Support Column */}
          <div>
            <h3 className="text-lg font-bold text-gray-900 mb-4">Support</h3>
            <ul className="space-y-3">
              <li><Link to="/submit-tool" className="text-gray-600 hover:text-indigo-600">Submit Tool</Link></li>
              <li><Link to="/update-tool" className="text-gray-600 hover:text-indigo-600">Update Tool</Link></li>
              <li><Link to="/affiliates" className="text-gray-600 hover:text-indigo-600">Affiliates</Link></li>
              <li><Link to="/contact" className="text-gray-600 hover:text-indigo-600">Contact Us</Link></li>
            </ul>
          </div>

          {/* Company Column */}
          <div>
            <h3 className="text-lg font-bold text-gray-900 mb-4">Company</h3>
            <ul className="space-y-3">
              <li><Link to="/about" className="text-gray-600 hover:text-indigo-600">About Us</Link></li>
              <li><Link to="/privacy" className="text-gray-600 hover:text-indigo-600">Privacy Policy</Link></li>
              <li><Link to="/terms" className="text-gray-600 hover:text-indigo-600">Terms of Service</Link></li>
            </ul>
          </div>

          {/* Newsletter Column */}
          <div className="flex flex-col">
            <h3 className="text-lg font-bold text-gray-900 mb-4">Stay Updated</h3>
            <p className="text-gray-600 mb-4">Subscribe to our newsletter for the latest AI tools and updates.</p>
            <div className="flex flex-col space-y-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
              />
              <button className="w-full px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Social Links & Copyright */}
        <div className="border-t border-gray-200 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex space-x-6 mb-4 md:mb-0">
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-indigo-600">
                <Twitter className="h-6 w-6" />
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-indigo-600">
                <Facebook className="h-6 w-6" />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-indigo-600">
                <Instagram className="h-6 w-6" />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-indigo-600">
                <Linkedin className="h-6 w-6" />
              </a>
            </div>
            <p className="text-gray-500 text-sm">© {new Date().getFullYear()} AI Tools Hub. All rights reserved.</p>
          </div>
        </div>

        {/* Scroll to Top Button */}
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 p-2 bg-indigo-600 text-white rounded-full shadow-lg hover:bg-indigo-700 transition-colors"
        >
          <ArrowUp className="h-6 w-6" />
        </button>
      </div>
    </footer>
  );
}
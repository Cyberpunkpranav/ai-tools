import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, ChevronDown, FileText, Code2, MessageSquare, Hash, Image, Mail, Languages } from 'lucide-react';

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const allTools = [
    { 
      name: 'Prescription Reader',
      icon: FileText,
      path: '/prescription',
      description: 'Convert handwritten prescriptions to text'
    },
    { 
      name: 'Code Generator',
      icon: Code2,
      path: '/code-generator',
      description: 'Generate code snippets with AI'
    },
    {
      name: 'Document Translator',
      icon: Languages,
      path: '/translator',
      description: 'Translate documents to multiple languages'
    },
    {
      name: 'Hashtag Generator',
      icon: Hash,
      path: '/hashtags',
      description: 'Generate trending hashtags for social media'
    },
    {
      name: 'Image Analyzer',
      icon: Image,
      path: '/image-analyzer',
      description: 'Analyze images with AI'
    },
    {
      name: 'Email Generator',
      icon: Mail,
      path: '/email-generator',
      description: 'Generate professional emails'
    }
  ];

  const featuredTools = allTools.slice(0, 3);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-white/80 backdrop-blur-sm shadow-lg sticky top-0 z-50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2 group">
              <motion.div
                whileHover={{ rotate: 180 }}
                transition={{ duration: 0.3 }}
              >
                <Sparkles className="h-8 w-8 text-indigo-600" />
              </motion.div>
              <span className="text-xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                AI Tools Hub
              </span>
            </Link>

            <div className="hidden md:flex ml-8 space-x-1">
              {featuredTools.map((tool) => (
                <Link
                  key={tool.path}
                  to={tool.path}
                  className="flex items-center px-4 py-2 text-gray-700 hover:text-indigo-600 hover:bg-indigo-50 rounded-lg transition-colors duration-200"
                >
                  <tool.icon className="h-5 w-5 mr-2" />
                  {tool.name}
                </Link>
              ))}
              <Link
                to="/blog"
                className="flex items-center px-4 py-2 text-gray-700 hover:text-indigo-600 hover:bg-indigo-50 rounded-lg transition-colors duration-200"
              >
                Blog
              </Link>
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <div className="relative" ref={dropdownRef}>
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="flex items-center space-x-2 text-gray-700 hover:text-indigo-600 px-4 py-2 rounded-lg transition-colors duration-200"
              >
                <span>All Tools</span>
                <motion.div
                  animate={{ rotate: isOpen ? 180 : 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <ChevronDown className="h-4 w-4" />
                </motion.div>
              </button>
              
              <AnimatePresence>
                {isOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute right-0 mt-2 w-80 bg-white rounded-xl shadow-xl py-2 z-50"
                  >
                    <div className="px-4 py-2 border-b border-gray-100">
                      <h3 className="text-sm font-semibold text-gray-500">Available Tools</h3>
                    </div>
                    {allTools.map((tool, index) => (
                      <Link
                        key={tool.path}
                        to={tool.path}
                        onClick={() => setIsOpen(false)}
                        className="block px-4 py-3 hover:bg-indigo-50 transition-colors duration-200"
                      >
                        <motion.div
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.05 }}
                          className="flex items-center"
                        >
                          <div className="bg-gradient-to-br from-indigo-50 to-indigo-100 p-2 rounded-lg">
                            <tool.icon className="h-5 w-5 text-indigo-600" />
                          </div>
                          <div className="ml-3">
                            <div className="font-medium text-gray-900">{tool.name}</div>
                            <div className="text-sm text-gray-500">{tool.description}</div>
                          </div>
                        </motion.div>
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <Link
              to="/contact"
              className="flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-indigo-600 to-indigo-700 text-white rounded-lg hover:from-indigo-700 hover:to-indigo-800 transition-colors duration-200 shadow-md hover:shadow-lg"
            >
              <MessageSquare className="h-5 w-5" />
              <span>Contact Us</span>
            </Link>
          </div>
        </div>
      </div>
    </motion.nav>
  );
}
import React from 'react';
import { FileText, Hash, Image, Code2, Mail, Languages } from 'lucide-react';
import { motion } from 'framer-motion';
import { ToolCard } from './ToolCard';

export function Tools() {
  const tools = [
    {
      title: "Prescription Reader",
      description: "Convert doctor's handwritten prescriptions into clear, readable text with high accuracy",
      icon: FileText,
      to: "/prescription",
      category: "Healthcare",
      image: "https://images.unsplash.com/photo-1585435557343-3b092031a831?ixlib=rb-1.2.1"
    },
    {
      title: "Document Translator",
      description: "Translate documents to multiple languages with support for PDF and text formats",
      icon: Languages,
      to: "/translator",
      category: "Translation",
      image: "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?ixlib=rb-1.2.1"
    },
    {
      title: "Hashtag Generator",
      description: "Generate relevant, trending hashtags for your social media content to increase engagement",
      icon: Hash,
      to: "/hashtags",
      category: "Social Media",
      image: "https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?ixlib=rb-1.2.1"
    },
    {
      title: "Image Analyzer",
      description: "Get detailed analysis and insights from any image using advanced computer vision",
      icon: Image,
      to: "/image-analyzer",
      category: "Analysis",
      image: "https://images.unsplash.com/photo-1633419461186-7d40a38105ec?ixlib=rb-1.2.1"
    },
    {
      title: "Code Generator",
      description: "Generate clean, efficient code snippets and solutions using AI assistance",
      icon: Code2,
      to: "/code-generator",
      category: "Development",
      image: "https://images.unsplash.com/photo-1587620962725-abab7fe55159?ixlib=rb-1.2.1"
    },
    {
      title: "Email Generator",
      description: "Create professional emails quickly with AI-powered templates and suggestions",
      icon: Mail,
      to: "/email-generator",
      category: "Communication",
      image: "https://images.unsplash.com/photo-1596526131083-e8c633c948d2?ixlib=rb-1.2.1"
    }
  ];

  return (
    <div className="py-24 bg-gray-50" id="tools-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl font-bold text-gray-900 mb-4"
          >
            Explore Our AI Tools
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-gray-600 max-w-3xl mx-auto"
          >
            Discover our collection of AI-powered tools designed to make your work easier and more efficient
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {tools.map((tool, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <ToolCard {...tool} />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
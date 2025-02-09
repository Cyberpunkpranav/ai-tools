import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Brain, Zap, ArrowRight } from 'lucide-react';

export function Hero() {
  const scrollToTools = () => {
    const toolsSection = document.getElementById('tools-section');
    if (toolsSection) {
      toolsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative bg-gradient-to-b from-indigo-50 to-white">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-4xl mx-auto"
        >
          <div className="inline-flex items-center px-4 py-2 bg-indigo-100 rounded-full mb-8">
            <Sparkles className="h-5 w-5 text-indigo-600 mr-2" />
            <span className="text-indigo-800 font-medium">Powered by Advanced AI</span>
          </div>

          <h1 className="text-6xl font-bold text-gray-900 mb-6 leading-tight">
            AI-Powered Tools for{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">
              Everyone
            </span>
          </h1>
          
          <p className="text-xl text-gray-600 mb-12 leading-relaxed">
            Discover our suite of intelligent tools designed to simplify your workflow. 
            From prescription reading to code generation, we're here to make your tasks easier.
          </p>
          
          <div className="flex justify-center gap-4">
            <motion.button
              onClick={scrollToTools}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center px-8 py-4 text-lg font-medium rounded-xl shadow-lg text-white bg-gradient-to-r from-indigo-600 to-indigo-700 hover:from-indigo-700 hover:to-indigo-800 transition-all duration-200"
            >
              Explore Tools
              <ArrowRight className="ml-2 h-5 w-5" />
            </motion.button>
          </div>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 mt-24">
          {[
            {
              icon: Sparkles,
              title: "Smart & Efficient",
              description: "Powered by advanced AI to deliver accurate results in seconds"
            },
            {
              icon: Brain,
              title: "Continuously Learning",
              description: "Our AI models improve with each interaction, getting better every day"
            },
            {
              icon: Zap,
              title: "Easy Integration",
              description: "Simple API access and user-friendly interfaces for seamless workflow"
            }
          ].map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="bg-white/80 backdrop-blur-sm p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-200"
            >
              <div className="bg-gradient-to-br from-indigo-50 to-indigo-100 w-14 h-14 rounded-lg flex items-center justify-center mb-6">
                <feature.icon className="h-8 w-8 text-indigo-600" />
              </div>
              <h3 className="text-xl font-bold mb-4">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
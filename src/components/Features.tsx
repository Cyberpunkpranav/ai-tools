import React from 'react';
import { motion } from 'framer-motion';

export function Features() {
  return (
    <div className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Why Choose Our AI Tools?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We combine cutting-edge AI technology with user-friendly interfaces to deliver powerful solutions for your everyday needs.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <img
              src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3"
              alt="AI Technology"
              className="rounded-2xl shadow-2xl"
            />
          </motion.div>

          <div className="space-y-8 my-auto">
            {[
              {
                title: "Advanced AI Models",
                description: "Powered by state-of-the-art machine learning models for accurate results"
              },
              {
                title: "Privacy First",
                description: "Your data is processed securely and never stored without permission"
              },
              {
                title: "Regular Updates",
                description: "Continuous improvements and new features based on user feedback"
              },
              {
                title: "24/7 Support",
                description: "Dedicated support team to help you get the most out of our tools"
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="flex gap-4"
              >
                <div className="flex-shrink-0">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-indigo-100 text-indigo-600">
                    <span className="text-xl font-bold">{index + 1}</span>
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
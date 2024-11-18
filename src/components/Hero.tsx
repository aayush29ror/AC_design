import React from 'react';
import { motion } from 'framer-motion';

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center bg-gray-950 py-20 overflow-hidden">
      <div className="absolute inset-0 hero-gradient" />
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-brand-cyan/10 via-brand-purple/10 to-transparent opacity-30 gradient-mask" />
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Creative Web Developer
            </h1>
            <p className="text-xl text-gray-400 mb-8">
              Crafting beautiful and functional digital experiences that make a difference.
            </p>
            <div className="flex gap-4">
              <motion.a
                href="#projects"
                className="px-6 py-3 bg-gradient-to-r from-brand-cyan to-brand-purple text-white rounded-lg hover:opacity-90 transition-opacity"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                View Projects
              </motion.a>
              <motion.a
                href="#contact"
                className="px-6 py-3 border border-brand-cyan text-white rounded-lg hover:bg-brand-cyan/10 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Contact Me
              </motion.a>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="aspect-square rounded-full bg-gradient-to-r from-brand-cyan to-brand-purple opacity-20 blur-3xl absolute inset-0" />
            <img
              src="https://placehold.co/600x600/1a1a1a/ffffff?text=Profile"
              alt="Profile"
              className="relative z-10 rounded-3xl w-full"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};
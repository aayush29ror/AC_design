import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { CodeBracketIcon, PaintBrushIcon, RocketLaunchIcon } from '@heroicons/react/24/outline';

const services = [
  {
    title: 'Web Development',
    description: 'Building responsive and performant websites using modern technologies and best practices.',
    icon: CodeBracketIcon,
  },
  {
    title: 'UI/UX Design',
    description: 'Creating intuitive and visually appealing interfaces that enhance user experience.',
    icon: PaintBrushIcon,
  },
  {
    title: 'Web Performance',
    description: 'Optimizing websites for speed, accessibility, and search engine visibility.',
    icon: RocketLaunchIcon,
  },
];

export const Services = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <section className="py-20 bg-gray-950" id="services">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold text-white mb-4">Services</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Specialized solutions tailored to meet your digital needs
          </p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-gray-900 p-8 rounded-xl border border-brand-cyan/20 hover:border-brand-cyan/40 transition-colors"
            >
              <service.icon className="w-12 h-12 text-brand-cyan mb-6" />
              <h3 className="text-xl font-bold text-white mb-4">{service.title}</h3>
              <p className="text-gray-400">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
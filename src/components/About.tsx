import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <section className="py-20 bg-gray-900" id="about">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
        >
          <div>
            <h2 className="text-3xl font-bold text-white mb-6">About Me</h2>
            <p className="text-gray-400 mb-6">
              I'm a passionate web developer with expertise in creating modern, responsive, and user-friendly websites. 
              With years of experience in the field, I've worked on various projects ranging from simple landing pages 
              to complex web applications.
            </p>
            <p className="text-gray-400 mb-6">
              My approach combines creative design with clean, efficient code to deliver exceptional digital experiences 
              that meet both user needs and business objectives.
            </p>
            <div className="grid grid-cols-2 gap-6">
              <div>
                <h3 className="text-xl font-semibold text-white mb-2">Skills</h3>
                <ul className="text-gray-400 space-y-2">
                  <li>React.js</li>
                  <li>TypeScript</li>
                  <li>Tailwind CSS</li>
                  <li>Node.js</li>
                  <li>Figma</li>
                  <li>Adobe Creative Suite</li>
                  <li>AI Prompt Engineering</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white mb-2">Experience</h3>
                <ul className="text-gray-400 space-y-2">
                  <li>Web Development</li>
                  <li>UI/UX Design</li>
                  <li>Responsive Design</li>
                  <li>Email Marketing</li>
                  <li>Performance Optimization</li>
                  <li>Search Engine Optimization</li>
                </ul>
              </div>
            </div>
          </div>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <img
              src="https://placehold.co/600x800/1a1a1a/ffffff?text=About"
              alt="About"
              className="rounded-3xl w-full"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
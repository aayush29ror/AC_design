import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ProjectCard } from './ProjectCard';


const projects = [
  {
    title: 'Trust Nota',
    description: 'Complete website redesign focusing on improved user experience and modern aesthetics.',
    imageUrl: 'https://placehold.co/600x400/1a1a1a/ffffff?text=Trust+Nota',
    link: 'https://www.trustnota.com/',
    tags: ['Redesign', 'UI/UX', 'Web Development']
  },
  {
    title: 'Nitrogen Wealth',
    description: 'Enterprise landing page redesign and rebranding project.',
    imageUrl: 'https://placehold.co/600x400/1a1a1a/ffffff?text=Nitrogen+Wealth',
    link: 'https://nitrogenwealth.com/lp/nitrogen-enterprise/',
    tags: ['Redesign', 'Branding', 'Enterprise']
  },
  {
    title: 'Modern Health',
    description: 'Landing page development with complex form logic implementation.',
    imageUrl: 'https://placehold.co/600x400/1a1a1a/ffffff?text=Modern+Health',
    link: 'https://join.modernhealth.com/monthly-workplace-wellness-table-talks.html',
    tags: ['Landing Page', 'Form Logic', 'Healthcare']
  },
  {
    title: 'Movement 51',
    description: 'Complete website build from ground up.',
    imageUrl: 'https://placehold.co/600x400/1a1a1a/ffffff?text=Movement+51',
    link: 'https://www.movement51.org/',
    tags: ['Web Development', 'Full Site']
  },
  {
    title: 'Appcast',
    description: 'Landing page template development.',
    imageUrl: 'https://placehold.co/600x400/1a1a1a/ffffff?text=Appcast.io',
    link: 'https://info.appcast.io/-temporary-slug-c27c477a-ef27-4335-b6d4-c800e2f970a4?hs_preview=NWKTXgQw-108246399816',
    tags: ['HubSpot Template', 'Landing Page']
  }
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

export const Projects = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <section className="py-20 bg-gray-950" id="projects">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-4">Featured Projects</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            A showcase of my recent work in web development and design.
          </p>
        </motion.div>
        <motion.div
          ref={ref}
          variants={container}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} index={index} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};
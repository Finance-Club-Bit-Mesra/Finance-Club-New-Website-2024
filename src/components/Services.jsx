'use client';

import { motion, useScroll} from 'framer-motion';
import { useRef } from 'react';

const Features = [
  {
    title: 'Financial Management Course',
    description: '30 hours non-credit based financial management course with finance software.',
  },
  {
    title: 'Lectures / Seminars / Live Sessions',
    description: 'Lectures/Seminars/Live Sessions on GST, Taxes, Insurances, Investment Options.',
  },
  {
    title: 'Teaching',
    description: 'Teaching on all types of important financial scopes.',
  },
  {
    title: 'Competitive Events',
    description: 'Engaging competitions designed to enhance financial skills and practical knowledge.',
  },
];

const Services = () => {
  const sectionRef = useRef(null);

  return (
    <section
      ref={sectionRef}
      className="bg-fcbluelight py-24 overflow-x-clip"
      id='services'
    >
      <div className="container mx-auto px-4 sm:px-8 z-10">
        <h2 className="section-title mb-5">
            Services
          </h2>
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4 sm:grid-cols-1 mt-12 mx-auto px-4 sm:px-8">
          {Features.map((feature, index) => (
            <motion.div
              key={index}
              className="flex flex-col gap-2 text-lg items-start rounded-xl bg-white/80 backdrop-blur-md p-8 shadow-lg"
              whileHover={{ scale: 1.05 }} 
              transition={{ type: 'tween', stiffness: 300 }}
            >
              <h3 className="font-bold">{feature.title}</h3>
              <p className="text-base">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;

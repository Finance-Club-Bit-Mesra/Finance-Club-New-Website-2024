'use client';

import { useEffect, useRef, useState } from 'react';
import { Instagram, Facebook, Twitter } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Objectives() {
  const [scrollY, setScrollY] = useState(0);
  const sectionRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(null); // State to track active objective

  useEffect(() => {
    const handleScroll = () => {
      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom > 0) {
          setScrollY(window.scrollY - rect.top);
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const objectives = [
    {
      title: 'Stock Analysis',
      description:
        'Learn to analyze stock market trends, financial reports, and investment patterns to make informed trading decisions.',
    },
    {
      title: 'Financial Softwares',
      description:
        'Explore and develop tools for managing personal and business finances, automating tasks, and streamlining investment strategies.',
    },
    {
      title: 'Investment and Trading',
      description:
        'Gain practical knowledge about investment techniques, portfolio management, and trading strategies across global markets.',
    },
    {
      title: 'Reviews',
      description:
        'Critically review and compare financial tools, software, and services to guide individuals and businesses.',
    },
    {
      title: 'Insurance',
      description:
        'Understand the principles of insurance, risk management, and how to select the best insurance products.',
    },
    {
      title: 'Tackle Financial Crisis',
      description:
        'Develop skills to manage financial downturns, debt recovery, and strategies for economic stability.',
    },
  ];

  const toggleActive = (index) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <section ref={sectionRef} className="relative bg-gradient-to-t from-fcblue to-fcbluelight " id="objectives">
      {/* Content */}
      <div className="container mx-auto px-8 py-24">
        <div className="grid md:grid-cols-2 gap-16 items-start">
          {/* Left Column */}
          <div className="space-y-8 self-start h-full">
            <h2 className="section-title ">
              Objectives of the Club
            </h2>

            

            <p className="text-xl text-gray-800 max-w-md mx-auto">
              The Finance Club aims to improve financial knowledge, teach personal
              finance management, and develop investment skills. It provides a space to
              learn, collaborate, and stay updated on financial trends.
            </p>
          </div>

          {/* Right Column */}
          <div className="space-y-6">
            {objectives.map((objective, index) => (
              <div key={index} className="group cursor-pointer">
                <div
                  className="relative flex items-center justify-between border-b border-gray-800"
                  onClick={() => toggleActive(index)}
                >
                  <h3 className="text-xl md:text-2xl text-black py-2 transition-transform duration-300 group-hover:-translate-y-1">
                    {objective.title}
                  </h3>
                  <span className="ml-4 text-2xl">
                    {activeIndex === index ? '-' : '+'}
                  </span>
                </div>
                <AnimatePresence>
                  {activeIndex === index && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      className="overflow-hidden"
                    >
                      <p className="mt-4 text-gray-600">{objective.description}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

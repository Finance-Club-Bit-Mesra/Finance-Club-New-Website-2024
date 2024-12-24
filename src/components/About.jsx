'use client';

import BIT from '../assets/aboutbg.png';
import piggy from '../assets/piggybank.png';
import money from '../assets/money.png';
import btc from '../assets/btc.png';
import card from '../assets/card.png';
import arrowIcon from '../assets/arrow-right.svg'; 
import { motion, useScroll, useTransform } from 'framer-motion';
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

const About = () => {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });

  const rotateX = useTransform(scrollYProgress, [0, 1], [15, 0]);
  const opacity = useTransform(scrollYProgress, [0, 1], [0.5, 1]);
  const transformPerspective = "600px";

  return (
    <section
      ref={sectionRef}
      className="bg-gradient-to-b from-white to-fcbluelight pt-24 overflow-x-clip"
      id='about'
    >
      <div className="container mx-auto px-4 sm:px-8 z-10">
        <div className="section-heading text-center md:text-left">
          <h2 className="section-title">
            About Us
          </h2>
          <p className="section-description text-lg mt-5">
            The Finance Club, BIT Mesra has been established with the aim to acquaint the students with economic and financial concepts enabling them to cope up with the complex financial world outside. The club provides the opportunity to gain various financial skills which will not only help them manage their personal finances well but also generate passive source of income. It gives the platform where finance enthusiasts can come together for all round holistic development in an atmosphere of friendly competition.
          </p>
        </div>
        <div className="relative">
          <motion.img
            src={BIT}
            alt="BIT"
            className="mt-0 w-[60%] mx-auto"
            style={{
              rotateX,
              opacity,
              transformPerspective,
            }}
          />
          <motion.img
            src={piggy}
            alt="Piggy"
            height={262}
            width={262}
            className="hidden md:block absolute -right-24 -top-64"
            style={{
              translateY: useTransform(scrollYProgress, [0, 1], [150, -150]),
            }}
          />
          <motion.img
            src={money}
            alt="money"
            height={300}
            width={300}
            className="hidden md:block absolute -right-20 bottom-52 opacity-75"
            style={{
              translateY: useTransform(scrollYProgress, [0, 1], [150, -150]),
              rotate: 30,
            }}
          />
          <motion.img
            src={btc}
            alt="bitcoin"
            height={248}
            width={248}
            className="hidden md:block absolute bottom-20 -left-16"
            style={{
              translateY: useTransform(scrollYProgress, [0, 1], [150, -150]),
            }}
          />
          <motion.img
            src={card}
            alt="finance"
            height={256}
            width={256}
            className="hidden md:block absolute -top-48 -left-10 opacity-80"
            style={{
              translateY: useTransform(scrollYProgress, [0, 1], [150, -150]),
            }}
          />
        </div>

        
        {/* <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4 sm:grid-cols-1 mt-0 mx-auto px-4 sm:px-8">
          {Features.map((feature, index) => (
            <motion.div
              key={index}
              className="flex flex-col gap-2 text-lg items-start rounded-xl bg-white/90 backdrop-blur-md p-8 shadow-lg"
              whileHover={{ scale: 1.05 }} // Zoom effect
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <h3 className="font-bold">{feature.title}</h3>
              <p className="text-base">{feature.description}</p>
            </motion.div>
          ))}
        </div> */}
      </div>
    </section>
  );
};

export default About;

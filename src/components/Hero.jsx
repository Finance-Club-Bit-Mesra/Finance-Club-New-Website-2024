"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import bitcoin from "../assets/bitcoin.png";
import piggy from "../assets/piggybank.png";
import dollar from "../assets/dollar.png";
import ArrowIcon from "../assets/arrow-right.svg";
import { Link } from "react-router";
import { useNavigate, useLocation } from "react-router-dom";

export default function Hero() {
  const navigate = useNavigate();
  const location = useLocation();

  const scrollToSection = (hash) => {
    if (!hash) return;

    const sectionId = hash.replace("#", "");
    const section = document.getElementById(sectionId);

    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    } else {
      console.warn("Section not found:", sectionId);
    }
  };

  const handleNavigation = (link) => {
    const [path, hash] = link.split("#");

    if (location.pathname !== path) {
      navigate(path, { replace: true });
      if (hash) {
        setTimeout(() => scrollToSection(`#${hash}`), 100);
      }
    } else {
      if (hash) {
        scrollToSection(`#${hash}`);
      } else {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
    }
  };
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start end", "end start"],
  });
  const translateY = useTransform(scrollYProgress, [0, 1], [150, -150]);

  return (
    <section
      ref={heroRef}
      className="relative h-screen pt-24 pb-20 bg-[radial-gradient(ellipse_200%_100%_at_bottom_left,#7dc9fc,#e0f2fe_100%)] overflow-hidden flex items-center"
    >
      <motion.img
              src={piggy}
              width={160}
              height={160}
              alt="Piggybank"
              className="top-1/3 absolute left-1/3 sm:block md:hidden "
              style={{
                rotate: 0,
              }}
              animate={{
                rotate:360,
                translateY: [-100,100],
                translateX: [-200,200],
              }}
              transition={{
                repeat: Infinity ,
                repeatType: "mirror",
                duration: 8,
                ease: 'easeInOut',
              }}
            />

      <div className="container mx-auto max-w-[90%] h-full flex items-center relative z-10">
        <div className="md:flex items-center w-full">
          {/* Left Content */}
          <div className="md:w-[478px]">
            <h1 className="text-5xl md:text-7xl font-bold tracking-tighter bg-gradient-to-b from-black to-fcbluedark text-transparent bg-clip-text mt-6">
              Welcome to BIT Mesra&apos;s Finance Club
            </h1>
            <p className="md:text-xl text-lg text-fcbluedark tracking-tight mt-6">
              Unleash the financial tycoon within you. <br /> Learn, grow and
              excel in the world of finance.
            </p>
            <div className="flex gap-1 items-center mt-[30px]">
              <Link to="/login">
                <button className="btn btn-primary">Join Us</button>
              </Link>

              <button
                key={'#about'}
                onClick={() => handleNavigation('#about')}
                className="btn btn-text gap-1 group transition-all duration-300 ease-in-out flex items-center"
              >
                <span>Learn more</span>
                <img
                  src={ArrowIcon}
                  alt="Arrow"
                  className="h-5 w-5 transform transition-transform duration-300 ease-in-out group-hover:translate-x-1"
                />
              </button>
            </div>
          </div>

          {/* Right Content */}
          <div className="hidden md:block md:mt-0 md:h-screen md:flex-1 relative">
            <motion.img
              src={bitcoin}
              alt="Bitcoin"
              className="absolute h-auto w-[70%] max-w-[300px] md:max-w-none md:h-[92%] md:w-auto left-32 top-12"
              loading="lazy"
              animate={{
                translateY: [-30, 30],
              }}
              transition={{
                repeat: Infinity,
                repeatType: "mirror",
                duration: 4,
                ease: "easeInOut",
              }}
            />
            <motion.img
              src={piggy}
              width={200}
              height={200}
              alt="Piggybank"
              className="top-20 absolute -left-8"
              loading="lazy"
              style={{
                rotate: -30,
                translateY: translateY,
              }}
            />
            <motion.img
              src={dollar}
              width={200}
              alt="Dollar"
              className="absolute -bottom-8 -left-24 rotate-[30deg]"
              loading="lazy"
              style={{
                rotate: 30,
                translateY: translateY,
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}


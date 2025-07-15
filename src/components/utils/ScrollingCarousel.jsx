'use client';

import { useEffect, useRef, useState } from 'react';
import stalkthestock from "../../assets/events/stalkthestock.jpg";
import behindthestump from "../../assets/events/behindthestumps.jpg";
import enigma from "../../assets/events/enigma.jpg";
import arthanarth from "../../assets/events/arthanarth.jpg";
import chess from "../../assets/events/chess.jpg";
import estimania from "../../assets/events/estimania.jpg";
import wallstreet from "../../assets/events/wallstreet.jpg";
import cfa from "../../assets/workshop/cfa.jpg";
import virendra from "../../assets/workshop/virendra.jpg";
import zerodha from "../../assets/workshop/zerodha.jpg";

const carouselData = [
  {
    direction: 'left',
    images: [wallstreet, estimania, chess, behindthestump],
  },
  {
    direction: 'right',
    images: [stalkthestock, arthanarth, enigma],
  },
];

export function ScrollingCarousel() {
  const containerRef = useRef(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isMdOrLarger, setIsMdOrLarger] = useState(false);

  useEffect(() => {
    const updateScreenSize = () => {
      setIsMdOrLarger(window.matchMedia('(min-width: 768px)').matches);
    };

    updateScreenSize();
    window.addEventListener('resize', updateScreenSize);

    return () => window.removeEventListener('resize', updateScreenSize);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;

      const container = containerRef.current;
      const containerTop = container.offsetTop;
      const containerHeight = container.offsetHeight;
      const windowHeight = window.innerHeight;
      const scrollY = window.scrollY;

      const progress = Math.max(
        0,
        Math.min(
          1,
          (scrollY - containerTop + windowHeight) / (containerHeight + windowHeight)
        )
      );

      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative overflow-hidden h-full bg-transparent"
      style={
        isMdOrLarger
          ? {
              maskImage: 'linear-gradient(to left, rgba(224, 242, 254, 1), rgba(0, 0, 0, 0), 100%)',
              WebkitMaskImage: 'linear-gradient(to left, rgba(224, 242, 254, 1), rgba(0, 0, 0, 0) 100%)',
              maskRepeat: 'no-repeat',
              WebkitMaskRepeat: 'no-repeat',
            }
          : {
            maskImage: 'linear-gradient(to bottom, rgba(224, 242, 254, 1), rgba(0, 0, 0, 1), 100%)',
            WebkitMaskImage: 'linear-gradient(to bottom, rgba(224, 242, 254, 1), rgba(0, 0, 0, 1) 100%)',
            maskRepeat: 'no-repeat',
            WebkitMaskRepeat: 'no-repeat',
          }
      }
    >
      {carouselData.map((row, rowIndex) => (
        <div key={rowIndex} className="flex gap-4 mt-4">
          {[...row.images, ...row.images].map((src, imageIndex) => (
            <div
              key={imageIndex}
              className="flex-none md:w-72 md:h-48 w-52 h-32 rounded-lg overflow-hidden shadow-lg transition-transform"
              style={{
                transform: `translateX(${
                  row.direction === 'left' ? scrollProgress * 25 : -scrollProgress * 50
                }%)`,
                transition: 'transform 1s ease-out',
              }}
            >
              <img src={src} alt={`Carousel item ${imageIndex + 1}`} className="w-full object-cover" />
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}

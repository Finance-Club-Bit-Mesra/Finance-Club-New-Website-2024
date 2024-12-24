'use client'

import { useEffect, useRef, useState } from 'react'
import stalkthestock from "../../assets/events/stalkthestock.jpeg";
import behindthestump from "../../assets/events/behindthestumps.jpeg";
import houseoflegacy from "../../assets/events/houseoflegacy.jpeg";
import enigma from "../../assets/events/enigma.jpeg";
import tycoon from "../../assets/events/tycoon.jpeg";
import marketkshtera from "../../assets/events/maket_kshetra.jpeg";
import arthanarth from "../../assets/events/arthanarth.jpg";
import businessplan from "../../assets/events/bplan.jpg";
import chess from "../../assets/events/chess.jpg";
import estimania from "../../assets/events/estimania.jpg";
import wallstreet from "../../assets/events/wallstreet.jpg";
import bitnishan from "../../assets/events/bitnishan.jpg";
import cfa from "../../assets/workshop/cfa.jpg";
import virendra from "../../assets/workshop/virendra.jpg";
import zerodha from "../../assets/workshop/zerodha.jpg";

// Define the rows of images
const carouselData = [
  {
    direction: 'left',
    images: [wallstreet,bitnishan,estimania,chess,businessplan,behindthestump,houseoflegacy],
  },
  {
    direction: 'right',
    images: [stalkthestock,arthanarth,enigma,tycoon,marketkshtera],
  },
];

export function ScrollingCarousel() {
  const containerRef = useRef(null)
  const [scrollProgress, setScrollProgress] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return

      const container = containerRef.current
      const containerTop = container.offsetTop
      const containerHeight = container.offsetHeight
      const windowHeight = window.innerHeight
      const scrollY = window.scrollY

      const progress = Math.max(
        0,
        Math.min(
          1,
          (scrollY - containerTop + windowHeight) / (containerHeight + windowHeight)
        )
      )

      setScrollProgress(progress)
    }

    window.addEventListener('scroll', handleScroll)
    handleScroll()

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div
      ref={containerRef}
      className="relative overflow-hidden h-full bg-transparent" style={{
        maskImage: 'linear-gradient(to bottom, rgba(224, 242, 254, 0.75), rgba(0, 0, 0, 0) 85%)',
        WebkitMaskImage: 'linear-gradient(to bottom, rgba(224, 242, 254, 0.75), rgba(0, 0, 0, 0) 85%)',
        maskRepeat: 'no-repeat',
        WebkitMaskRepeat: 'no-repeat',
      }}
    >
      {carouselData.map((row, rowIndex) => (
        <div
          key={rowIndex}
          className="flex gap-4  mt-8"
          style={{
            transform: `translateX(${
              row.direction === 'left'
                ? -scrollProgress * 50
                : scrollProgress * 50
            }%)`,
            transition: 'transform 2s ease-out',
          }}
        >
          {[...row.images, ...row.images].map((src, imageIndex) => (
            <div
              key={imageIndex}
              className="flex-none w-64 h-40 rounded-lg overflow-hidden shadow-lg transition-transform "
            >
              <img
                src={src}
                alt={`Carousel item ${imageIndex + 1}`}
                className="w-full object-cover"
              />
            </div>
          ))}
        </div>
      ))}
    </div>
  )
}

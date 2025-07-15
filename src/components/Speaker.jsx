import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import abhishek from '../assets/speakers/abhishek.webp'
import abhizura from '../assets/speakers/abhizura.jpeg'
import shahnawaz from '../assets/speakers/shahnawaz.jpeg'
import virendra from '../assets/speakers/virendra.jpeg'
import khushi from '../assets/speakers/khushi.jpeg'
const Speaker = () => {
  const speakers = [
    {
      name: "Abhishek Kar",
      role: "Youtuber, Stock Trader, Business Strategist, Investor",
      image: abhishek,
    },
    {
      name: "Abhishek Sagar",
      role: "Founder & Ceo ZuraVerse, Entrepreneur",
      image: abhizura,
    },
    {
      name: "Virendra Verma",
      role: "Trader Portfolio Manager, Expert in Capital Market",
      image: virendra,
    },
    {
      name: "Khushi Panjwani",
      role: "Entrepreneur 40 U 40, TedX Speaker, Author, Shark Tank India S-3, World Record Holder",
      image: khushi,
    },
    {
      name: "Shahnawaz Khan",
      role: "Full Stack Blockchain Developer, Senior Manager E-Cell IIITR, Web3.0 Builder, Tokenization, Digital Assets & RWA",
      image: shahnawaz,
    },
  ]


  const allSpeakers = [...speakers, ...speakers, ...speakers]
  
  const scrollRef = useRef(null)

  useEffect(() => {
    const scrollContainer = scrollRef.current
    let animationFrameId
    let scrollPos = 0
    
    const scroll = () => {
      scrollPos += 0.5
      if (scrollPos >= scrollContainer.scrollWidth / 2) {
        scrollPos = 0
      }
      scrollContainer.scrollLeft = scrollPos
      animationFrameId = requestAnimationFrame(scroll)
    }

    animationFrameId = requestAnimationFrame(scroll)

    return () => {
      cancelAnimationFrame(animationFrameId)
    }
  }, [])

  return (
    <div className="w-full max-w-7xl mx-auto px-4 py-16">
      <div className="text-center mb-12">
        <h2 className="mb-4 section-title">
          Inspirational Speakers
        </h2>
        <p className="section-description  max-w-xl mx-auto">
          Discover the influential speakers who have shared their wisdom and insights,
          enriching the entrepreneurial spirit.
        </p>
      </div>

      <div className="relative">
        {/* Gradient masks */}
        <div className="absolute left-0 top-0 w-32 h-full bg-gradient-to-r from-fcbluelight to-transparent z-10" />
        <div className="absolute right-0 top-0 w-32 h-full bg-gradient-to-l from-fcbluelight  to-transparent z-10" />
        
        {/* Carousel container */}
        <div 
          ref={scrollRef}
          className="flex gap-8 bg-gradient-to-b from-fcbluelight via-fcblue to-fcbluelight  overflow-x-hidden whitespace-nowrap py-6 px-4"
        >
          {allSpeakers.map((speaker, index) => (
            <motion.div
              key={index}
              className="inline-flex flex-col items-center w-72 flex-shrink-0 group bg-white/80 rounded-3xl p-6 shadow-lg"
              whileHover={{ scale: 1.05 }} 
              transition={{ type: 'tween', stiffness: 300 }}
            >
              <div className="relative w-28 h-28 mb-4 rounded-full overflow-hidden">
                <img
                  src={speaker.image}
                  alt={speaker.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-2xl font-semibold whitespace-normal text-center">
                {speaker.name}
              </h3>
              <p className=" text-sm whitespace-normal text-center">
                {speaker.role}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}
//
export default Speaker;

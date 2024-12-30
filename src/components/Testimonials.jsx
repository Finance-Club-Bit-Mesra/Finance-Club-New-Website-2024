import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { TESTIMONIALS } from '../constants'; 

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const testimonialData = TESTIMONIALS.items;
  const totalTestimonials = testimonialData.length;

  useEffect(() => {
    let intervalId;

    if (isAutoPlaying) {
      intervalId = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % totalTestimonials);
      }, 4000);
    }

    return () => {
      if (intervalId) {
        clearInterval(intervalId);
      }
    };
  }, [isAutoPlaying, totalTestimonials]);

  const resetAutoPlay = () => {
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 3000);
  };

  const handleNext = () => {
    resetAutoPlay();
    setCurrentIndex((prev) => (prev + 1) % totalTestimonials);
  };

  const handlePrevious = () => {
    resetAutoPlay();
    setCurrentIndex((prev) => (prev - 1 + totalTestimonials) % totalTestimonials);
  };

  const goToSlide = (index) => {
    resetAutoPlay();
    setCurrentIndex(index);
  };

  return (
    <div className="container mx-auto  py-24 px-4" id='testimonials'>
      <div className="max-w-6xl mx-auto">
        <h1 className="section-title text-center mb-5">
          Testimonials
        </h1>
        <p className='section-description max-w-2xl mx-auto'>
        Providing financial knowledge and resources to help students excel in the financial world.
        </p>

        <div className="relative md:h-[36rem] h-[48rem] flex items-center justify-center overflow-hidden ">
          <AnimatePresence initial={false} mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
              style={{ position: "absolute", width: "100%", maxWidth: "800px" }}
            >
              {/* Card */}
              <div className="bg-white rounded-2xl shadow-lg p-8  transform-gpu hover:shadow-2xl hover:scale-[0.99] transition-all duration-500 ease-in-out">
                <div className="max-w-3xl mx-auto text-center">
                  <p className="text-base text-gray-800 mb-8 leading-relaxed">
                    {testimonialData[currentIndex].text}
                  </p>
                  <div className="flex flex-col items-center">
                    <div className="w-24 h-24 rounded-full overflow-hidden mb-4">
                      <img
                        src={testimonialData[currentIndex].imageSrc}
                        alt={testimonialData[currentIndex].name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900">
                      {testimonialData[currentIndex].name}
                    </h3>
                    <p className="text-gray-600 text-sm">
                      {testimonialData[currentIndex].username}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          <button
            onClick={handlePrevious}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 rounded-full p-3 shadow-lg hover:bg-white transition-colors z-10"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="w-6 h-6 text-gray-700" />
          </button>

          <button
            onClick={handleNext}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 rounded-full p-3 shadow-lg hover:bg-white transition-colors z-10"
            aria-label="Next testimonial"
          >
            <ChevronRight className="w-6 h-6 text-gray-700" />
          </button>
          {/* niche wala nav */}
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 flex gap-2">
            {testimonialData.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-2 h-2 rounded-full transition-colors ${
                  index === currentIndex ? "bg-gray-700" : "bg-gray-300"
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;

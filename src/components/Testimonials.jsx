import React, { useRef, useEffect } from 'react';
import { TESTIMONIALS } from '../constants';

const TestimonialCard = ({ testimonial }) => (
  <div className="flex-shrink-0 w-[250px] sm:w-[300px] md:w-[400px] bg-white shadow-lg rounded-xl p-6 mx-4 transition-all duration-300 hover:shadow-2xl">
    <div className="flex items-center mb-4">
      <img
        src={testimonial.imageSrc}
        alt={testimonial.name}
        className="w-12 sm:w-14 md:w-16 h-12 sm:h-14 md:h-16 rounded-full mr-4 object-cover"
      />
      <div>
        <h3 className="font-semibold text-sm sm:text-base md:text-lg">{testimonial.name}</h3>
        <p className="text-xs sm:text-sm text-gray-600">{testimonial.username}</p>
      </div>
    </div>
    <p className="text-gray-700 text-xs sm:text-sm md:text-base">{testimonial.text}</p>
  </div>
);

const TestimonialsRow = ({ testimonials, direction }) => {
  const rowRef = useRef(null);

  useEffect(() => {
    const row = rowRef.current;
    if (!row) return;

    const scrollRow = () => {
      if (direction === 'left') {
        if (row.scrollLeft >= row.scrollWidth / 2) {
          row.scrollLeft = 0;
        } else {
          row.scrollLeft += 1;
        }
      } else {
        if (row.scrollLeft <= 0) {
          row.scrollLeft = row.scrollWidth / 2;
        } else {
          row.scrollLeft -= 1;
        }
      }
    };

    const intervalId = setInterval(scrollRow, 40);

    return () => clearInterval(intervalId);
  }, [direction]);

  return (
    <div
      ref={rowRef}
      className="flex overflow-hidden pb-12"
      style={{ scrollBehavior: 'auto' }}
    >
      {[...testimonials, ...testimonials].map((testimonial, index) => (
        <TestimonialCard key={index} testimonial={testimonial} />
      ))}
    </div>
  );
};

const Testimonials = () => {
  const testimonials = TESTIMONIALS.items;
  const midPoint = Math.ceil(testimonials.length / 2);
  const firstRow = testimonials.slice(0, midPoint);
  const secondRow = testimonials.slice(0, midPoint).reverse();

  return (
    <section className="pt-24 pb-12 px-4 overflow-hidden" id="testimonials">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="section-title mb-6">Testimonials</h2>
          <p className="section-description max-w-2xl mx-auto">
          Providing financial knowledge and resources to help students excel in the financial world.
          </p>
        </div>
        <div className="relative">
          <div className="overflow-hidden">
            <TestimonialsRow testimonials={firstRow} direction="left" />
          </div>
          <div className="overflow-hidden">
            <TestimonialsRow testimonials={secondRow} direction="right" />
          </div>
          <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-fcbluelight to-transparent z-10"></div>
          <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-fcbluelight to-transparent z-10"></div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

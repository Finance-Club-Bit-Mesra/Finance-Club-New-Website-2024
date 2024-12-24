'use client';

import { ScrollingCarousel } from './utils/ScrollingCarousel';

export default function Events() {
  return (
    <section className=" py-20  bg-gradient-to-b from-fcblue via-fcbluelight to-fcbluelight" id='events'>
      {/* Hero Section */}
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="section-title mb-5">
            Events
          </h1>
          <p className="section-description max-w-xl mx-auto mb-5">
          Explore our club events, workshops, and speaker sessions. Join us for engaging learning experiences and networking opportunities.
          </p>
          <div className="flex flex-wrap justify-center">
          <a
              href="/events"
              className="bg-blue-500 text-white px-8 py-3 rounded-xl font-medium transition-all ease-out duration-500 hover:scale-105 shadow-lg"
            >
              Show More
            </a>
            
          </div>
        </div>
      </div>

      {/* Scrolling Carousel */}
      <ScrollingCarousel/>
    </section>
  );
}

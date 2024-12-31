'use client';
import { Link } from 'react-router';
import { ScrollingCarousel } from './utils/ScrollingCarousel';

export default function Events() {
  return (
    <section className="py-24 bg-gradient-to-b from-fcblue via-fcbluelight to-fcbluelight" id="events">
      {/* Container for the side-by-side layout */}
      <div className="container mx-auto flex flex-wrap justify-between items-start">
        
        {/* Box 1: Events Title, Description, and Show More */}
        <div className="w-full md:w-2/5 md:mb-0 mx-auto ">
          <div className="max-w-4xl mx-auto text-center mt-8">
            <h1 className="section-title mb-5">Events</h1>
            <p className="section-description max-w-xl mx-auto mb-5">
              Explore our club events, workshops, and speaker sessions. Join us for engaging learning experiences and networking opportunities.
            </p>
            <div className="flex flex-wrap justify-center mb-3">
              <Link
                to="/events"
                className="bg-blue-500 text-white px-8 py-3 rounded-xl font-medium transition-all ease-out duration-500 hover:scale-105 shadow-lg"
              >
                Show More
              </Link>
            </div>
          </div>
        </div>

        {/* Box 2: ScrollingCarousel */}
        <div className="w-full md:w-1/2">
          <ScrollingCarousel />
        </div>
        
      </div>
    </section>
  );
}

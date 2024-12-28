import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="min-h-screen  flex items-center justify-center px-4 sm:px-6 lg:px-8 py-24">
      <div className="max-w-lg w-full space-y-8 text-center">
        <div 
          className="section-title text-9xl animate-bounce"
          style={{ textShadow: '0 4px 6px rgba(0, 0, 0, 0.1)' }}
        >
          404
        </div>
        <h1 className="mt-2 text-4xl font-bold section-title tracking-tight sm:text-5xl">
          Page not found
        </h1>
        <p className="mt-2 text-lg text-gray-600">
          Oops! It seems you've ventured into uncharted territory. 
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition duration-150 ease-in-out"
          >
            Go back home
            <svg 
              className="ml-2 -mr-1 w-5 h-5" 
              fill="currentColor" 
              viewBox="0 0 20 20" 
              xmlns="http://www.w3.org/2000/svg"
            >
              <path 
                fillRule="evenodd" 
                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" 
                clipRule="evenodd"
              />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;


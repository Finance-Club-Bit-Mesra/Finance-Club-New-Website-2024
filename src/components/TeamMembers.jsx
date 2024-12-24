import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Twitter, Facebook, Instagram, Linkedin } from 'lucide-react';
import { teamData } from '../constants';

const TeamMembers = () => {
  const [activeSection, setActiveSection] = useState(() => {
    const saved = localStorage.getItem('activeSection');
    return saved !== null ? parseInt(saved, 10) : 0;
  });

  useEffect(() => {
    localStorage.setItem('activeSection', activeSection.toString());
  }, [activeSection]);

  return (
    <div className="min-h-screen py-24 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="section-title mb-12">Our Team</h1>

        <div className="flex flex-wrap justify-center gap-4 mb-14 mx-8">
          {teamData.map((team, index) => (
            <button
              key={index}
              className={`px-4 py-2 rounded-full ${
                activeSection === index ? 'bg-fcbluedark text-white' : 'bg-white text-gray-700 hover:bg-gray-200'
              } transition-all duration-300 ease-in-out`}
              onClick={() => setActiveSection(index)}
            >
              {team.title}
            </button>
          ))}
        </div>

        <motion.div
          key={activeSection}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5 }}
          className="flex flex-wrap justify-center gap-y-12 gap-x-16 mx-16"
        >
          {teamData[activeSection].members.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300 w-full max-w-[350px]"
            >
              <img src={member.image} alt={member.name} className=" mx-auto w-full h-72 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900">{member.name}</h3>
                <p className="text-gray-600">{member.position}</p>
                <div className="mt-4 flex space-x-2">
                  {member.twitter && (
                    <a href={member.twitter} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-500">
                      <Twitter size={20} />
                    </a>
                  )}
                  {member.facebook && (
                    <a href={member.facebook} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-500">
                      <Facebook size={20} />
                    </a>
                  )}
                  {member.instagram && (
                    <a href={member.instagram} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-pink-500">
                      <Instagram size={20} />
                    </a>
                  )}
                  {member.linkedin && (
                    <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-700">
                      <Linkedin size={20} />
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default TeamMembers;

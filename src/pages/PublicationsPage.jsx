import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Linkedin, Instagram } from 'lucide-react';
import crypto from '../assets/publications/crypto.png';
import forex from '../assets/publications/forex.png';
import candle from '../assets/publications/candle.png';
import tax from '../assets/publications/tax.png';
import budget from '../assets/publications/budget.png';
// Mock data for publications
const publicationsData = [
  {
    id: 1,
    title: 'Decentralized Finance',
    image: crypto,
    linkedin: 'https://www.linkedin.com/company/financeclubbit/',
    instagram: 'https://www.instagram.com/p/DD7PSP4yu1p/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=='
  },
  {
    id: 2,
    title: 'Understanding Forex Market',
    image: forex,
    linkedin: 'https://www.linkedin.com/company/financeclubbit/',
    instagram: 'https://www.instagram.com/p/blockchain-finance/'
  },
  {
    id: 3,
    title: 'CandleStick Pattern Analysis',
    image: candle,
    linkedin: 'https://www.linkedin.com/company/financeclubbit/',
    instagram: 'https://www.instagram.com/p/tech-conference/'
  },
  {
    id: 4,
    title: 'Tax Reforms 2024',
    image: tax,
    linkedin: 'https://www.linkedin.com/company/financeclubbit/',
    instagram: 'https://www.instagram.com/p/hackathon-winners/'
  },
  {
    id: 5,
    title: 'Budget Analysis 2024',
    image: budget,
    linkedin: 'https://www.linkedin.com/company/financeclubbit/',
    instagram: 'https://www.instagram.com/p/stock-market-analysis/'
  },
  
];

const PublicationsPage = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth'});
},[]);
  return (
    <div className="min-h-screen py-24 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="section-title mb-12">Our Publications</h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5 }}
          className="flex flex-wrap justify-center gap-y-12 gap-x-16 mx-16"
        >
          {publicationsData.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300 w-full max-w-[350px]"
            >
              <img src={item.image} alt={item.title} className="mx-auto w-full h-64 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{item.title}</h3>
                <div className="flex flex-col space-y-2">
                  <a
                    href={item.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-blue-600 hover:text-blue-800 transition-colors duration-300"
                  >
                    <Linkedin size={20} className="mr-2" />
                    Read on LinkedIn
                  </a>
                  <a
                    href={item.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-pink-600 hover:text-pink-800 transition-colors duration-300"
                  >
                    <Instagram size={20} className="mr-2" />
                    View on Instagram
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default PublicationsPage;


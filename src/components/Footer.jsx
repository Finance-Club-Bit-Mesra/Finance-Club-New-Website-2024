import { FaFacebook, FaGithub, FaInstagram, FaLinkedin, FaChevronRight, FaPhone, FaEnvelope } from 'react-icons/fa';
import { LINKS, EVENTS, CONTACT_DATA } from '../constants'; 

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Logo and Info Section */}
          <div className="space-y-8 col-span-2">
            <a href="/" className="flex items-center space-x-2">
              <img src="/fc.png" alt="Finance Club Logo" className="w-auto h-8 rounded-full" />
              <span className="text-xl font-bold text-white">Finance Club, BIT MESRA</span>
            </a>
            <p className="text-sm">
              We aim to acquaint students with basic economic and financial concepts and guide them on generating passive income through their skills.
            </p>
            <div className="flex space-x-4">
              <a href="https://github.com/Finance-Club-Bit-Mesra" className="hover:text-white transition-colors" aria-label="GitHub">
                <FaGithub size={24} />
              </a>
              <a href="https://www.facebook.com/Finance-Club-BIT-Mesra-102681781906064/" className="hover:text-white transition-colors" aria-label="Facebook">
                <FaFacebook size={24} />
              </a>
              <a href="https://www.instagram.com/financeclub_bitm/" className="hover:text-white transition-colors" aria-label="Instagram">
                <FaInstagram size={24} />
              </a>
              <a href="https://www.linkedin.com/company/financeclubbit/" className="hover:text-white transition-colors" aria-label="LinkedIn">
                <FaLinkedin size={24} />
              </a>
            </div>
          </div>

          {/* Useful Links Section */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Useful Links</h4>
            <ul className="space-y-2">
              {LINKS.map(link => (
                <li key={link.id}>
                  <a href={`${link.id}`} className="hover:text-white transition-colors flex items-center">
                    <FaChevronRight size={12} className="mr-2" />
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Events Section */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Events</h4>
            <ul className="space-y-2">
              {EVENTS.map(event => (
                <li key={event.id}>
                  <a href={`/events#${event.title.toLowerCase().replace(' ', '-')}`} className="hover:text-white transition-colors flex items-center">
                    <FaChevronRight size={12} className="mr-2" />
                    {event.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Section */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Contact Us</h4>
            <address className="not-italic">
              <p>{CONTACT_DATA.address}</p>
              <p className="mt-2 flex items-center">
                <FaPhone size={16} className="mr-2 flex-shrink-0" />
                <span className="text-sm">
                  Aalok Praveen (President):
                  <a href="tel:+919546949124" className="ml-1 hover:text-white transition-colors whitespace-nowrap">
                    +91 95469 49124
                  </a>
                </span>
              </p>
              <p className="mt-2 flex items-center">
                <FaEnvelope size={16} className="mr-2 flex-shrink-0" />
                <a href="mailto:financeclub@bitmesra.ac.in" className="text-sm hover:text-white transition-colors break-all">
                  financeclub@bitmesra.ac.in
                </a>
              </p>
            </address>
          </div>
        </div>
      </div>

      <div className="bg-gray-800 py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-sm">
          <p>&copy; {currentYear} <strong>Finance Club</strong>. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

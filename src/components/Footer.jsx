import { Link, useNavigate, useLocation } from "react-router-dom";
import PropTypes from "prop-types";
import { FaFacebook, FaGithub, FaInstagram, FaLinkedin, FaChevronRight, FaPhone, FaEnvelope } from "react-icons/fa";
import notes from "../assets/notes.png";
import { LINKS, CONTACT_DATA } from "../constants";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const navigate = useNavigate();
  const location = useLocation();

  const scrollToSection = (hash) => {
    if (!hash) return;

    const sectionId = hash.replace("#", "");
    const section = document.getElementById(sectionId);

    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    } else {
      console.warn("Section not found:", sectionId);
    }
  };

  const handleNavigation = (link) => {
    const [path, hash] = link.split("#");

    if (location.pathname !== path) {
      navigate(path, { replace: true });
      if (hash) {
        setTimeout(() => scrollToSection(`#${hash}`), 100);
      }
    } else {
      if (hash) {
        scrollToSection(`#${hash}`);
      } else {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
    }
  };


  return (
    <footer className="relative bg-gray-900 text-gray-300 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img
          src={notes}
          alt="Money background"
          className="w-full h-full object-cover opacity-5"
        />
      </div>
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-12 lg:px-10 pt-10 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* About Section */}
          <div className="space-y-8 col-span-1 lg:col-span-1">
            <Link onClick={() => handleNavigation("/")} className="flex items-center space-x-2 group">
              <img src="/fc.png" alt="Finance Club Logo" className="w-auto h-8" />
              <span className="text-2xl font-bold text-white">Finance Club, BIT MESRA</span>
            </Link>
            <p className="text-sm leading-relaxed">
              We aim to acquaint students with basic economic and financial concepts and guide them on generating passive income through their skills.
            </p>
            <div className="flex space-x-6">
              <SocialIcon href="https://github.com/Finance-Club-Bit-Mesra" icon={<FaGithub size={24} />} label="GitHub" />
              <SocialIcon href="https://www.facebook.com/Finance-Club-BIT-Mesra-102681781906064/" icon={<FaFacebook size={24} />} label="Facebook" />
              <SocialIcon href="https://www.instagram.com/financeclub_bitm/" icon={<FaInstagram size={24} />} label="Instagram" />
              <SocialIcon href="https://www.linkedin.com/company/financeclubbit/" icon={<FaLinkedin size={24} />} label="LinkedIn" />
            </div>
          </div>

          {/* Useful Links Section */}
          <div className="col-span-1 lg:col-span-1">
            <h4 className="text-xl font-semibold text-white mb-6 pb-2 text-center border-b border-gray-700">Useful Links</h4>
            <ul className="grid grid-cols-2 gap-4 ">
              {LINKS.map((link) => (
                <button
                key={link.id}
                onClick={() => handleNavigation(link.id)}
                className="flex items-center space-x-2 text-start hover:text-white "
              >
                <FaChevronRight size={16} className="hover:translate-x-1 transition-all duration-300 ease-out" />
                <span>{link.name}</span>
              </button>
              ))}
            </ul>
          </div>

          {/* Contact Section */}
          <div className="col-span-1 lg:col-span-1">
            <h4 className="text-xl font-semibold text-white mb-6 pb-2 text-center border-b border-gray-700">Contact Us</h4>
            <div className="flex flex-wrap gap-8">
              <address className="not-italic">
                <p className="mb-2">{CONTACT_DATA.address}</p>
                <ContactItem icon={<FaPhone size={16} />} text="Aalok Praveen (President):" href="tel:+919546949124" linkText="+91 95469 49124" />
                <ContactItem icon={<FaEnvelope size={16} />} href="mailto:financeclub@bitmesra.ac.in" linkText="financeclub@bitmesra.ac.in" />
              </address>
            </div>
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

const SocialIcon = ({ href, icon, label }) => (
  <a href={href} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-all duration-300 ease-out transform hover:scale-110" aria-label={label}>
    {icon}
  </a>
);

SocialIcon.propTypes = {
  href: PropTypes.string.isRequired,
  icon: PropTypes.node.isRequired,
  label: PropTypes.string.isRequired,
};

const ContactItem = ({ icon, text, href, linkText }) => (
  <p className="flex items-center mb-2">
    <span className="mr-2 flex-shrink-0">{icon}</span>
    {text && <span className="mr-1">{text}</span>}
    <a href={href} className="hover:text-white transition-colors duration-300">
      {linkText}
    </a>
  </p>
);

ContactItem.propTypes = {
  icon: PropTypes.node.isRequired,
  text: PropTypes.string,
  href: PropTypes.string.isRequired,
  linkText: PropTypes.string.isRequired,
};

export default Footer;

import { useState } from 'react';
import React, { useState } from 'react';
import { motion } from 'framer-motion';

interface HeaderProps {
  logo: string;
}

const Header: React.FC<HeaderProps> = ({ logo }) => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="bg-black text-pink-500">
      <div className="container mx-auto flex justify-between items-center p-4">
        <motion.div
          className="flex items-center cursor-pointer"
          whileHover={{ scale: 1.05 }}
          onClick={() => window.scrollTo(0, 0)}
        >
          <img src={logo} alt="luxery dark AirBNB Logo" className="h-12" />
          <h1 className="text-2xl font-bold ml-2">luxery dark AirBNB</h1>
        </motion.div>
        <nav className="hidden md:flex space-x-8">
          <motion.div
            className="hover:text-pink-400 transition duration-200"
            href="#about"
          >
            About Us
          </motion.a>
          <motion.div
            className="hover:text-pink-400 transition duration-200"
            href="#services"
          >
            Services
          </motion.a>
          <motion.div
            className="hover:text-pink-400 transition duration-200"
            href="#booking"
          >
            Book Your Stay
          </motion.a>
          <motion.div
            className="hover:text-pink-400 transition duration-200"
            href="#contact"
          >
            Contact
          </motion.a>
        </nav>
        <button
          className="md:hidden text-pink-500 focus:outline-none"
          onClick={toggleMobileMenu}
        >
          {isMobileMenuOpen ? 'Close' : 'Menu'}
        </button>
      </div>
      {isMobileMenuOpen && (
        <motion.div
          className="md:hidden bg-black text-pink-500 p-4"
          initial={{ opacity: 0}}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="block py-2 hover:text-pink-400 transition duration-200"
            href="#about"
            onClick={toggleMobileMenu}
          >
            About Us
          </motion.a>
          <motion.div
            className="block py-2 hover:text-pink-400 transition duration-200"
            href="#services"
            onClick={toggleMobileMenu}
          >
            Services
          </motion.a>
          <motion.div
            className="block py-2 hover:text-pink-400 transition duration-200"
            href="#booking"
            onClick={toggleMobileMenu}
          >
            Book Your Stay
          </motion.a>
          <motion.div
            className="block py-2 hover:text-pink-400 transition duration-200"
            href="#contact"
            onClick={toggleMobileMenu}
          >
            Contact
          </motion.a>
        </motion.div>
      )}
    </header>
  );
};

export default Header;
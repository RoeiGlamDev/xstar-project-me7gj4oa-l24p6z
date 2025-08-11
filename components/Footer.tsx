import React from 'react';
import { motion } from 'framer-motion';

interface FooterProps {
  companyName: string;
  links: { name: string; url: string }[];
  socialMedia: { platform: string; url: string }[];
}

const Footer: React.FC<FooterProps> = ({ 
  companyName = "luxery dark AirBNB", 
  links, 
  socialMedia 
}) => {
  return (
    <footer className="bg-black text-pink-500 py-8">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-6"
          initial={{ opacity: 0 }} 
          animate={{ opacity: 1 }} 
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-2xl font-bold">{companyName}</h2>
          <p className="mt-2 text-sm">Elevating your stay with cutting-edge technology.</p>
        </motion.div>
        
        <motion.div 
          className="mb-6"
          initial={{ opacity: 0 }} 
          animate={{ opacity: 1 }} 
          transition={{ duration: 0.7 }}
        >
          <h3 className="text-lg font-semibold">Quick Links</h3>
          <ul className="mt-2 space-y-2">
            {links.map((link, index) => (
              <li key={index} className="hover:text-pink-300 transition duration-300">
                <a href={link.url} target="_blank" rel="noopener noreferrer">{link.name}</a>
              </li>
            ))}
          </ul>
        </motion.div>

        <motion.div 
          className="mb-6"
          initial={{ opacity: 0 }} 
          animate={{ opacity: 1 }} 
          transition={{ duration: 0.9 }}
        >
          <h3 className="text-lg font-semibold">Follow Us</h3>
          <div className="flex justify-center space-x-4 mt-2">
            {socialMedia.map((media, index) => (
              <a key={index} href={media.url} target="_blank" rel="noopener noreferrer" className="hover:text-pink-300 transition duration-300">
                {media.platform}
              </a>
            ))}
          </div>
        </motion.div>

        <div className="text-center mt-8">
          <p className="text-sm">&copy; {new Date().getFullYear()} {companyName}. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
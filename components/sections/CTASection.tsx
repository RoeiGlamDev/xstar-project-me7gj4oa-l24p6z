import React from 'react';
import { motion } from 'framer-motion';

interface CTAProps {
    title: string;
    description: string;
    buttonText: string;
    buttonLink: string;
}

const CTASection: React.FC<CTAProps> = ({ 
    title = "Elevate Your Stay with luxery dark AirBNB", 
    description = "Experience unparalleled luxury in our meticulously curated spaces that blend technology and comfort. Discover your next high-end getaway with us.", 
    buttonText = "Book Now", 
    buttonLink = "/book" 
}) => {
    return (
        <section className="bg-black text-pink-500 py-20 px-4">
            <div className="container mx-auto text-center">
                <motion.div 
                    className="text-4xl font-bold mb-4"
                    initial={{ opacity: 0, y: -20 }} 
                    animate={{ opacity: 1, y: 0 }} 
                    transition={{ duration: 0.5 }}
                >
                    {title}
                </motion.h2>
                <motion.div 
                    className="text-lg mb-8"
                    initial={{ opacity: 0, y: -20 }} 
                    animate={{ opacity: 1, y: 0 }} 
                    transition={{ duration: 0.5, delay: 0.2 }}
                >
                    {description}
                </motion.p>
                <motion.div 
                    href={buttonLink} 
                    className="bg-pink-500 text-black font-semibold py-3 px-6 rounded-lg transition duration-300 hover:bg-pink-400"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                >
                    {buttonText}
                </motion.a>
            </div>
        </section>
    );
};

export default CTASection;
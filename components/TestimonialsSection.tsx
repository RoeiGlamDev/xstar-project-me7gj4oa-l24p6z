import React from 'react';
import { motion } from 'framer-motion';

interface Testimonial {
  name: string;
  photo: string;
  content: string;
  rating: number;
}

const testimonials: Testimonial[] = [
  {
    name: 'Sophia Williams',
    photo: '/images/testimonial1.jpg',
    content: 'The luxery dark AirBNB experience was unparalleled! Their tech solutions transformed my stay into a seamless, luxurious experience. Highly recommend!',
    rating: 5,
  },
  {
    name: 'Liam Johnson',
    photo: '/images/testimonial2.jpg',
    content: 'I never knew a vacation rental could feel so high-end. The innovative technology provided by luxery dark AirBNB truly elevated my experience.',
    rating: 4,
  },
  {
    name: 'Emma Brown',
    photo: '/images/testimonial3.jpg',
    content: 'From booking to check-out, the luxery dark AirBNB system was intuitive and stylish. A perfect blend of luxury and modern technology!',
    rating: 5,
  },
];

const TestimonialsSection: React.FC = () => {
  return (
    <section className="bg-black text-white py-12 px-6">
      <h2 className="text-3xl font-bold text-pink-500 text-center mb-8">
        What Our Guests Say About luxery dark AirBNB
      </h2>
      <div className="flex flex-wrap justify-center">
        {testimonials.map((testimonial, index) => (
          <motion.div
            key={index}
            className="bg-gray-800 p-6 rounded-lg shadow-lg m-4 w-full sm:w-1/2 lg:w-1/3 transition-transform transform hover:scale-105"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            <div className="flex items-center mb-4">
              <img src={testimonial.photo} alt={testimonial.name} className="w-16 h-16 rounded-full mr-4" />
              <div>
                <h3 className="text-lg font-semibold text-pink-500">{testimonial.name}</h3>
                <div className="flex">
                  {Array.from({ length: testimonial.rating }, (_, i) => (
                    <svg key={i} className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M10 15l-5.878 3.09 1.121-6.537-4.828-4.708 6.636-.964L10 0l2.449 5.881 6.636.964-4.828 4.708 1.121 6.537z" />
                    </svg>
                  ))}
                </div>
              </div>
            </div>
            <p className="text-gray-300">{testimonial.content}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default TestimonialsSection;
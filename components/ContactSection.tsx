import { useState } from 'react';
import React, { useState } from 'react';
import { motion } from 'framer-motion';

interface ContactFormData {
  name: string;
  email: string;
  message: string;
  reason: string;
}

const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    message: '',
    reason: 'Inquiry',
  });

  const [errors, setErrors] = useState<Partial<ContactFormData>>({});
  const [submitted, setSubmitted] = useState(false);

  const validateForm = () => {
    const newErrors: Partial<ContactFormData> = {};
    if (!formData.name) newErrors.name = 'Name is required';
    if (!formData.email) newErrors.email = 'Email is required';
    if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Email is invalid';
    if (!formData.message) newErrors.message = 'Message is required';
    return newErrors;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      // Simulate form submission
      console.log('Form submitted:', formData);
      setSubmitted(true);
      setFormData({ name: '', email: '', message: '', reason: 'Inquiry' });
      setErrors({});
    }
  };

  return (
    <section className="bg-black text-white p-8">
      <h2 className="text-3xl font-bold mb-4">Contact luxery dark AirBNB</h2>
      <p className="mb-4">For technology inquiries, please fill out the form below:</p>
      
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        onSubmit={handleSubmit}
        className="flex flex-col space-y-4"
      >
        <div>
          <label className="block mb-2" htmlFor="name">Name</label>
          <input
            className={border-2 border-pink-500 bg-gray-800 text-white p-2 ${errors.name ? 'border-red-500' : ''}}
            type="text"
            id="name"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            required
          />
          {errors.name && <p className="text-red-500">{errors.name}</p>}
        </div>

        <div>
          <label className="block mb-2" htmlFor="email">Email</label>
          <input
            className={border-2 border-pink-500 bg-gray-800 text-white p-2 ${errors.email ? 'border-red-500' : ''}}
            type="email"
            id="email"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            required
          />
          {errors.email && <p className="text-red-500">{errors.email}</p>}
        </div>

        <div>
          <label className="block mb-2" htmlFor="reason">Reason for Contact</label>
          <select
            className="border-2 border-pink-500 bg-gray-800 text-white p-2"
            id="reason"
            value={formData.reason}
            onChange={(e) => setFormData({ ...formData, reason: e.target.value })}
          >
            <option value="Inquiry">Inquiry</option>
            <option value="Booking Request">Booking Request</option>
            <option value="Partnership">Partnership</option>
            <option value="Feedback">Feedback</option>
          </select>
        </div>

        <div>
          <label className="block mb-2" htmlFor="message">Message</label>
          <textarea
            className={border-2 border-pink-500 bg-gray-800 text-white p-2 ${errors.message ? 'border-red-500' : ''}}
            id="message"
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            required
          />
          {errors.message && <p className="text-red-500">{errors.message}</p>}
        </div>

        <button
          type="submit"
          className="bg-pink-500 text-white p-2 hover:bg-pink-600 transition duration-300"
        >
          Send Message
        </button>
      </motion.form>

      {submitted && <p className="mt-4 text-green-500">Your message has been sent!</p>}

      <div className="mt-8">
        <h3 className="text-xl font-bold">Business Information</h3>
        <p>luxery dark AirBNB</p>
        <p>Location: 123 Dark St, Luxery City, CA</p>
        <p>Business Hours: Mon-Fri 9 AM - 6 PM</p>
      </div>
    </section>
  );
};

export default ContactSection;
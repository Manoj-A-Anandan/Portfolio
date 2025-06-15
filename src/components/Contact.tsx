import React, { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { Send, Mail, Phone, MapPin, Github, Linkedin, MessageCircle, Instagram, CodeIcon } from 'lucide-react';

const Contact: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    // Reset form
    setFormData({ name: '', email: '', subject: '', message: '' });
    setIsSubmitting(false);
    
    // Show success message (you can replace with actual form handling)
    alert('Message sent successfully! I\'ll get back to you soon.');
  };

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'manoj55802@gmail.com',
      href: 'mailto:manoj55802@gmail.com',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+91 6383592207',
      href: 'tel:+916383592207',
      color: 'from-emerald-500 to-teal-500'
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Coimbatore, Tamil Nadu, India',
      href: '#',
      color: 'from-purple-500 to-indigo-500'
    },
    {
      icon: MessageCircle,
      label: 'Response Time',
      value: 'Within 24 hours',
      href: '#',
      color: 'from-orange-500 to-amber-500'
    },
  ];

  const socialLinks = [
    { icon: Github, href: 'https://github.com/Manoj-A-Anandan', label: 'GitHub', color: 'hover:text-gray-900 dark:hover:text-white' },
    { icon: Linkedin, href: 'https://www.linkedin.com/in/manoj-a-2777b0258/', label: 'LinkedIn', color: 'hover:text-blue-600' },
    { icon:CodeIcon , href: 'https://leetcode.com/u/manoj55802/', label: 'Leetcode', color: 'hover:text-blue-400' },
    { icon: Instagram, href: 'https://www.instagram.com/_manzzzz._._/', label: 'Instagram', color: 'hover:text-blue-400' },
  ];

  return (
    <section id="contact" className="py-20 bg-gray-50 dark:bg-gray-800" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Let's Work Together
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-emerald-600 to-blue-600 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Have an exciting project in mind or want to discuss opportunities? 
            I'm always interested in collaborating on innovative solutions.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-1 space-y-8"
          >
            <div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                Get In Touch
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
                I'm currently open to new opportunities and interesting projects. 
                Whether you have a question or just want to say hi, feel free to reach out!
              </p>
            </div>

            <div className="space-y-4">
              {contactInfo.map((info, index) => (
                <motion.a
                  key={info.label}
                  href={info.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                  whileHover={{ x: 5 }}
                  className="flex items-center space-x-4 p-4 bg-white dark:bg-gray-900 rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 group"
                >
                  <div className={`flex-shrink-0 w-12 h-12 bg-gradient-to-r ${info.color} rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                    <info.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white">
                      {info.label}
                    </h4>
                    <p className="text-gray-600 dark:text-gray-300 text-sm">
                      {info.value}
                    </p>
                  </div>
                </motion.a>
              ))}
            </div>

            <div className="pt-8">
              <h4 className="font-semibold text-gray-900 dark:text-white mb-4">
                Connect With Me
              </h4>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                    whileHover={{ scale: 1.1, y: -5 }}
                    whileTap={{ scale: 0.9 }}
                    className={`w-12 h-12 bg-white dark:bg-gray-900 rounded-2xl flex items-center justify-center text-gray-600 dark:text-gray-400 ${social.color} shadow-md hover:shadow-lg transition-all duration-300`}
                  >
                    <social.icon size={20} />
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="lg:col-span-2 bg-white dark:bg-gray-900 p-8 rounded-3xl shadow-lg border border-gray-200 dark:border-gray-700"
          >
            <div className="mb-8">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                Send Me a Message
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Fill out the form below and I'll get back to you as soon as possible.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="relative">
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="peer w-full px-4 py-4 border border-gray-300 dark:border-gray-600 rounded-2xl bg-transparent focus:border-emerald-600 focus:outline-none transition-colors duration-200 dark:text-white"
                    placeholder=" "
                  />
                  <label className="absolute left-4 top-4 text-gray-600 dark:text-gray-400 transition-all duration-200 peer-focus:-top-2 peer-focus:left-2 peer-focus:text-sm peer-focus:text-emerald-600 peer-[:not(:placeholder-shown)]:-top-2 peer-[:not(:placeholder-shown)]:left-2 peer-[:not(:placeholder-shown)]:text-sm bg-white dark:bg-gray-900 px-2">
                    Your Name
                  </label>
                </div>

                <div className="relative">
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="peer w-full px-4 py-4 border border-gray-300 dark:border-gray-600 rounded-2xl bg-transparent focus:border-emerald-600 focus:outline-none transition-colors duration-200 dark:text-white"
                    placeholder=" "
                  />
                  <label className="absolute left-4 top-4 text-gray-600 dark:text-gray-400 transition-all duration-200 peer-focus:-top-2 peer-focus:left-2 peer-focus:text-sm peer-focus:text-emerald-600 peer-[:not(:placeholder-shown)]:-top-2 peer-[:not(:placeholder-shown)]:left-2 peer-[:not(:placeholder-shown)]:text-sm bg-white dark:bg-gray-900 px-2">
                    Email Address
                  </label>
                </div>
              </div>

              <div className="relative">
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  required
                  className="peer w-full px-4 py-4 border border-gray-300 dark:border-gray-600 rounded-2xl bg-transparent focus:border-emerald-600 focus:outline-none transition-colors duration-200 dark:text-white"
                  placeholder=" "
                />
                <label className="absolute left-4 top-4 text-gray-600 dark:text-gray-400 transition-all duration-200 peer-focus:-top-2 peer-focus:left-2 peer-focus:text-sm peer-focus:text-emerald-600 peer-[:not(:placeholder-shown)]:-top-2 peer-[:not(:placeholder-shown)]:left-2 peer-[:not(:placeholder-shown)]:text-sm bg-white dark:bg-gray-900 px-2">
                  Subject
                </label>
              </div>

              <div className="relative">
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={6}
                  className="peer w-full px-4 py-4 border border-gray-300 dark:border-gray-600 rounded-2xl bg-transparent focus:border-emerald-600 focus:outline-none transition-colors duration-200 resize-none dark:text-white"
                  placeholder=" "
                />
                <label className="absolute left-4 top-4 text-gray-600 dark:text-gray-400 transition-all duration-200 peer-focus:-top-2 peer-focus:left-2 peer-focus:text-sm peer-focus:text-emerald-600 peer-[:not(:placeholder-shown)]:-top-2 peer-[:not(:placeholder-shown)]:left-2 peer-[:not(:placeholder-shown)]:text-sm bg-white dark:bg-gray-900 px-2">
                  Your Message
                </label>
              </div>

              <motion.button
                type="submit"
                disabled={isSubmitting}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full py-4 px-8 bg-gradient-to-r from-emerald-600 to-blue-600 text-white rounded-2xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
              >
                {isSubmitting ? (
                  <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                ) : (
                  <>
                    <Send size={20} />
                    <span>Send Message</span>
                  </>
                )}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
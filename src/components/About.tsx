import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Code, Users, Lightbulb, Award } from 'lucide-react';

const About: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const highlights = [
            {
              icon: Code,
              title: 'AI & Full-Stack Skills',
              description: 'Built intelligent systems using Python, ML, and modern web technologies'
            },
            {
              icon: Users,
              title: 'Team Collaboration',
              description: 'Worked closely with developers and testers in agile environments'
            },
            {
              icon: Lightbulb,
              title: 'Innovation & Projects',
              description: 'Developed ML apps like Face Recognition and Fraud Detection using AutoML'
            },
            {
              icon: Award,
              title: 'Early Achiever',
              description: 'Led an SIH team, delivered impactful internships, solved 400+ DSA problems'
            }
  ];

  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-emerald-600 to-blue-600 mx-auto"></div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="relative">
              <div className="w-80 h-80 mx-auto rounded-3xl bg-gradient-to-br from-emerald-400 via-blue-500 to-purple-600 p-1">
                <div className="w-full h-full bg-gray-200 dark:bg-gray-700 rounded-3xl flex items-center justify-center overflow-hidden">
                <img 
                  src="src/docs/about.jpg" 
                  alt="Manoj A"
                  className="w-full h-full object-cover object-top rounded-3xl"
                />
              </div>

              </div>
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute -top-6 -right-6 w-20 h-20 bg-gradient-to-r from-emerald-400 to-blue-500 rounded-full opacity-80 flex items-center justify-center"
              >
                <Code className="w-8 h-8 text-white" />
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-6"
          >
            <h3 className="text-3xl font-bold text-gray-900 dark:text-white">
              AI Engineering Intern & QA Specialist
            </h3>
            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
              With hands-on experience in artificial intelligence, software testing, and full-stack development, 
              I specialize in building intelligent systems and ensuring high product quality. My expertise spans 
              machine learning model deployment, automation testing, and agile collaboration.
            </p>
            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
              I'm passionate about solving real-world problems through AI, continuously learning new technologies, 
              and contributing to impactful projects. Currently interning at DataReveal AI, where I support both 
              model development and QA processes for an enterprise HRMS platform.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-8">
              {highlights.map((highlight, index) => (
                <motion.div
                  key={highlight.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                  className="p-6 bg-gray-50 dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-shadow duration-300"
                >
                  <div className="flex items-center space-x-3 mb-3">
                    <div className="p-2 bg-gradient-to-r from-emerald-600 to-blue-600 rounded-lg">
                      <highlight.icon className="w-5 h-5 text-white" />
                    </div>
                    <h4 className="font-semibold text-gray-900 dark:text-white">
                      {highlight.title}
                    </h4>
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-300">
                    {highlight.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
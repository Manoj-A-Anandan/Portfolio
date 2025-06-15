import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Calendar, MapPin, Users, TrendingUp, Award, Code } from 'lucide-react';

const Experience: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const experiences = [
          {
          title: 'AI Engineering Intern & QA',
          company: 'DataReveal AI',
          location: 'Coimbatore, India',
          period: 'Mar 2025 – Present',
          type: 'Internship',
          description: 'Contributing to an HRMS project by supporting AI model integration and ensuring software quality through systematic QA testing. Balancing machine learning experimentation with automated testing in an agile setup.',
          achievements: [
            'Performed test case design and execution for key HR modules',
            'Contributed to model deployment and integration with backend systems',
            'Built QA test plans using Selenium and JMeter for end-to-end scenarios',
            'Improved bug reporting efficiency by 40% using collaborative DevOps tools'
          ],
          technologies: ['Python', 'Selenium', 'JMeter', 'Scikit-learn', 'Docker', 'Git'],
          metrics: [
            { icon: Award, value: '2+', label: 'Modules QA Tested' },
            { icon: TrendingUp, value: '40%', label: 'QA Efficiency Gain' }
          ]
        },
        {
          title: 'Junior Web Developer Intern',
          company: 'Altalya Solutions Pvt Ltd',
          location: 'Tiruppur, India',
          period: 'Jun 2024 – Jul 2024',
          type: 'Internship',
          description: 'Worked on developing responsive user interfaces and feature integrations for client-facing web applications. Collaborated with designers and senior developers in an agile team environment.',
          achievements: [
            'Built and deployed a responsive website using HTML, CSS, and JS',
            'Gained hands-on experience with real client UI requirements',
            'Delivered components under mentorship of lead developer',
            'Took initiative in team demo presentations and documentation'
          ],
          technologies: ['HTML', 'CSS', 'JavaScript', 'Bootstrap', 'VS Code'],
          metrics: [
            { icon: Award, value: '1', label: 'Live Website Deployed' },
            { icon: TrendingUp, value: '100%', label: 'Internship Completion' }
          ]
        },
        {
          title: 'Academic Project Contributor',
          company: 'Self-Driven',
          location: 'Remote',
          period: '2023 – 2025',
          type: 'Self Project',
          description: 'Developed and deployed machine learning models and AI-powered apps as personal projects. Focused on model accuracy, deployment, and practical usage of AI in real-world scenarios.',
          achievements: [
            'Built face recognition app using OpenCV & HOG algorithm',
            'Created customer churn prediction dashboard in Streamlit',
            'Developed AutoML credit fraud detection using H2O.ai',
            'Published all projects on GitHub with full documentation'
          ],
          technologies: ['Python', 'Scikit-learn', 'OpenCV', 'H2O.ai', 'Streamlit', 'Colab'],
          metrics: [
            { icon: Code, value: '3+', label: 'ML Projects Delivered' },
            { icon: Users, value: 'Public', label: 'Open Source' }
          ]
        }
  ];

  return (
    <section id="experience" className="py-20 bg-gray-50 dark:bg-gray-800" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Professional Journey
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-emerald-600 to-blue-600 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Actively growing in the field of AI and software development through hands-on projects, 
            internships, and real-world QA experience. Passionate about delivering intelligent solutions 
            and mastering full-stack skills.
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-emerald-600 to-blue-600 hidden md:block"></div>

          <div className="space-y-12">
            {experiences.map((experience, index) => (
              <motion.div
                key={experience.title}
                initial={{ opacity: 0, x: 50 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="relative"
              >
                {/* Timeline dot */}
                <div className="absolute left-6 w-4 h-4 bg-gradient-to-r from-emerald-600 to-blue-600 rounded-full border-4 border-white dark:border-gray-800 hidden md:block"></div>

                <div className="md:ml-16 bg-white dark:bg-gray-900 p-8 rounded-3xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-200 dark:border-gray-700">
                  <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
                    <div className="flex-1">
                      <div className="flex items-center space-x-2 mb-2">
                        <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                          {experience.title}
                        </h3>
                        <span className="px-2 py-1 bg-emerald-100 dark:bg-emerald-900 text-emerald-600 dark:text-emerald-300 text-xs rounded-full font-medium">
                          {experience.type}
                        </span>
                      </div>
                      <p className="text-emerald-600 dark:text-emerald-400 font-semibold text-lg mb-2">
                        {experience.company}
                      </p>
                      <div className="flex flex-col sm:flex-row sm:items-center text-gray-500 dark:text-gray-400 text-sm space-y-1 sm:space-y-0 sm:space-x-4">
                        <div className="flex items-center">
                          <Calendar size={16} className="mr-2" />
                          {experience.period}
                        </div>
                        <div className="flex items-center">
                          <MapPin size={16} className="mr-2" />
                          {experience.location}
                        </div>
                      </div>
                    </div>

                    <div className="flex space-x-4 mt-4 lg:mt-0">
                      {experience.metrics.map((metric, metricIndex) => (
                        <div
                          key={metricIndex}
                          className="text-center p-3 bg-gray-50 dark:bg-gray-800 rounded-2xl min-w-[80px]"
                        >
                          <div className="flex justify-center mb-1">
                            <metric.icon className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                          </div>
                          <div className="text-lg font-bold text-gray-900 dark:text-white">
                            {metric.value}
                          </div>
                          <div className="text-xs text-gray-600 dark:text-gray-300">
                            {metric.label}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                    {experience.description}
                  </p>

                  <div className="space-y-4">
                    <h4 className="font-semibold text-gray-900 dark:text-white">
                      Key Achievements:
                    </h4>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                      {experience.achievements.map((achievement, achievementIndex) => (
                        <li
                          key={achievementIndex}
                          className="text-gray-600 dark:text-gray-300 text-sm flex items-start"
                        >
                          <span className="text-emerald-500 mr-3 mt-1">•</span>
                          <span>{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-6 pt-6 border-t border-gray-200 dark:border-gray-700">
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-3">
                      Technologies Used:
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {experience.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 text-sm rounded-xl font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
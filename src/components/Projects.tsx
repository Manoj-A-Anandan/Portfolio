import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { ExternalLink, Github, Star, Users, TrendingUp } from 'lucide-react';

const Projects: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const projects = [
    {
      title: 'Real-Time System Monitoring Dashboard',
      description: 'Streamlined system metrics pipeline using Kafka and PostgreSQL with ML anomaly detection.',
      image: 'https://images.pexels.com/photos/17483873/pexels-photo-17483873.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2', // Placeholder or keep existing if suitable
      technologies: ['Kafka', 'Streamlit', 'Docker', 'PostgreSQL', 'ML'],
      github: '#', // Link from image is just 'Link', assuming placeholder
      live: '',
      metrics: [
        { icon: TrendingUp, value: '25%', label: 'Lag Reduction' },
        { icon: Users, value: '90%', label: 'Anomaly Accuracy' }
      ],
      featured: true
    },
    {
      title: 'Face Recognition and Matching System',
      description: 'High-precision face retrieval system using InsightFace and FastAPI with improved latency.',
      image: 'https://images.pexels.com/photos/6143367/pexels-photo-6143367.jpeg?auto=compress&cs=tinysrgb&w=500',
      technologies: ['InsightFace', 'FastAPI', 'Docker', 'Supabase'],
      github: '#',
      live: '',
      metrics: [
        { icon: TrendingUp, value: '80%', label: 'Latency Reduction' },
        { icon: Users, value: '500+', label: 'Images Scaled' }
      ]
    },
    {
      title: 'AutoML Credit Card Fraud Detection',
      description: 'AutoML-based fraud detection system using H2O.ai and Scikit-learn.',
      image: 'https://images.pexels.com/photos/6693651/pexels-photo-6693651.jpeg?auto=compress&cs=tinysrgb&w=500',
      technologies: ['H2O.ai', 'Scikit-learn', 'AutoML'],
      github: '#',
      live: '',
      metrics: [
        { icon: TrendingUp, value: '90%', label: 'Detection Rate' },
        { icon: Star, value: '30%', label: 'Less False Positives' }
      ]
    }
  ];

  return (
    <section id="projects" className="py-20 bg-white dark:bg-gray-900" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Featured Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-emerald-600 to-blue-600 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            A collection of projects I’ve built to explore real-world applications of AI, machine learning,
            and web technologies — from facial recognition systems to fraud detection tools.
          </p>
        </motion.div>

        <div className="space-y-12">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
                }`}
            >
              <div className={`${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="relative group overflow-hidden rounded-3xl shadow-lg"
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-6 left-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="flex space-x-4">
                      <motion.a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="p-3 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-white/30 transition-colors"
                      >
                        <Github size={20} />
                      </motion.a>
                      <motion.a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="p-3 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-white/30 transition-colors"
                      >
                        <ExternalLink size={20} />
                      </motion.a>
                    </div>
                  </div>
                  {project.featured && (
                    <div className="absolute top-6 right-6">
                      <span className="px-3 py-1 bg-gradient-to-r from-emerald-600 to-blue-600 text-white text-sm font-medium rounded-full">
                        Featured
                      </span>
                    </div>
                  )}
                </motion.div>
              </div>

              <div className={`space-y-6 ${index % 2 === 1 ? 'lg:col-start-1' : ''}`}>
                <div>
                  <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                    {project.title}
                  </h3>
                  <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                    {project.description}
                  </p>
                </div>

                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-4 py-2 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 text-sm rounded-xl font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {project.metrics.map((metric, metricIndex) => (
                    <div
                      key={metricIndex}
                      className="text-center p-4 bg-gray-50 dark:bg-gray-800 rounded-2xl"
                    >
                      <div className="flex justify-center mb-2">
                        <metric.icon className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
                      </div>
                      <div className="text-2xl font-bold text-gray-900 dark:text-white">
                        {metric.value}
                      </div>
                      <div className="text-sm text-gray-600 dark:text-gray-300">
                        {metric.label}
                      </div>
                    </div>
                  ))}
                </div>

                <div className="flex space-x-4">
                  <motion.a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-6 py-3 bg-gradient-to-r from-emerald-600 to-blue-600 text-white rounded-2xl font-semibold shadow-lg hover:shadow-xl transition-shadow duration-300 flex items-center space-x-2"
                  >
                    <ExternalLink size={18} />
                    <span>Live Demo</span>
                  </motion.a>
                  <motion.a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-6 py-3 border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-2xl font-semibold hover:border-emerald-600 hover:text-emerald-600 dark:hover:border-emerald-400 dark:hover:text-emerald-400 transition-colors duration-300 flex items-center space-x-2"
                  >
                    <Github size={18} />
                    <span>View Code</span>
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
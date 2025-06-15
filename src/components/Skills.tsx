import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import {
  Code2,
  Database,
  Cloud,
  FlaskConical,
  Bug,
  GitBranch,
  Lightbulb,
  Star,
  Brain
} from 'lucide-react';

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const skillCategories = [
    {
      title: 'AI & Machine Learning',
      icon: Brain,
      color: 'from-blue-500 to-cyan-500',
      skills: ['Python', 'Scikit-learn', 'TensorFlow', 'OpenCV', 'AutoML', 'Pandas', 'Numpy']
    },
    {
      title: 'Web & App Development',
      icon: Code2,
      color: 'from-emerald-500 to-teal-500',
      skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Streamlit', 'Django']
    },
    {
      title: 'DevOps & Deployment',
      icon: Cloud,
      color: 'from-purple-500 to-indigo-500',
      skills: ['Docker', 'GitHub', 'Jenkins', 'CI/CD', 'Google Colab']
    },
    {
      title: 'Testing & QA',
      icon: Bug,
      color: 'from-pink-500 to-rose-500',
      skills: ['Selenium', 'JMeter', 'Postman', 'Bug Reporting', 'Test Planning']
    },
    {
      title: 'Data & Analytics',
      icon: Database,
      color: 'from-orange-500 to-yellow-500',
      skills: ['MySQL', 'Google Drive', 'Tableau', 'Power BI']
    },
    {
      title: 'Tools & Workflow',
      icon: GitBranch,
      color: 'from-violet-500 to-purple-500',
      skills: ['VS Code', 'Git', 'GitHub', 'Agile Methodologies']
    }
  ];

  const coreCompetencies = [
    { icon: FlaskConical, label: 'ML Model Deployment' },
    { icon: Lightbulb, label: 'AI Problem Solving' },
    { icon: Star, label: 'Project Leadership (SIH)' },
    { icon: GitBranch, label: 'Agile Collaboration' }
  ];

  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-800" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Technical Expertise
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-emerald-600 to-blue-600 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Tools and technologies I've worked with while building AI-powered apps, QA test systems, and real-world ML solutions.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: categoryIndex * 0.1 }}
              whileHover={{ y: -5 }}
              className="bg-white dark:bg-gray-900 p-8 rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-700"
            >
              <div className="flex items-center mb-6">
                <div className={`p-3 rounded-2xl bg-gradient-to-r ${category.color} mr-4`}>
                  <category.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                  {category.title}
                </h3>
              </div>

              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{
                      duration: 0.5,
                      delay: categoryIndex * 0.1 + skillIndex * 0.05
                    }}
                    whileHover={{ scale: 1.05 }}
                    className="px-3 py-2 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 text-sm rounded-xl font-medium hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-200 cursor-default"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Core Competencies */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-16 text-center"
        >
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">
            Core Competencies
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {coreCompetencies.map((competency, index) => (
              <motion.div
                key={competency.label}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 1 + index * 0.1 }}
                className="flex flex-col items-center p-6 bg-white dark:bg-gray-900 rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-300"
              >
                <div className="p-3 bg-gradient-to-r from-emerald-600 to-blue-600 rounded-2xl mb-3">
                  <competency.icon className="w-6 h-6 text-white" />
                </div>
                <span className="text-sm font-medium text-gray-900 dark:text-white text-center">
                  {competency.label}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;

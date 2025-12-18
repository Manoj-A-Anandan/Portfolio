import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { GraduationCap, Award, Trophy, BookOpen } from 'lucide-react';

const Education: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const education = [
    {
      school: 'Karpagam College of Engineering, Coimbatore',
      degree: 'B.Tech, Artificial Intelligence and Data Science',
      score: 'CGPA: 8.87',
      period: 'Expected Graduation: 2026',
      icon: GraduationCap
    },
    {
      school: 'Sri V.R.V Matric Higher Secondary School, Tirupattur',
      degree: 'HSC, Biology Maths',
      score: 'Percentage: 95%',
      period: 'Graduated: 2022',
      icon: BookOpen
    }
  ];

  const certifications = [
    {
      title: 'The Complete 2025 Software Testing Bootcamp',
      issuer: 'Udemy',
      link: '#' // Assuming no link provided in image, can be updated later
    },
    {
      title: 'Data Analytics with Python (Elite)',
      issuer: 'NPTEL',
      link: '#'
    },
    {
      title: 'Foundations of R Software (Elite)',
      issuer: 'NPTEL',
      link: '#'
    },
    {
      title: 'Machine Learning with Python',
      issuer: 'freeCodeCamp',
      link: '#'
    }
  ];

  const achievements = [
    'Team leader - SIH(2024) and selected in top 30 teams out of 120 in college level',
    'Delivered ML lectures at Altalya Solutions Pvt Ltd, Tiruppur'
  ];

  return (
    <section id="education" className="py-20 bg-white dark:bg-gray-900" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Education & Achievements
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-emerald-600 to-blue-600 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            My academic background, certifications, and scholastic milestones.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Education Section */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white flex items-center gap-3">
              <GraduationCap className="text-emerald-600" />
              Education
            </h3>
            <div className="space-y-6">
              {education.map((edu, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.02 }}
                  className="p-6 bg-gray-50 dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 shadow-sm"
                >
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-white dark:bg-gray-700 rounded-xl shadow-sm">
                      <edu.icon className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-gray-900 dark:text-white leading-tight mb-2">
                        {edu.school}
                      </h4>
                      <p className="text-emerald-600 dark:text-emerald-400 font-medium mb-1">
                        {edu.degree}
                      </p>
                      <div className="text-sm text-gray-600 dark:text-gray-400 flex flex-wrap gap-4">
                        <span>{edu.score}</span>
                        <span>•</span>
                        <span>{edu.period}</span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Certifications & Achievements Section */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-12"
          >
            {/* Certifications */}
            <div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white flex items-center gap-3 mb-8">
                <Award className="text-blue-600" />
                Certifications
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {certifications.map((cert, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ scale: 1.05 }}
                    className="p-4 bg-gray-50 dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 flex items-center gap-3"
                  >
                    <Award className="w-5 h-5 text-blue-500 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-900 dark:text-white text-sm line-clamp-2">
                        {cert.title}
                      </h4>
                      <p className="text-xs text-gray-500 dark:text-gray-400">
                        {cert.issuer}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Achievements */}
            <div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white flex items-center gap-3 mb-8">
                <Trophy className="text-yellow-500" />
                Scholastic Achievements
              </h3>
              <div className="space-y-4">
                {achievements.map((achievement, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ x: 10 }}
                    className="flex items-start gap-4 p-4 bg-gradient-to-r from-emerald-50 to-blue-50 dark:from-gray-800 dark:to-gray-800 rounded-xl border border-emerald-100 dark:border-gray-700"
                  >
                    <div className="mt-1">
                      <Trophy className="w-5 h-5 text-yellow-500" />
                    </div>
                    <p className="text-gray-700 dark:text-gray-300 font-medium">
                      {achievement}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Education;

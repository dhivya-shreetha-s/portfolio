import { motion } from 'framer-motion';
import PageTransition from '@/components/PageTransition';
import { GraduationCap } from 'lucide-react';

const educationData = [
  {
    degree: 'Master of Computer Science',
    institution: 'University Name',
    period: '2021 - 2023',
    description: 'Specialized in Artificial Intelligence and Machine Learning. Graduated with honors.',
    achievements: [
      'GPA: 3.9/4.0',
      'Research in Neural Networks',
      'Published 2 papers',
    ],
  },
  {
    degree: 'Bachelor of Technology',
    institution: 'College Name',
    period: '2017 - 2021',
    description: 'Computer Science and Engineering with focus on software development.',
    achievements: [
      'First Class with Distinction',
      'Best Project Award',
      'Head of Coding Club',
    ],
  },
];

const Education = () => {
  return (
    <PageTransition>
      <div className="container mx-auto px-4 py-24">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-16 text-center text-glow">
            Education
          </h1>

          <div className="max-w-4xl mx-auto">
            {/* Timeline */}
            <div className="relative">
              {/* Vertical Line */}
              <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary to-secondary transform md:-translate-x-1/2" />

              {educationData.map((edu, index) => (
                <motion.div
                  key={edu.degree}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.3 }}
                  className={`relative mb-12 ${
                    index % 2 === 0 ? 'md:pr-1/2' : 'md:pl-1/2 md:ml-auto'
                  }`}
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-8 md:left-1/2 w-4 h-4 bg-primary rounded-full transform -translate-x-1/2 glow-primary z-10" />

                  <motion.div
                    whileHover={{ scale: 1.02, x: index % 2 === 0 ? -10 : 10 }}
                    className={`ml-16 md:ml-0 ${
                      index % 2 === 0 ? 'md:mr-16' : 'md:ml-16'
                    }`}
                  >
                    <div className="glass-strong p-6 rounded-lg hover:glow-primary transition-all duration-300">
                      <div className="flex items-start gap-4 mb-4">
                        <div className="p-3 glass rounded-lg">
                          <GraduationCap className="text-primary" size={32} />
                        </div>
                        <div>
                          <h3 className="text-2xl font-bold text-primary mb-1">
                            {edu.degree}
                          </h3>
                          <p className="text-lg font-semibold text-muted-foreground">
                            {edu.institution}
                          </p>
                          <p className="text-sm text-secondary mt-1">
                            {edu.period}
                          </p>
                        </div>
                      </div>

                      <p className="text-muted-foreground mb-4">
                        {edu.description}
                      </p>

                      <div className="space-y-2">
                        {edu.achievements.map((achievement) => (
                          <div
                            key={achievement}
                            className="flex items-center gap-2 text-sm"
                          >
                            <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                            <span>{achievement}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </PageTransition>
  );
};

export default Education;

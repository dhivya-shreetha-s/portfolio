import { motion } from 'framer-motion';
import PageTransition from '@/components/PageTransition';
import { Badge } from '@/components/ui/badge';

const skillCategories = [
  {
    category: 'Frontend',
    skills: ['React', 'TypeScript', 'Next.js', 'Tailwind CSS', 'Framer Motion', 'Three.js'],
    color: 'primary',
  },
  {
    category: 'Backend',
    skills: ['Node.js', 'Express', 'Python', 'Django', 'PostgreSQL', 'MongoDB'],
    color: 'secondary',
  },
  {
    category: 'Tools & Others',
    skills: ['Git', 'Docker', 'AWS', 'CI/CD', 'Jest', 'Figma'],
    color: 'accent',
  },
];

const Skills = () => {
  return (
    <PageTransition>
      <div className="container mx-auto px-4 py-24">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-16 text-center text-glow">
            Skills & Technologies
          </h1>

          <div className="max-w-5xl mx-auto space-y-12">
            {skillCategories.map((category, categoryIndex) => (
              <motion.div
                key={category.category}
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: categoryIndex * 0.2 }}
                className="glass p-8 rounded-lg"
              >
                <h2 className="text-3xl font-bold mb-6 text-primary">
                  {category.category}
                </h2>
                
                <div className="flex flex-wrap gap-4">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skill}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: categoryIndex * 0.2 + skillIndex * 0.1 }}
                      whileHover={{ scale: 1.1, y: -5 }}
                    >
                      <Badge 
                        className="text-lg px-6 py-2 glass-strong hover:glow-primary transition-all duration-300 cursor-default"
                      >
                        {skill}
                      </Badge>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Animated Progress Indicators */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="mt-16 max-w-5xl mx-auto"
          >
            <h3 className="text-2xl font-bold mb-8 text-center">Proficiency Overview</h3>
            
            <div className="space-y-6">
              {['Web Development', 'UI/UX Design', 'Problem Solving', 'Team Collaboration'].map((skill, index) => (
                <motion.div
                  key={skill}
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 1.2 + index * 0.1 }}
                  className="glass p-4 rounded-lg"
                >
                  <div className="flex justify-between mb-2">
                    <span className="font-semibold">{skill}</span>
                    <span className="text-primary">{90 - index * 5}%</span>
                  </div>
                  <div className="h-3 bg-muted rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${90 - index * 5}%` }}
                      transition={{ duration: 1, delay: 1.5 + index * 0.1 }}
                      className="h-full gradient-primary glow-primary"
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </PageTransition>
  );
};

export default Skills;

import { motion } from 'framer-motion';
import PageTransition from '@/components/PageTransition';
import { Card } from '@/components/ui/card';
import { Code, Palette, Rocket, Users } from 'lucide-react';

const values = [
  {
    icon: Code,
    title: 'Clean Code',
    description: 'Writing maintainable, scalable, and efficient code',
  },
  {
    icon: Palette,
    title: 'Design First',
    description: 'Creating intuitive and beautiful user experiences',
  },
  {
    icon: Rocket,
    title: 'Innovation',
    description: 'Exploring cutting-edge technologies and approaches',
  },
  {
    icon: Users,
    title: 'Collaboration',
    description: 'Working effectively in team environments',
  },
];

const About = () => {
  return (
    <PageTransition>
      <div className="container mx-auto px-4 py-24">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-8 text-center text-glow">
            About Me
          </h1>
          
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="glass p-8 rounded-lg mb-12"
            >
              <h2 className="text-3xl font-bold mb-4 text-primary">
                Hello! I'm a passionate developer
              </h2>
              <p className="text-lg text-muted-foreground mb-4">
                With a strong foundation in both front-end and back-end technologies, 
                I specialize in creating seamless, performant web applications that 
                solve real-world problems.
              </p>
              <p className="text-lg text-muted-foreground mb-4">
                My journey in tech started with a curiosity about how things work, 
                which evolved into a passion for building innovative solutions that 
                make a difference.
              </p>
              <p className="text-lg text-muted-foreground">
                When I'm not coding, you'll find me exploring new technologies, 
                contributing to open-source projects, or sharing knowledge with the 
                developer community.
              </p>
            </motion.div>

            <h3 className="text-3xl font-bold mb-8 text-center">Core Values</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {values.map((value, index) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 + index * 0.1 }}
                  whileHover={{ scale: 1.05, y: -5 }}
                >
                  <Card className="glass-strong p-6 h-full hover:glow-primary transition-all duration-300">
                    <value.icon className="text-primary mb-4" size={40} />
                    <h4 className="text-xl font-bold mb-2">{value.title}</h4>
                    <p className="text-muted-foreground">{value.description}</p>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </PageTransition>
  );
};

export default About;

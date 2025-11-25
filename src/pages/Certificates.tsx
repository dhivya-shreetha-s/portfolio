import { motion } from 'framer-motion';
import PageTransition from '@/components/PageTransition';
import { Card } from '@/components/ui/card';
import { Award, ExternalLink } from 'lucide-react';

const certificates = [
  {
    title: 'AWS Certified Developer',
    issuer: 'Amazon Web Services',
    date: '2024',
    description: 'Professional certification for developing and maintaining applications on AWS',
    link: 'https://aws.amazon.com/certification/',
  },
  {
    title: 'React Advanced Patterns',
    issuer: 'Frontend Masters',
    date: '2023',
    description: 'Advanced React patterns including hooks, context, and performance optimization',
    link: 'https://frontendmasters.com',
  },
  {
    title: 'Full Stack Development',
    issuer: 'Coursera',
    date: '2023',
    description: 'Comprehensive full-stack development specialization covering MERN stack',
    link: 'https://coursera.org',
  },
  {
    title: 'UI/UX Design Principles',
    issuer: 'Google',
    date: '2022',
    description: 'User experience design fundamentals and best practices',
    link: 'https://grow.google',
  },
];

const Certificates = () => {
  return (
    <PageTransition>
      <div className="container mx-auto px-4 py-24">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-16 text-center text-glow">
            Certificates & Achievements
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {certificates.map((cert, index) => (
              <motion.div
                key={cert.title}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.15 }}
                whileHover={{ scale: 1.05, y: -10 }}
              >
                <Card className="glass-strong p-6 h-full hover:glow-primary transition-all duration-300 cursor-pointer"
                  onClick={() => window.open(cert.link, '_blank')}
                >
                  <div className="flex items-start gap-4 mb-4">
                    <div className="p-3 glass rounded-lg">
                      <Award className="text-primary" size={32} />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold mb-1 text-primary">
                        {cert.title}
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        {cert.issuer} • {cert.date}
                      </p>
                    </div>
                  </div>

                  <p className="text-muted-foreground mb-4">
                    {cert.description}
                  </p>

                  <div className="flex items-center text-primary hover:text-secondary transition-colors">
                    <span className="text-sm font-semibold">View Certificate</span>
                    <ExternalLink className="ml-2" size={16} />
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </PageTransition>
  );
};

export default Certificates;

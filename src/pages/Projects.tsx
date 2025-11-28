import { motion } from 'framer-motion';
import PageTransition from '@/components/PageTransition';
import { Card } from '@/components/ui/card';
import { ExternalLink, Github } from 'lucide-react';
import { Button } from '@/components/ui/button';

const projects = [
  {
    title: 'E-Commerce Platform',
    description: 'A full-stack e-commerce solution with payment integration, admin dashboard, and real-time inventory management.',
    tech: ['React', 'Node.js', 'MongoDB', 'Stripe'],
    github: 'https://github.com/yourusername/project1',
    demo: 'https://demo-project1.com',
  },
  {
    title: 'AI Chat Application',
    description: 'Real-time chat application with AI-powered responses, file sharing, and video calling capabilities.',
    tech: ['Next.js', 'Socket.io', 'OpenAI', 'PostgreSQL'],
    github: 'https://github.com/yourusername/project2',
    demo: 'https://demo-project2.com',
  },
  {
    title: 'Portfolio CMS',
    description: 'Content management system for portfolio websites with drag-and-drop interface and custom themes.',
    tech: ['React', 'Express', 'MongoDB', 'AWS S3'],
    github: 'https://github.com/yourusername/project3',
    demo: 'https://demo-project3.com',
  },
  {
    title: 'Task Management Tool',
    description: 'Collaborative task management platform with kanban boards, time tracking, and team analytics.',
    tech: ['TypeScript', 'React', 'Firebase', 'Tailwind'],
    github: 'https://github.com/yourusername/project4',
    demo: 'https://demo-project4.com',
  },
];

const Projects = () => {
  return (
    <PageTransition>
      <div className="container mx-auto px-4 py-24">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-16 text-center text-glow">
            Featured Projects
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                whileHover={{ 
                  scale: 1.05,
                  rotateY: 5,
                  rotateX: 5,
                }}
                style={{ transformStyle: 'preserve-3d' }}
              >
                <Card className="glass-strong p-6 h-full hover:glow-primary transition-all duration-500">
                  <h3 className="text-2xl font-bold mb-3 text-primary">
                    {project.title}
                  </h3>
                  
                  <p className="text-muted-foreground mb-4">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="text-xs px-3 py-1 glass rounded-full text-primary"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-4">
                    <Button
                      variant="outline"
                      size="sm"
                      className="glass hover:glow-primary"
                      onClick={() => window.open(project.github, '_blank')}
                    >
                      <Github className="mr-2" size={16} />
                      Code
                    </Button>
                    
                   
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

export default Projects;

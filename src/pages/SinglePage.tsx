import { motion } from 'framer-motion';
import { Canvas } from '@react-three/fiber';
import { ArrowDown, Download, Github, Code, Palette, Rocket, Users, Mail, Linkedin, Twitter, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Scene3D from '@/components/Scene3D';

const skillCategories = [
  {
    title: 'Frontend',
    skills: ['React', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'Three.js'],
  },
  {
    title: 'Backend',
    skills: ['Node.js', 'Express', 'PostgreSQL', 'MongoDB', 'REST APIs'],
  },
  {
    title: 'Tools & Others',
    skills: ['Git', 'Docker', 'AWS', 'CI/CD', 'Agile'],
  },
];

const projects = [
  {
    title: 'Project One',
    description: 'A full-stack web application with modern UI/UX',
    tags: ['React', 'Node.js', 'MongoDB'],
    github: 'https://github.com',
    image: '/placeholder.svg',
  },
  {
    title: 'Project Two',
    description: '3D interactive portfolio with Three.js',
    tags: ['Three.js', 'React', 'WebGL'],
    github: 'https://github.com',
    image: '/placeholder.svg',
  },
  {
    title: 'Project Three',
    description: 'E-commerce platform with payment integration',
    tags: ['Next.js', 'Stripe', 'PostgreSQL'],
    github: 'https://github.com',
    image: '/placeholder.svg',
  },
];

const certificates = [
  { title: 'AWS Certified Developer', issuer: 'Amazon', year: '2024' },
  { title: 'React Advanced Patterns', issuer: 'Frontend Masters', year: '2023' },
  { title: 'Full Stack Development', issuer: 'Udemy', year: '2023' },
  { title: 'Node.js Certification', issuer: 'OpenJS Foundation', year: '2022' },
];

const education = [
  {
    degree: 'Bachelor of Computer Science',
    institution: 'University Name',
    year: '2019 - 2023',
    description: 'Focus on Software Engineering and Web Technologies',
  },
  {
    degree: 'High School Diploma',
    institution: 'School Name',
    year: '2017 - 2019',
    description: 'Science and Mathematics',
  },
];

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

const SinglePage = () => {
  const handleDownloadCV = () => {
    console.log('Downloading CV...');
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted');
  };

  return (
    <div className="w-full">
      {/* HOME SECTION */}
      <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 gradient-radial opacity-30" />
        
        <div className="absolute inset-0 opacity-50">
          <Canvas camera={{ position: [0, 0, 10], fov: 50 }}>
            <Scene3D />
          </Canvas>
        </div>

        <div className="relative z-10 container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
            {/* Left: Content */}
            <motion.div
              className="flex-1 text-center lg:text-left"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <motion.h1 
                className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 text-glow"
                initial={{ scale: 0.5 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                Your Name
              </motion.h1>
              
              <motion.h2 
                className="text-2xl md:text-3xl lg:text-4xl text-primary mb-6"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
              >
                Full Stack Developer | UI/UX Enthusiast
              </motion.h2>
              
              <motion.p 
                className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto lg:mx-0 mb-8"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.7 }}
              >
                Crafting beautiful, functional, and user-centered digital experiences
              </motion.p>

              <motion.div 
                className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center mb-12"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9 }}
              >
                <Button 
                  className="glass-strong hover:glow-primary transition-all duration-300 text-lg px-8 py-6"
                  onClick={() => scrollTo({ top: document.getElementById('projects')?.offsetTop || 0, behavior: 'smooth' })}
                >
                  <Github className="mr-2" />
                  View Projects
                </Button>
                
                <Button 
                  variant="outline" 
                  className="glass-strong hover:glow-secondary transition-all duration-300 text-lg px-8 py-6"
                  onClick={handleDownloadCV}
                >
                  <Download className="mr-2" />
                  Download CV
                </Button>
              </motion.div>
            </motion.div>

            {/* Right: Photo Placeholder */}
            <motion.div
              className="flex-1 flex justify-center lg:justify-end order-first lg:order-last"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96">
                <div className="absolute inset-0 rounded-full glass-strong border-4 border-primary/30 animate-glow" />
                <div className="absolute inset-4 rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
                  <span className="text-6xl md:text-7xl lg:text-8xl opacity-30">👤</span>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Scroll Indicator */}
          <motion.div
            className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <ArrowDown className="text-primary" size={32} />
          </motion.div>
        </div>
      </section>

      {/* ABOUT SECTION */}
      <section id="about" className="relative min-h-screen py-24">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-16 text-center text-glow">
              About Me
            </h1>
            
            <div className="flex flex-col lg:flex-row items-center gap-12 mb-16">
              {/* Left: Photo Placeholder */}
              <motion.div
                className="flex-shrink-0"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                <div className="relative w-64 h-64 md:w-80 md:h-80">
                  <div className="absolute inset-0 rounded-2xl glass-strong border-2 border-primary/30 animate-glow" />
                  <div className="absolute inset-4 rounded-2xl bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
                    <span className="text-7xl md:text-8xl opacity-30">👤</span>
                  </div>
                </div>
              </motion.div>

              {/* Right: Content */}
              <motion.div
                className="flex-1 glass p-8 rounded-lg"
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
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
            </div>

            <h3 className="text-3xl font-bold mb-8 text-center">Core Values</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((value, index) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
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
          </motion.div>
        </div>
      </section>

      {/* SKILLS SECTION */}
      <section id="skills" className="relative min-h-screen py-24">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-16 text-center text-glow">
              Skills & Technologies
            </h1>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {skillCategories.map((category, index) => (
                <motion.div
                  key={category.title}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 }}
                  whileHover={{ scale: 1.05 }}
                >
                  <Card className="glass-strong p-8 h-full hover:glow-primary transition-all duration-300">
                    <h3 className="text-2xl font-bold mb-6 text-primary">
                      {category.title}
                    </h3>
                    <div className="flex flex-wrap gap-3">
                      {category.skills.map((skill, skillIndex) => (
                        <motion.div
                          key={skill}
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ delay: index * 0.2 + skillIndex * 0.1 }}
                          whileHover={{ scale: 1.1 }}
                        >
                          <Badge className="text-base py-2 px-4 glass hover:glow-secondary transition-all duration-300">
                            {skill}
                          </Badge>
                        </motion.div>
                      ))}
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* PROJECTS SECTION */}
      <section id="projects" className="relative min-h-screen py-24">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-16 text-center text-glow">
              Featured Projects
            </h1>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project, index) => (
                <motion.div
                  key={project.title}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 }}
                  whileHover={{ scale: 1.05, rotateY: 5 }}
                  style={{ perspective: 1000 }}
                >
                  <Card className="glass-strong overflow-hidden h-full hover:glow-primary transition-all duration-300">
                    <div className="aspect-video bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
                      <span className="text-6xl opacity-30">🖼️</span>
                    </div>
                    <div className="p-6">
                      <h3 className="text-2xl font-bold mb-3">{project.title}</h3>
                      <p className="text-muted-foreground mb-4">{project.description}</p>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.tags.map((tag) => (
                          <Badge key={tag} variant="secondary" className="glass">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                      <Button 
                        className="w-full glass hover:glow-secondary"
                        onClick={() => window.open(project.github, '_blank')}
                      >
                        <Github className="mr-2" size={18} />
                        View on GitHub
                      </Button>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* CERTIFICATES SECTION */}
      <section id="certificates" className="relative min-h-screen py-24">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-16 text-center text-glow">
              Certificates & Achievements
            </h1>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
              {certificates.map((cert, index) => (
                <motion.div
                  key={cert.title}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.05, y: -5 }}
                >
                  <Card className="glass-strong p-6 h-full hover:glow-primary transition-all duration-300 cursor-pointer">
                    <div className="aspect-video bg-gradient-to-br from-primary/20 to-secondary/20 rounded-lg mb-4 flex items-center justify-center">
                      <span className="text-5xl">🏆</span>
                    </div>
                    <h3 className="text-lg font-bold mb-2">{cert.title}</h3>
                    <p className="text-sm text-muted-foreground mb-1">{cert.issuer}</p>
                    <p className="text-sm text-primary">{cert.year}</p>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* EDUCATION SECTION */}
      <section id="education" className="relative min-h-screen py-24">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-16 text-center text-glow">
              Education
            </h1>
            
            <div className="max-w-4xl mx-auto">
              {education.map((edu, index) => (
                <motion.div
                  key={edu.degree}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 }}
                  className="relative mb-12 last:mb-0"
                >
                  <div className="flex items-start gap-6">
                    <motion.div 
                      className="flex-shrink-0 w-4 h-4 rounded-full bg-primary mt-2 relative z-10"
                      whileHover={{ scale: 1.5 }}
                    >
                      <div className="absolute inset-0 rounded-full bg-primary animate-ping opacity-75" />
                    </motion.div>
                    
                    {index < education.length - 1 && (
                      <div className="absolute left-2 top-6 w-0.5 h-full bg-gradient-to-b from-primary to-transparent" 
                           style={{ transform: 'translateX(-50%)' }} />
                    )}
                    
                    <Card className="flex-1 glass-strong p-6 hover:glow-primary transition-all duration-300">
                      <h3 className="text-2xl font-bold mb-2 text-primary">
                        {edu.degree}
                      </h3>
                      <p className="text-lg mb-2">{edu.institution}</p>
                      <p className="text-muted-foreground mb-3">{edu.year}</p>
                      <p className="text-muted-foreground">{edu.description}</p>
                    </Card>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section id="contact" className="relative min-h-screen py-24">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-16 text-center text-glow">
              Get In Touch
            </h1>
            
            <div className="max-w-2xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                <Card className="glass-strong p-8">
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label className="block text-sm font-medium mb-2">Name</label>
                      <Input 
                        type="text" 
                        placeholder="Your name"
                        className="glass-strong"
                        required
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium mb-2">Email</label>
                      <Input 
                        type="email" 
                        placeholder="your.email@example.com"
                        className="glass-strong"
                        required
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium mb-2">Message</label>
                      <Textarea 
                        placeholder="Your message..."
                        rows={6}
                        className="glass-strong resize-none"
                        required
                      />
                    </div>
                    
                    <Button 
                      type="submit" 
                      className="w-full glass-strong hover:glow-primary transition-all duration-300 text-lg py-6"
                    >
                      <Mail className="mr-2" />
                      Send Message
                    </Button>
                  </form>
                  
                  <div className="mt-8 pt-8 border-t border-border">
                    <p className="text-center text-muted-foreground mb-4">
                      Or reach out directly:
                    </p>
                    <div className="flex justify-center gap-4">
                      <Button 
                        variant="outline" 
                        size="icon"
                        className="glass hover:glow-primary"
                        onClick={() => window.open('mailto:your.email@example.com')}
                      >
                        <Mail size={20} />
                      </Button>
                      <Button 
                        variant="outline" 
                        size="icon"
                        className="glass hover:glow-primary"
                        onClick={() => window.open('https://linkedin.com', '_blank')}
                      >
                        <Linkedin size={20} />
                      </Button>
                      <Button 
                        variant="outline" 
                        size="icon"
                        className="glass hover:glow-primary"
                        onClick={() => window.open('https://github.com', '_blank')}
                      >
                        <Github size={20} />
                      </Button>
                      <Button 
                        variant="outline" 
                        size="icon"
                        className="glass hover:glow-primary"
                        onClick={() => window.open('https://twitter.com', '_blank')}
                      >
                        <Twitter size={20} />
                      </Button>
                    </div>
                  </div>
                </Card>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default SinglePage;

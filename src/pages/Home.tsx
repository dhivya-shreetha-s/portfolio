import { motion } from 'framer-motion';
import { Canvas } from '@react-three/fiber';
import { ArrowDown, Download, Github } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Scene3D from '@/components/Scene3D';
import PageTransition from '@/components/PageTransition';
import { Link } from 'react-router-dom';

const Home = () => {
  const handleDownloadCV = () => {
    // Trigger download of resume stored in public folder
    const link = document.createElement('a');
    link.href = '/resume.pdf'; // Place your resume file in public/resume.pdf
    link.download = 'Dhivya_Shreetha_S_Resume.pdf';
    link.click();
  };

  return (
    <PageTransition>
      <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Gradient Background */}
        <div className="absolute inset-0 gradient-radial opacity-30" />
        
        {/* 3D Scene */}
        <div className="absolute inset-0 opacity-50">
          <Canvas camera={{ position: [0, 0, 10], fov: 50 }}>
            <Scene3D />
          </Canvas>
        </div>

        {/* Content */}
        <div className="relative z-10 container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.h1 
              className="text-6xl md:text-8xl font-bold mb-6 text-glow"
              initial={{ scale: 0.5 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Dhivya Shreetha S
            </motion.h1>
            
            <motion.h2 
              className="text-2xl md:text-4xl text-primary mb-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              AI & Machine Learning Enthusiast 🤖 | Web Development Explorer 🌐
            </motion.h2>
            
            <motion.p 
              className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-12"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
            >
              Passionate about AI, machine learning, and web technologies—combining logic and creativity to build impactful solutions.
            </motion.p>

            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9 }}
            >
              <Link to="/projects">
                <Button className="glass-strong hover:glow-primary transition-all duration-300 text-lg px-8 py-6">
                  <Github className="mr-2" />
                  View Projects
                </Button>
              </Link>
              
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

          {/* Scroll Indicator */}
          <motion.div
            className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <ArrowDown className="text-primary" size={32} />
          </motion.div>
        </div>
      </div>
    </PageTransition>
  );
};

export default Home;

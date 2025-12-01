import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Canvas } from "@react-three/fiber";
import {
  ArrowDown,
  Download,
  Github,
  Code,
  Palette,
  Rocket,
  Users,
  Mail,
  Linkedin,
  MapPin,
  Phone,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import emailjs from "@emailjs/browser";
import Scene3D from "@/components/Scene3D";

// Helper function to get image path with base URL
const getImagePath = (path: string) => `${import.meta.env.BASE_URL}${path.startsWith('/') ? path.slice(1) : path}`;

const skillCategories = [
  {
    title: 'AI & Machine Learning',
    skills: [
      'TensorFlow ',
       'Keras',
      'Scikit-Learn',
      'NumPy',
      'Pandas',
      'NLP ',
      'Classification Models',
      'Deep Learning Basics',
    ],
  },
  {
    title: 'Web Development',
    skills: [
      'React',
      'HTML5 ',
       'CSS3',
      'JavaScript ',
      'Python',
      'Firebase',
      'SQL',
    ],
  },
  {
    title: 'Tools & Platforms',
    skills: [
      'Git ',
       'GitHub',
      'Jupyter Notebook',
      'VS Code',
      'Google Colab',
    ],
  },
];

const projects = [
   {
  title: "Waste-Zero",
  description:
    "A secure waste management platform with login 🔐, OTP verification 📩, user dashboard 📊, and JWT-based authentication built using React, TypeScript, and Node.js.",
  tags: ["React", "TypeScript", "Node.js", "Express", "JWT"],
  github: "https://github.com/dhivya-shreetha-s/Waste_Zero",
  image: "/wastezero.png",
},
  {
    title: "Waste Classification",
    description:
      "A machine learning model that classifies waste into degradable 🌱 and non-degradable 🗑️ categories using image classification to support smarter waste management.",
    tags: ["TensorFlow", "Scikit-Learn", "Python"],
    github: "https://github.com/dhivya-shreetha-s/Waste_Classification",
    image: "/waste-classification.png",
  },

  {
    title: "Movie Sentiment Analyzer",
    description:
      "A Streamlit-based NLP app that predicts movie review sentiment as Positive 👍 or Negative 👎 using Logistic Regression and Naive Bayes with instant real-time results.",
    tags: ["NLP", "Python", "Streamlit"],
    github: "https://github.com/dhivya-shreetha-s/Movie_Sentiment_Analyzer",
    image: "/movie-sentiment.png",
  },




  {
    title: "Hotel Room Reservation System",
    description:
      "A modern hotel booking platform built with React ⚛️, Tailwind 🎨 and Supabase 🗄️ featuring room browsing, reservation management, and admin dashboard.",
    tags: ["React", "Tailwind CSS", "Supabase"],
    github: "https://github.com/dhivya-shreetha-s/room-rent-project",
    image: "/hotel-reservation.png",
  },
];


const certificatesTop10 = [
  { title: "MERIT Certificate", issuer: "TalentSprint", year: "2025", image: "/cert-merit.png" },
  { title: "AICTE Internship Certificate", issuer: "AICTE", year: "2025", image: "/cert-aicte.png" },
  { title: "Pantech Internship Certificate", issuer: "Pantech eLearning , Msme", year: "2025", image: "/cert-pantech.png" },
  { title: "Mental Health and Wellbeing", issuer: "NPTEL", year: "2025", image: "/cert-mental-health.png" },
  { title: "Python for Data Science, AI & Development", issuer: "IBM", year: "2025", image: "/cert-python-datascience.png" },
  { title: "GenAI in Data Analytics", issuer: "Meta", year: "2025", image: "/cert-genai-analytics.png" },
  { title: "Machine Learning with ChatGPT – Image Classification", issuer: "Coursera", year: "2025", image: "/cert-ml-chatgpt.png" },
  { title: "Build AI Apps with ChatGPT, DALL-E & GPT-4", issuer: "Scrimba", year: "2025", image: "/cert-build-ai.png" },
  { title: "TechA Linux Programming Foundation", issuer: "Infosys", year: "2025", image: "/cert-techa-linux.png" },
  { title: "Angular Full Stack Development", issuer: "Infosys", year: "2025", image: "/cert-angular-fullstack.png" },
   { title: "Linux Shell Scripting Solutions", issuer: "Infosys", year: "2025", image: "/cert-linux-shell.png" },
  { title: "Linux for Beginners", issuer: "Infosys", year: "2025", image: "/cert-linux-beginners.png" },
];


const certificatesOthers = [
  
 
  { title: "Operating Systems", issuer: "NPTEL", year: "2025", image: "/cert-operating-systems.png" },
  { title: "E-Business", issuer: "NPTEL", year: "2025", image: "/cert-e-business.png" },
  { title: "Enhancing Soft Skills and Personality", issuer: "NPTEL", year: "2025", image: "/cert-softskills.png" },
  { title: "Linux Bash Scripting Training", issuer: "Infosys", year: "2025", image: "/cert-linux-bash.png" },
  { title: "Introduction to Software Engineering", issuer: "Coursera", year: "2025", image: "/cert-software-engineering.png" },
  { title: "Data Structures & Algorithms Using Python – Part 1", issuer: "Infosys", year: "2025", image: "/cert-dsa1.png" },
  { title: "Data Structures & Algorithms Using Python – Part 2", issuer: "Infosys", year: "2025", image: "/cert-dsa2.png" },
  { title: "Theervathon Certificate", issuer: "Startup TN", year: "2025", image: "/cert-theervathon.png" },
  { title: "Introduction to Cybersecurity Certification", issuer: "Cisco", year: "2025", image: "/cert-cisco-cyber.png" },
  { title: "Python Essentials 1", issuer: "Cisco", year: "2025", image: "/cert-python-essentials.png" },
];



const education = [
  {
    degree: "B.Tech in Artificial Intelligence and Data Science",
    institution: "Karpagam Academy of Higher Education",
    year: "2024 – 2028",
    description:
      "Currently pursuing 2nd year with a strong focus on artificial intelligence, data science, and modern computational technologies.",
  },
  {
    degree: "Higher Secondary Certificate (HSC)",
    institution: "Aggarwal Matriculation Higher Secondary School",
    year: "2023 – 2024",
    description:
      "Completed Higher Secondary with 77%, specializing in Biology and Mathematics.",
  },
];


const values = [
  {
    icon: Code,
    title: 'Clean & Scalable Development',
    description:
      'Writing maintainable, efficient, and scalable code to ensure long-term reliability and performance.',
  },
  {
    icon: Palette,
    title: 'Innovation & Problem-Solving',
    description:
      'Driven by curiosity to build meaningful, creative, and data-driven solutions that make real-world impact.',
  },
  {
    icon: Rocket,
    title: 'Continuous Learning',
    description:
      'Exploring emerging AI/ML technologies, research trends, and new skills to stay ahead in a fast-moving tech world.',
  },
  {
    icon: Users,
    title: 'Collaboration & Knowledge Sharing',
    description:
      'Thriving in team environments, contributing ideas, and learning through hackathons and community engagement.',
  },
];


const SinglePage = () => {
  const [showMore, setShowMore] = useState(false);
  const { toast } = useToast();

  // form state for the contact form
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  useEffect(() => {
    // initialize EmailJS once (public key)
    try {
      emailjs.init("uHTkt5tPgGkS5gSWh");
    } catch (err) {
      // silent
    }
  }, []);

  const handleDownloadCV = () => {
    console.log("Downloading CV...");
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    console.log("📨 Sending Email from SinglePage...");

    try {
      await emailjs.send(
        "service_v93sjyp",
        "template_ywwqpai",
        {
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
        }
      );

      console.log("✅ Email Sent Successfully from SinglePage!");

      toast({
        title: "Message Sent! 🎉",
        description: "Thanks for reaching out! I will reply soon.",
      });

      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch (error) {
      console.error("❌ EmailJS Error (SinglePage):", error);
      toast({
        title: "Failed to send message",
        description: "Please try again later.",
        variant: "destructive",
      });
    }
  };

  return (
    <div className="w-full">
      {/* HOME SECTION */}
<section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
  <div className="absolute inset-0 gradient-radial opacity-30" />
  
  <div className="absolute inset-0 opacity-50 pointer-events-none">

  <Canvas
  camera={{ position: [0, 0, 10], fov: 50 }}
  className="pointer-events-none"
>
  <Scene3D />
</Canvas>

  </div>

  <div className="relative z-10 container mx-auto px-4">
    <div className="flex flex-col lg:flex-row items-center justify-between gap-12">

      {/* LEFT CONTENT */}
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
          Dhivya Shreetha S
        </motion.h1>
        
        <motion.h2 
          className="text-2xl md:text-3xl lg:text-4xl text-primary mb-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          AI & Machine Learning Enthusiast 🤖 | Web Development Explorer 🌐
        </motion.h2>
        
        <motion.p 
          className="text-lg md:text-xl text-gray-200 max-w-2xl mx-auto lg:mx-0 mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
        >
          Passionate about AI, machine learning, and web technologies—combining logic and creativity to build impactful solutions.
        </motion.p>

        <motion.div 
          className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9 }}
        >
         <Button 
  variant="outline"
  className="glass-strong hover:glow-secondary transition-all duration-300 text-lg px-8 py-6"
  onClick={() => {
    const element = document.getElementById('projects');
    if (element) {
      const currentScroll = window.pageYOffset;
      const elementTop = element.getBoundingClientRect().top + currentScroll;
      const offset = 80; // Same as navbar height
      const targetScroll = elementTop - offset;
      
      window.scrollTo({
        top: targetScroll,
        behavior: 'smooth',
      });
    }
  }}
>
  <Github className="mr-2" />
  View Projects
</Button>

          
         <Button 
  variant="outline" 
  className="glass-strong hover:glow-secondary transition-all duration-300 text-lg px-8 py-6"
  onClick={() => {
    const link = document.createElement('a');
    link.href = getImagePath('/resume.pdf');
    link.download = 'Dhivya_Shreetha_S_Resume.pdf';
    link.click();
  }}
>
  <Download className="mr-2" />
  Download CV
</Button>

        </motion.div>
      </motion.div>

      {/* RIGHT: PROFILE IMAGE */}
      <motion.div
        className="flex-1 flex justify-center lg:justify-end order-first lg:order-last"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.4 }}
      >
        <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96">
          <img
            src={getImagePath("/profile.png")}
            alt="Profile"
            className="w-full h-full rounded-full object-cover shadow-lg border-4 border-primary/30"
          />
        </div>
      </motion.div>

    </div>

    {/* SCROLL ICON */}
    <motion.div
      className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      animate={{ y: [0, 10, 0] }}
      transition={{ duration: 2, repeat: Infinity }}
    >
      <ArrowDown className="text-primary" size={26} />
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
            
           <div className="flex flex-col items-center justify-center text-center mb-16">
  <motion.div
    className="
      w-full max-w-6xl                /* <- wider container */
      glass-strong p-10 rounded-xl shadow-lg
      transition-all duration-500
      bg-black/30 border border-white/10
      hover:scale-[1.02] hover:shadow-2xl
      hover:border-primary/40
      hover:bg-gradient-to-br hover:from-primary/10 hover:to-secondary/10
    "
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay: 0.2 }}
  >
    <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground text-center">
      Hello! I'm an AI & Machine Learning Enthusiast
    </h2>

    {/* Make paragraphs justified for clean edges on both sides.
        We keep the heading centered but the body text justified. */}
    <div style={{ textAlign: 'justify' }} className="space-y-4">
      <p className="text-lg text-gray-200 leading-relaxed">
        With a growing passion for artificial intelligence and machine learning, I enjoy exploring how data, models, and automation can solve real-world challenges. I also work with modern web technologies to build responsive, user-friendly, and data-driven applications.
      </p>

      <p className="text-lg text-gray-200 leading-relaxed">
        My journey in tech began with curiosity—learning how intelligent systems work and how software connects people and ideas. Over time, this curiosity evolved into a commitment to building meaningful solutions that create impact.
      </p>

      <p className="text-lg text-gray-200 leading-relaxed">
        When I'm not experimenting with AI models or building projects, I’m learning new tools, participating in hackathons, collaborating with peers, or continuously improving my skills to stay aligned with the fast-moving world of technology.
      </p>
    </div>
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
                  <Card className="glass-strong p-6 h-full hover:glow-primary transition-all duration-300 shadow-lg">
                    <value.icon className="text-primary mb-4" size={40} />
                    <h4 className="text-xl font-bold mb-2 text-foreground">{value.title}</h4>
                    <p className="text-gray-300">{value.description}</p>
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
                  <Card className="glass-strong p-8 h-full hover:glow-primary transition-all duration-300 shadow-lg">
                    <h3 className="text-2xl font-bold mb-4 text-foreground">
                      {category.title}
                    </h3>
                    
                    {/* Horizontal Divider */}
                    <div className="mb-6 h-[2px] bg-gradient-to-r from-transparent via-primary/80 via-50% via-secondary/80 to-transparent opacity-60 rounded-full" />
                    
                    <div className="flex flex-wrap gap-3">
                      {category.skills.map((skill, skillIndex) => (
                        <motion.div
                          key={skill}
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ delay: index * 0.2 + skillIndex * 0.1 }}
                          whileHover={{ scale: 1.15 }}
                        >
                         <Badge
  className="
    text-base py-2 px-4 glass transition-all duration-300
    bg-neutral-800/60 text-white border border-transparent
    hover:text-black hover:bg-yellow-300 hover:border-yellow-500
    hover:shadow-[0_0_25px_rgba(255,200,0,0.9)]
  "
>
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
                  <Card className="glass-strong overflow-hidden h-full hover:glow-primary transition-all duration-300 shadow-lg">
                    <div className="aspect-video overflow-hidden">
  <img
    src={getImagePath(project.image)}
    alt={project.title}
    className="w-full h-full object-cover"
  />
</div>

                    <div className="p-6">
                      <h3 className="text-2xl font-bold mb-3 text-foreground">{project.title}</h3>
                      <p className="text-gray-300 mb-4">{project.description}</p>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.tags.map((tag) => (
                          <Badge key={tag} variant="secondary" className="glass">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                      <div className="flex flex-col sm:flex-row gap-3">
                        <Button
  className="flex-1 bg-primary/30 text-white border border-primary/40 
  hover:bg-primary hover:text-black hover:shadow-[0_0_20px_rgba(0,255,255,0.7)]
  transition-all duration-300"
  onClick={() => window.open(project.github, '_blank')}
>
  <Github className="mr-2" size={18} />
  Code
</Button>

                       
                      </div>
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

      {/* TOP 10 CERTIFICATES */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
        {certificatesTop10.map((cert, index) => (
          <motion.div
            key={cert.title}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ scale: 1.05, y: -5 }}
          >
            <Card className="glass-strong p-6 h-full hover:glow-primary transition-all duration-300 cursor-pointer shadow-lg">
             <div className="aspect-video overflow-hidden rounded-lg mb-4">
  <img 
    src={getImagePath(cert.image)}
    alt={cert.title}
    className="w-full h-full object-cover"
  />
</div>

              <h3 className="text-lg font-bold mb-2 text-foreground">{cert.title}</h3>
              <p className="text-sm text-gray-300 mb-1">{cert.issuer}</p>
              <p className="text-sm text-primary">{cert.year}</p>
            </Card>
          </motion.div>
        ))}
      </div>

      {/* VIEW MORE BUTTON */}
      <div className="text-center mt-10">
        <button
          onClick={() => setShowMore(!showMore)}
          className="
            px-8 py-3 rounded-xl text-white font-medium 
            bg-primary/30 border border-primary/40 
            hover:bg-primary hover:text-black 
            transition-all duration-300 hover:shadow-lg
          "
        >
          {showMore ? "View Less" : "View More"}
        </button>
      </div>

      {/* OTHER CERTIFICATES */}
      {showMore && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto mt-10">
          {certificatesOthers.map((cert, index) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              whileHover={{ scale: 1.05, y: -5 }}
            >
              <Card className="glass-strong p-6 h-full hover:glow-primary transition-all duration-300 cursor-pointer shadow-lg">
                <div className="aspect-video overflow-hidden rounded-lg mb-4">
  <img 
    src={getImagePath(cert.image)}
    alt={cert.title}
    className="w-full h-full object-cover"
  />
</div>

                <h3 className="text-lg font-bold mb-2 text-foreground">{cert.title}</h3>
                <p className="text-sm text-gray-300 mb-1">{cert.issuer}</p>
                <p className="text-sm text-primary">{cert.year}</p>
              </Card>
            </motion.div>
          ))}
        </div>
      )}
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
                    
                    <Card className="flex-1 glass-strong p-6 hover:glow-primary transition-all duration-300 shadow-lg">
                      <h3 className="text-2xl font-bold mb-2 text-primary">
                        {edu.degree}
                      </h3>
                      <p className="text-lg mb-2 text-foreground">{edu.institution}</p>
                      <p className="text-gray-300 mb-3">{edu.year}</p>
                      <p className="text-gray-300">{edu.description}</p>
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
            
            <div className="max-w-6xl mx-auto">
              <Card className="glass-strong p-8 shadow-2xl border-primary/20">
                <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
                  {/* Left: Contact Info Cards */}
                  <motion.div
                    className="lg:col-span-2 space-y-6"
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                  >
                    <div className="space-y-4">
                      <h3 className="text-2xl font-bold text-foreground mb-6">Contact Information</h3>
                      
                      <motion.div 
                        className="glass p-4 rounded-lg hover:glow-primary transition-all duration-300"
                        whileHover={{ scale: 1.05 }}
                      >
                        <div className="flex items-start gap-4">
                          <div className="p-3 rounded-lg bg-primary/20">
                            <Mail className="text-primary" size={24} />
                          </div>
                          <div>
                            <h4 className="font-bold text-foreground mb-1">Email</h4>
                            <a 
                              href="mailto:your.email@example.com"
                              className="text-gray-300 hover:text-primary transition-colors"
                            >
                              Dhivyashreetha07@gmail.com
                            </a>
                          </div>
                        </div>
                      </motion.div>

                      <motion.div 
                        className="glass p-4 rounded-lg hover:glow-primary transition-all duration-300"
                        whileHover={{ scale: 1.05 }}
                      >
                        <div className="flex items-start gap-4">
                          <div className="p-3 rounded-lg bg-primary/20">
                            <Phone className="text-primary" size={24} />
                          </div>
                          <div>
                            <h4 className="font-bold text-foreground mb-1">Phone</h4>
                            <a 
                              href="tel:+1234567890"
                              className="text-gray-300 hover:text-primary transition-colors"
                            >
                              6381605094
                            </a>
                          </div>
                        </div>
                      </motion.div>

                      <motion.div 
                        className="glass p-4 rounded-lg hover:glow-primary transition-all duration-300"
                        whileHover={{ scale: 1.05 }}
                      >
                        <div className="flex items-start gap-4">
                          <div className="p-3 rounded-lg bg-primary/20">
                            <MapPin className="text-primary" size={24} />
                          </div>
                          <div>
                            <h4 className="font-bold text-foreground mb-1">Location</h4>
                            <p className="text-gray-300">
                              Coimbatore,India
                            </p>
                          </div>
                        </div>
                      </motion.div>
                    </div>

                    {/* Social Links */}
                    <div className="pt-6">
                      <h4 className="font-bold text-foreground mb-4">Connect With Me</h4>
                      <div className="flex gap-3">
                        <Button 
                          variant="outline" 
                          size="icon"
                          className="glass hover:glow-primary transition-all duration-300"
                          onClick={() => window.open('https://www.linkedin.com/in/s-dhivya-shreetha-888364324/', '_blank')}
                        >
                          <Linkedin size={20} />
                        </Button>
                        <Button 
                          variant="outline" 
                          size="icon"
                          className="glass hover:glow-primary transition-all duration-300"
                          onClick={() => window.open('https://github.com/dhivya-shreetha-s', '_blank')}
                        >
                          <Github size={20} />
                        </Button>
                        
                      </div>
                    </div>
                  </motion.div>

              {/* Right: Message Form */}
<motion.div
  className="lg:col-span-3"
  initial={{ opacity: 0, x: 50 }}
  whileInView={{ opacity: 1, x: 0 }}
  viewport={{ once: true }}
  transition={{ delay: 0.3 }}
>
  <form onSubmit={handleSubmit} className="space-y-6">
    
    {/* Name + Email */}
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
      
      <div>
        <label className="block text-sm font-medium mb-2 text-foreground">Name</label>
        <Input
          type="text"
          placeholder="Your name"
          className="
            w-full  
            px-4 py-3 
            rounded-xl 
            bg-gradient-to-br from-[#04121A]/40 to-[#0A2330]/40 
            border border-cyan-300/20 
            shadow-[0_0_12px_rgba(0,255,255,0.15)] 
            text-black 
            placeholder:text-gray-400 
            backdrop-blur-md 
            transition-all duration-300
            focus:border-cyan-400
            focus:shadow-[0_0_18px_rgba(0,255,255,0.45)]
            hover:shadow-[0_0_15px_rgba(0,255,255,0.25)]
            hover:border-cyan-300/40
          "
          required
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
        />
      </div>

      <div>
        <label className="block text-sm font-medium mb-2 text-foreground">Email</label>
        <Input
          type="email"
          placeholder="your.email@example.com"
          className="
            w-full  
            px-4 py-3 
            rounded-xl 
            bg-gradient-to-br from-[#04121A]/40 to-[#0A2330]/40 
            border border-cyan-300/20 
            shadow-[0_0_12px_rgba(0,255,255,0.15)] 
            text-white 
            placeholder:text-gray-400 
            backdrop-blur-md 
            transition-all duration-300
            focus:border-cyan-400
            focus:shadow-[0_0_18px_rgba(0,255,255,0.45)]
            hover:shadow-[0_0_15px_rgba(0,255,255,0.25)]
            hover:border-cyan-300/40
          "
          required
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
        />
      </div>

    </div>

    {/* Subject */}
    <div>
      <label className="block text-sm font-medium mb-2 text-foreground">Subject</label>
      <Input
        type="text"
        placeholder="Subject"
        className="
          w-full  
          px-4 py-3 
          rounded-xl 
          bg-gradient-to-br from-[#04121A]/40 to-[#0A2330]/40 
          border border-cyan-300/20 
          shadow-[0_0_12px_rgba(0,255,255,0.15)] 
          text-white 
          placeholder:text-gray-400 
          backdrop-blur-md 
          transition-all duration-300
          focus:border-cyan-400
          focus:shadow-[0_0_18px_rgba(0,255,255,0.45)]
          hover:shadow-[0_0_15px_rgba(0,255,255,0.25)]
          hover:border-cyan-300/40
        "
        required
        value={formData.subject}
        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
      />
    </div>

    {/* Message */}
    <div>
      <label className="block text-sm font-medium mb-2 text-foreground">Message</label>
      <Textarea
        placeholder="Your message..."
        rows={8}
        className="
          w-full  
          px-4 py-3 
          rounded-xl 
          bg-gradient-to-br from-[#04121A]/40 to-[#0A2330]/40 
          border border-cyan-300/20 
          shadow-[0_0_12px_rgba(0,255,255,0.15)] 
          text-white 
          placeholder:text-gray-400 
          backdrop-blur-md 
          resize-none
          transition-all duration-300
          focus:border-cyan-400
          focus:shadow-[0_0_18px_rgba(0,255,255,0.45)]
          hover:shadow-[0_0_15px_rgba(0,255,255,0.25)]
          hover:border-cyan-300/40
        "
        required
        value={formData.message}
        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
      />
    </div>

    {/* Submit button */}
    <Button
      type="submit"
      className="
        w-full py-4
        flex items-center justify-center gap-2
        text-white font-medium
        rounded-xl
        border border-cyan-400/30
        bg-primary/20
        transition-all duration-300
        hover:bg-primary
        hover:text-black
        hover:shadow-[0_0_16px_rgba(0,255,255,0.45)]
        hover:scale-[1.01]
      "
    >
      Submit
    </Button>

  </form>
</motion.div>

                </div>
              </Card>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default SinglePage;

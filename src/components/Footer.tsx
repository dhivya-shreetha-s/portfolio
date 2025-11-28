import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Twitter } from 'lucide-react';

const socialLinks = [
  { icon: Github, href: 'https://github.com/dhivya-shreetha-s', label: 'GitHub' },
  { icon: Linkedin, href: 'https://www.linkedin.com/in/s-dhivya-shreetha-888364324/', label: 'LinkedIn' },
  { icon: Mail, href: 'dhivyashreetha07@gmail.com', label: 'Email' },
];

const Footer = () => {
  return (
    <footer className="relative glass-strong mt-20 py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">

          {/* About */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-primary">About</h3>
            <p className="text-muted-foreground">
              An AI and Machine Learning enthusiast building interactive and impactful digital experiences.

            </p>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-primary">Connect</h3>
            <div className="flex flex-wrap gap-4">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.2, y: -5 }}
                  className="text-foreground hover:text-primary transition-colors"
                  aria-label={social.label}
                >
                  <social.icon size={24} />
                </motion.a>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-border pt-8 text-center text-muted-foreground">
          <p>
  © {new Date().getFullYear()} <span className="font-semibold">DHIVYA SHREETHA S</span> — All rights reserved
</p>

        </div>
      </div>
    </footer>
  );
};

export default Footer;

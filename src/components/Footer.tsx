import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Twitter } from 'lucide-react';
import { SiLeetcode, SiCodechef, SiHackerrank } from 'react-icons/si';

const socialLinks = [
  { icon: Github, href: 'https://github.com', label: 'GitHub' },
  { icon: Linkedin, href: 'https://linkedin.com', label: 'LinkedIn' },
  { icon: Twitter, href: 'https://twitter.com', label: 'Twitter' },
  { icon: Mail, href: 'mailto:your.email@example.com', label: 'Email' },
];

const codingProfiles = [
  { icon: SiLeetcode, href: 'https://leetcode.com', label: 'LeetCode' },
  { icon: SiCodechef, href: 'https://codechef.com', label: 'CodeChef' },
  { icon: SiHackerrank, href: 'https://hackerrank.com', label: 'HackerRank' },
];

const Footer = () => {
  return (
    <footer className="relative glass-strong mt-20 py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* About */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-primary">About</h3>
            <p className="text-muted-foreground">
              A passionate developer creating amazing web experiences with modern technologies.
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

          {/* Coding Profiles */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-primary">Coding Profiles</h3>
            <div className="flex flex-wrap gap-4">
              {codingProfiles.map((profile) => (
                <motion.a
                  key={profile.label}
                  href={profile.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.2, y: -5 }}
                  className="text-foreground hover:text-primary transition-colors"
                  aria-label={profile.label}
                >
                  <profile.icon size={24} />
                </motion.a>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-border pt-8 text-center text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Portfolio. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

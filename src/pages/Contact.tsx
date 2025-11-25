import { motion } from 'framer-motion';
import PageTransition from '@/components/PageTransition';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Mail, MapPin, Phone } from 'lucide-react';
import { useState } from 'react';
import { useToast } from '@/hooks/use-toast';

const contactInfo = [
  {
    icon: Mail,
    label: 'Email',
    value: 'your.email@example.com',
    href: 'mailto:your.email@example.com',
  },
  {
    icon: Phone,
    label: 'Phone',
    value: '+1 (555) 123-4567',
    href: 'tel:+15551234567',
  },
  {
    icon: MapPin,
    label: 'Location',
    value: 'Your City, Country',
    href: null,
  },
];

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Create mailto link
    const mailtoLink = `mailto:your.email@example.com?subject=Message from ${formData.name}&body=${encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    )}`;
    
    window.location.href = mailtoLink;
    
    toast({
      title: 'Opening email client...',
      description: 'Your default email application will open with the message.',
    });

    // Reset form
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <PageTransition>
      <div className="container mx-auto px-4 py-24">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-16 text-center text-glow">
            Get In Touch
          </h1>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
            >
              <h2 className="text-3xl font-bold mb-8 text-primary">
                Contact Information
              </h2>
              
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={info.label}
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.4 + index * 0.1 }}
                  >
                    <Card className="glass-strong p-6 hover:glow-primary transition-all duration-300">
                      {info.href ? (
                        <a
                          href={info.href}
                          className="flex items-center gap-4"
                        >
                          <div className="p-3 glass rounded-lg">
                            <info.icon className="text-primary" size={24} />
                          </div>
                          <div>
                            <p className="text-sm text-muted-foreground">{info.label}</p>
                            <p className="text-lg font-semibold">{info.value}</p>
                          </div>
                        </a>
                      ) : (
                        <div className="flex items-center gap-4">
                          <div className="p-3 glass rounded-lg">
                            <info.icon className="text-primary" size={24} />
                          </div>
                          <div>
                            <p className="text-sm text-muted-foreground">{info.label}</p>
                            <p className="text-lg font-semibold">{info.value}</p>
                          </div>
                        </div>
                      )}
                    </Card>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
            >
              <Card className="glass-strong p-8">
                <h2 className="text-3xl font-bold mb-6 text-primary">
                  Send a Message
                </h2>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-semibold mb-2">
                      Name
                    </label>
                    <Input
                      id="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="glass"
                      placeholder="Your name"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold mb-2">
                      Email
                    </label>
                    <Input
                      id="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="glass"
                      placeholder="your.email@example.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-semibold mb-2">
                      Message
                    </label>
                    <Textarea
                      id="message"
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="glass min-h-[150px]"
                      placeholder="Your message..."
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full glass-strong hover:glow-primary transition-all duration-300"
                    size="lg"
                  >
                    Send Message
                  </Button>
                </form>
              </Card>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </PageTransition>
  );
};

export default Contact;

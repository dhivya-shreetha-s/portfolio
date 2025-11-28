"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import PageTransition from "@/components/PageTransition";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MapPin, Phone } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import emailjs from "@emailjs/browser";

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "your.email@example.com",
    href: "mailto:your.email@example.com",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+1 (555) 123-4567",
    href: "tel:+15551234567",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Your City, Country",
    href: null,
  },
];

export default function Contact() {
  const { toast } = useToast();

  // initialize EmailJS ONCE
  useEffect(() => {
    emailjs.init("uHTkt5tPgGkS5gSWh"); // your public key
  }, []);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

 const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();

  console.log("📨 Sending Email...");

  try {
    await emailjs.send(
      "service_v93sjyp",     // Service ID
      "template_ywwqpai",    // Template ID
      {
        name: formData.name,
        email: formData.email,
        subject: formData.subject,
        message: formData.message,
      }
    );

    console.log("✅ Email Sent Successfully!");

    toast({
      title: "Message Sent! 🎉",
      description: "Thanks for reaching out! I will reply soon.",
    });

    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });

  } catch (error) {
    console.error("❌ EmailJS Error:", error);

    toast({
      title: "Failed to send message",
      description: "Please try again later.",
      variant: "destructive",
    });
  }
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
            {/* Left Side – Contact Info */}
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
                      <div className="flex items-center gap-4">
                        <div className="p-3 glass rounded-lg">
                          <info.icon className="text-primary" size={24} />
                        </div>
                        <div>
                          <p className="text-sm text-muted-foreground">
                            {info.label}
                          </p>
                          <p className="text-lg font-semibold">{info.value}</p>
                        </div>
                      </div>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Right – Contact Form */}
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
                  <Input
                    type="text"
                    placeholder="Your name"
                    className="input-gold glass"
                    required
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                  />

                  <Input
                    type="email"
                    placeholder="your.email@example.com"
                    className="input-gold glass"
                    required
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                  />

                  <Input
                    type="text"
                    placeholder="Subject"
                    className="input-gold glass"
                    required
                    value={formData.subject}
                    onChange={(e) =>
                      setFormData({ ...formData, subject: e.target.value })
                    }
                  />

                  <Textarea
                    placeholder="Your message..."
                    className="input-gold glass min-h-[150px]"
                    required
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                  />

                  <Button
                    type="submit"
                    className="w-full bg-[#e0c36f] hover:bg-[#d4b457] text-black font-semibold rounded-md py-3 transition"
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
}

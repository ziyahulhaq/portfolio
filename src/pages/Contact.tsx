import { useState } from "react";
import Navigation from "@/components/Navigation";
import { Mail, Github, Linkedin, Twitter, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Error",
        description: "Please fill in all fields",
        variant: "destructive",
      });
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      toast({
        title: "Error",
        description: "Please enter a valid email address",
        variant: "destructive",
      });
      return;
    }

    // Success feedback
    toast({
      title: "Message Sent!",
      description: "Thank you for reaching out. I'll get back to you soon!",
    });

    // Reset form
    setFormData({ name: "", email: "", message: "" });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const socials = [
    {
      name: "GitHub",
      icon: Github,
      link: "https://github.com",
      color: "hover:text-foreground",
    },
    {
      name: "LinkedIn",
      icon: Linkedin,
      link: "https://linkedin.com",
      color: "hover:text-blue-500",
    },
    {
      name: "Twitter",
      icon: Twitter,
      link: "https://twitter.com",
      color: "hover:text-sky-400",
    },
    {
      name: "Email",
      icon: Mail,
      link: "mailto:ziyavulhaq@example.com",
      color: "hover:text-neon-lime",
    },
  ];

  return (
    <div className="w-full bg-background noise-bg">
      <Navigation />
      
      <main className="w-full px-4 pt-24 pb-16 sm:px-6 md:px-8 lg:px-0">
        <div className="mx-auto max-w-7xl">
        {/* Hero Section */}
        <div className="mb-16 sm:mb-20 animate-fade-in-up">
          <h1 className="mb-4 sm:mb-6 font-heading text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-gradient-metallic">
            Get In Touch
          </h1>
          <p className="max-w-3xl text-lg sm:text-xl md:text-2xl text-muted-foreground">
            Have a project in mind or just want to chat? I'd love to hear from you. 
            Let's create something amazing together!
          </p>
        </div>

        <div className="grid gap-8 sm:gap-12 lg:grid-cols-2">
          {/* Contact Form */}
          <div
            className="animate-fade-in-up"
            style={{
              animationDelay: "0.2s",
              opacity: 0,
              animationFillMode: "forwards",
            }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="mb-2 block text-sm font-medium text-foreground">
                  Name
                </label>
                <Input
                  id="name"
                  name="name"
                  type="text"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your name"
                  className="h-12 border-border bg-card/50 backdrop-blur-sm focus-visible:border-neon-lime focus-visible:ring-neon-lime"
                />
              </div>

              <div>
                <label htmlFor="email" className="mb-2 block text-sm font-medium text-foreground">
                  Email
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="your.email@example.com"
                  className="h-12 border-border bg-card/50 backdrop-blur-sm focus-visible:border-neon-lime focus-visible:ring-neon-lime"
                />
              </div>

              <div>
                <label htmlFor="message" className="mb-2 block text-sm font-medium text-foreground">
                  Message
                </label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell me about your project or just say hi!"
                  rows={6}
                  className="resize-none border-border bg-card/50 backdrop-blur-sm focus-visible:border-neon-lime focus-visible:ring-neon-lime"
                />
              </div>

              <Button
                type="submit"
                size="lg"
                className="w-full gap-2 bg-neon-lime font-semibold text-background hover:bg-neon-lime/90 hover:scale-105 transition-all duration-200"
              >
                <Send className="h-5 w-5" />
                Send Message
              </Button>
            </form>
          </div>

          {/* Contact Info & Socials */}
          <div
            className="space-y-12 animate-fade-in-up"
            style={{
              animationDelay: "0.4s",
              opacity: 0,
              animationFillMode: "forwards",
            }}
          >
            {/* Social Links */}
            <div>
              <h2 className="mb-4 sm:mb-6 font-heading text-2xl sm:text-3xl font-bold text-foreground">
                Connect With Me
              </h2>
              <div className="grid grid-cols-2 gap-3 sm:gap-4">
                {socials.map((social, index) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={index}
                      href={social.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`group flex items-center gap-3 rounded-2xl border border-border bg-card/50 p-6 backdrop-blur-sm transition-all duration-300 hover:border-neon-lime/50 hover:scale-105 hover:shadow-xl ${social.color}`}
                    >
                      <Icon className="h-6 w-6 transition-transform duration-300 group-hover:scale-110" />
                      <span className="font-medium">{social.name}</span>
                    </a>
                  );
                })}
              </div>
            </div>

            {/* Additional Info */}
            <div className="rounded-3xl border border-border bg-card/50 p-6 sm:p-8 backdrop-blur-sm">
              <h2 className="mb-3 sm:mb-4 font-heading text-xl sm:text-2xl font-bold text-foreground">
                Let's Collaborate
              </h2>
              <p className="mb-4 sm:mb-6 text-muted-foreground">
                I'm currently available for freelance work and open to discussing 
                new projects. Whether you need a full-stack application, a stunning 
                frontend, or AI integration, I'm here to help bring your ideas to life.
              </p>
              
              <div className="space-y-2 sm:space-y-3">
                <div className="flex items-start gap-3">
                  <div className="rounded-full bg-neon-lime/10 p-2">
                    <Mail className="h-4 w-4 text-neon-lime" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Email</p>
                    <p className="font-medium text-foreground">ziyavulhaq@example.com</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="rounded-full bg-neon-lime/10 p-2">
                    <span className="flex h-4 w-4 items-center justify-center text-xs font-bold text-neon-lime">
                      ⚡
                    </span>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Response Time</p>
                    <p className="font-medium text-foreground">Usually within 24 hours</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        </div>
      </main>
    </div>
  );
};

export default Contact;

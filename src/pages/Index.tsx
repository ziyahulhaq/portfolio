import { useState } from "react";
import { Sparkles, Move, Code2, Zap, Brain, Target, ExternalLink, Github, Mail, Linkedin, Twitter, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Navigation from "@/components/Navigation";
import { useToast } from "@/hooks/use-toast";

const Index = () => {
  const { toast } = useToast();
  const [isHovered, setIsHovered] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const skills = [
    "React",
    "Node.js",
    "JavaScript",
    "Tailwind CSS",
    "Three.js",
    "TypeScript",
    "Next.js",
    "HTML",
    "CSS",
  ];

  const journey = [
    {
      year: "2024",
      title: "Web Developer",
      description: "Building modern web applications with React and Node.js",
    },
    {
      year: "2023",
      title: "Started Development Journey",
      description: "Began learning web technologies and fell in love with coding",
    },
  ];

  const values = [
    {
      icon: Code2,
      title: "Clean Code",
      description: "Writing maintainable and scalable code that stands the test of time",
    },
    {
      icon: Zap,
      title: "Performance",
      description: "Optimizing every aspect for lightning-fast user experiences",
    },
    {
      icon: Brain,
      title: "Innovation",
      description: "Exploring AI and emerging technologies to solve real problems",
    },
    {
      icon: Target,
      title: "User-Focused",
      description: "Designing with the end user in mind, always",
    },
  ];

  const projects = [
    {
      title: "AI Chat Application",
      description: "Real-time chat application with AI-powered responses using GPT integration. Built with React, Node.js, and WebSocket for instant messaging.",
      tags: ["React", "Node.js", "OpenAI", "WebSocket"],
      gradient: "from-purple-500/20 to-pink-500/20",
      featured: true,
    },
    {
      title: "E-Commerce Platform",
      description: "Full-stack e-commerce solution with payment integration, inventory management, and admin dashboard. Responsive design with Tailwind CSS.",
      tags: ["Next.js", "TypeScript", "Stripe", "PostgreSQL"],
      gradient: "from-blue-500/20 to-cyan-500/20",
      featured: true,
    },
    {
      title: "3D Portfolio Showcase",
      description: "Interactive 3D portfolio website using Three.js with smooth animations and immersive user experience. WebGL-powered graphics.",
      tags: ["Three.js", "React", "GSAP", "WebGL"],
      gradient: "from-green-500/20 to-emerald-500/20",
      featured: false,
    },
    {
      title: "Task Management App",
      description: "Collaborative task management tool with real-time updates, drag-and-drop interface, and team features. Built for productivity.",
      tags: ["React", "Firebase", "Tailwind CSS"],
      gradient: "from-orange-500/20 to-red-500/20",
      featured: false,
    },
    {
      title: "Weather Dashboard",
      description: "Beautiful weather dashboard with location search, forecasts, and interactive maps. Integrates multiple weather APIs for accurate data.",
      tags: ["JavaScript", "API Integration", "CSS"],
      gradient: "from-sky-500/20 to-indigo-500/20",
      featured: false,
    },
    {
      title: "Code Snippet Manager",
      description: "Developer tool for saving and organizing code snippets with syntax highlighting, tagging, and search functionality.",
      tags: ["React", "Node.js", "MongoDB", "Prism.js"],
      gradient: "from-violet-500/20 to-purple-500/20",
      featured: false,
    },
  ];

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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Error",
        description: "Please fill in all fields",
        variant: "destructive",
      });
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      toast({
        title: "Error",
        description: "Please enter a valid email address",
        variant: "destructive",
      });
      return;
    }

    toast({
      title: "Message Sent!",
      description: "Thank you for reaching out. I'll get back to you soon!",
    });

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

  return (
    <div className="relative w-full bg-background noise-bg">
      <Navigation />
      
      {/* Radial gradient overlay */}
      <div className="absolute inset-0 bg-gradient-radial from-hero-bg/50 via-background to-background pointer-events-none" />

      {/* Main content */}
      <div className="relative z-10 w-full px-4 pt-16 pb-16 sm:px-6 md:px-8 lg:px-0">
        <div className="mx-auto max-w-7xl">
          {/* Hero Section */}
          <section id="hero" className="flex flex-col items-center justify-center py-16 pt-32 min-h-screen md:py-20 md:pt-40 lg:py-24 lg:pt-48">
            {/* Hero Block with Selection Border */}
            <div
              className="group relative animate-fade-in-up w-full"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
              style={{ animationDelay: "0.2s", opacity: 0 }}
            >
              {/* Dashed selection border */}
              <div
                className={`absolute inset-0 -m-8 rounded-lg border-2 border-dashed transition-all duration-300 ${
                  isHovered ? "border-foreground/60 scale-[1.02]" : "border-foreground/30"
                }`}
              >
                {/* Corner handles */}
                {[
                  "top-0 left-0 -translate-x-1/2 -translate-y-1/2",
                  "top-0 right-0 translate-x-1/2 -translate-y-1/2",
                  "bottom-0 left-0 -translate-x-1/2 translate-y-1/2",
                  "bottom-0 right-0 translate-x-1/2 translate-y-1/2",
                  "top-0 left-1/2 -translate-x-1/2 -translate-y-1/2",
                  "bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2",
                  "left-0 top-1/2 -translate-x-1/2 -translate-y-1/2",
                  "right-0 top-1/2 translate-x-1/2 -translate-y-1/2",
                ].map((position, i) => (
                  <div
                    key={i}
                    className={`absolute ${position} h-3 w-3 rounded-sm bg-foreground transition-transform duration-200 ${
                      isHovered ? "scale-110" : "scale-100"
                    }`}
                  />
                ))}
                
                {/* Move icon */}
                <div className="absolute bottom-0 right-0 translate-x-1/2 translate-y-1/2">
                  <Move className="h-5 w-5 text-foreground/60" />
                </div>
              </div>

              {/* Hero content */}
              <div className="relative space-y-8 px-8 py-12">
                {/* Top label */}
                <div className="flex items-center gap-2 text-sm font-medium uppercase tracking-wider">
                  <span className="text-foreground">Web</span>
                  <span className="text-muted-foreground">Developer</span>
                </div>

                {/* Main Portfolio heading */}
                <div className="relative">
                  <div className="relative inline-block w-full">
                    <h1 className="font-heading text-6xl font-black tracking-tight sm:text-7xl md:text-8xl lg:text-9xl xl:text-[12rem]">
                      {["P", "o", "r", "t", "f", "o", "l", "i", "o"].map((letter, i) => (
                        <span
                          key={i}
                          className="inline-block text-gradient-metallic animate-fade-in"
                          style={{
                            animationDelay: `${0.5 + i * 0.05}s`,
                            opacity: 0,
                            animationFillMode: "forwards",
                          }}
                        >
                          {letter}
                        </span>
                      ))}
                    </h1>

                    {/* Signature overlay - Right aligned */}
                    <div
                      className="absolute right-0 top-1/2 -translate-y-1/2 rotate-[-5deg] text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-signature text-neon-lime glow-text animate-fade-in whitespace-nowrap"
                      style={{
                        animationDelay: "1.2s",
                        opacity: 0,
                        animationFillMode: "forwards",
                      }}
                    >
                      Ziyavul Haq
                    </div>
                  </div>
                </div>

                {/* Role and experience */}
                <div
                  className="flex flex-col sm:flex-row items-center gap-2 sm:gap-3 text-sm sm:text-base md:text-lg text-muted-foreground animate-fade-in-up"
                  style={{
                    animationDelay: "1.4s",
                    opacity: 0,
                    animationFillMode: "forwards",
                  }}
                >
                  <span className="text-foreground font-medium">Web Developer</span>
                  <span className="h-1 w-1 rounded-full bg-muted-foreground" />
                  <span>1 Year Experience</span>
                </div>

                {/* Skills */}
                <div
                  className="flex flex-wrap gap-1.5 sm:gap-2 justify-center animate-fade-in-up"
                  style={{
                    animationDelay: "1.6s",
                    opacity: 0,
                    animationFillMode: "forwards",
                  }}
                >
                  {skills.map((skill, i) => (
                    <span
                      key={i}
                      className="rounded-full border border-border bg-card/50 px-3 py-1 sm:px-4 sm:py-2 text-xs sm:text-sm font-medium text-foreground backdrop-blur-sm transition-all duration-200 hover:border-primary hover:bg-card"
                    >
                      {skill}
                    </span>
                  ))}
                </div>

                {/* Hobbies */}
                <p
                  className="text-sm text-muted-foreground animate-fade-in-up"
                  style={{
                    animationDelay: "1.8s",
                    opacity: 0,
                    animationFillMode: "forwards",
                  }}
                >
                  <span className="text-foreground">Hobbies:</span> Debugging, AI-based Projects
                </p>
              </div>
            </div>
          </section>

          {/* About Section */}
          <section id="about" className="py-16 sm:py-20 lg:py-24">
            <div className="mb-16 sm:mb-20 animate-fade-in-up">
              <h2 className="mb-4 sm:mb-6 font-heading text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-gradient-metallic">
                About Me
              </h2>
              <p className="max-w-3xl text-lg sm:text-xl md:text-2xl text-muted-foreground">
                I'm <span className="font-signature text-3xl text-neon-lime glow-text">Ziyavul Haq</span>, 
                a passionate web developer with 1 year of experience crafting digital experiences 
                that blend creativity with functionality.
              </p>
            </div>

            {/* Story Section */}
            <div className="mb-16 sm:mb-20 animate-fade-in-up" style={{ animationDelay: "0.2s", opacity: 0, animationFillMode: "forwards" }}>
              <div className="grid gap-8 sm:gap-12 lg:grid-cols-2">
                <div>
                  <h3 className="mb-4 sm:mb-6 font-heading text-3xl sm:text-4xl font-bold text-foreground">
                    My Story
                  </h3>
                  <div className="space-y-3 sm:space-y-4 text-base sm:text-lg text-muted-foreground">
                    <p>
                      My journey into web development started with a curiosity about how things work 
                      on the internet. What began as tinkering with HTML and CSS quickly evolved into 
                      a deep passion for creating full-stack applications.
                    </p>
                    <p>
                      I specialize in modern JavaScript frameworks like React and Next.js, building 
                      responsive and performant web applications. My backend expertise with Node.js 
                      allows me to create complete solutions from database to deployment.
                    </p>
                    <p>
                      When I'm not coding, you'll find me debugging complex problems (yes, it's a hobby!) 
                      or exploring AI-based projects. I believe in continuous learning and staying 
                      updated with the latest technologies.
                    </p>
                  </div>
                </div>

                <div>
                  <h3 className="mb-4 sm:mb-6 font-heading text-3xl sm:text-4xl font-bold text-foreground">
                    Journey
                  </h3>
                  <div className="space-y-6">
                    {journey.map((item, index) => (
                      <div
                        key={index}
                        className="relative border-l-2 border-neon-lime/30 pl-6 pb-6 last:pb-0"
                      >
                        <div className="absolute -left-2 top-0 h-4 w-4 rounded-full bg-neon-lime glow-orb" />
                        <div className="mb-1 text-sm font-semibold text-neon-lime">
                          {item.year}
                        </div>
                        <h4 className="mb-2 text-xl font-bold text-foreground">
                          {item.title}
                        </h4>
                        <p className="text-muted-foreground">{item.description}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Technical Skills */}
            <div className="mb-16 sm:mb-20 animate-fade-in-up" style={{ animationDelay: "0.4s", opacity: 0, animationFillMode: "forwards" }}>
              <h3 className="mb-6 sm:mb-8 font-heading text-3xl sm:text-4xl font-bold text-foreground">
                Technical Skills
              </h3>
              <div className="grid gap-4 sm:gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {[
                  { category: "Frontend", skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Three.js"] },
                  { category: "Backend", skills: ["Node.js", "Express", "REST APIs", "Database Design"] },
                  { category: "Tools", skills: ["Git", "VS Code", "Chrome DevTools", "Postman"] },
                ].map((group, index) => (
                  <div
                    key={index}
                    className="rounded-2xl border border-border bg-card/50 p-6 backdrop-blur-sm transition-all duration-300 hover:border-neon-lime/50 hover:bg-card"
                  >
                    <h4 className="mb-3 sm:mb-4 font-heading text-lg sm:text-xl font-bold text-neon-lime">
                      {group.category}
                    </h4>
                    <ul className="space-y-2">
                      {group.skills.map((skill, i) => (
                        <li key={i} className="text-foreground">
                          • {skill}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            {/* Values */}
            <div className="animate-fade-in-up" style={{ animationDelay: "0.6s", opacity: 0, animationFillMode: "forwards" }}>
              <h3 className="mb-6 sm:mb-8 font-heading text-3xl sm:text-4xl font-bold text-foreground">
                What I Value
              </h3>
              <div className="grid gap-4 sm:gap-6 sm:grid-cols-2 lg:grid-cols-4">
                {values.map((value, index) => {
                  const Icon = value.icon;
                  return (
                    <div
                      key={index}
                      className="group rounded-2xl border border-border bg-card/50 p-6 backdrop-blur-sm transition-all duration-300 hover:border-neon-lime/50 hover:bg-card hover:scale-105"
                    >
                      <Icon className="mb-4 h-10 w-10 text-neon-lime transition-transform duration-300 group-hover:scale-110" />
                      <h4 className="mb-2 font-heading text-lg sm:text-xl font-bold text-foreground">
                        {value.title}
                      </h4>
                      <p className="text-sm text-muted-foreground">
                        {value.description}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
          </section>

          {/* Projects Section */}
          <section id="projects" className="py-16 sm:py-20 lg:py-24">
            <div className="mb-16 sm:mb-20 animate-fade-in-up">
              <h2 className="mb-4 sm:mb-6 font-heading text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-gradient-metallic">
                Projects
              </h2>
              <p className="max-w-3xl text-lg sm:text-xl md:text-2xl text-muted-foreground">
                A collection of projects that showcase my skills in web development, 
                from AI integrations to 3D experiences.
              </p>
            </div>

            {/* Featured Projects */}
            <div className="mb-12 sm:mb-16">
              <h3 className="mb-6 sm:mb-8 flex items-center gap-2 font-heading text-2xl sm:text-3xl font-bold text-foreground">
                <Sparkles className="h-8 w-8 text-neon-lime" />
                Featured Projects
              </h3>
              <div className="grid gap-6 sm:gap-8 lg:grid-cols-2">
                {projects
                  .filter((p) => p.featured)
                  .map((project, index) => (
                    <div
                      key={index}
                      className="group animate-fade-in-up rounded-3xl border border-border bg-card/50 p-8 backdrop-blur-sm transition-all duration-300 hover:border-neon-lime/50 hover:scale-[1.02] hover:shadow-2xl"
                      style={{
                        animationDelay: `${0.2 + index * 0.1}s`,
                        opacity: 0,
                        animationFillMode: "forwards",
                      }}
                    >
                      <div className={`mb-4 sm:mb-6 h-40 sm:h-48 rounded-2xl bg-gradient-to-br ${project.gradient} flex items-center justify-center`}>
                        <Sparkles className="h-16 w-16 text-neon-lime opacity-50 transition-all duration-300 group-hover:scale-125 group-hover:opacity-100" />
                      </div>
                      
                      <h4 className="mb-2 sm:mb-3 font-heading text-xl sm:text-2xl font-bold text-foreground">
                        {project.title}
                      </h4>
                      
                      <p className="mb-4 sm:mb-6 text-muted-foreground">
                        {project.description}
                      </p>
                      
                      <div className="mb-4 sm:mb-6 flex flex-wrap gap-2">
                        {project.tags.map((tag, i) => (
                          <span
                            key={i}
                            className="rounded-full border border-neon-lime/30 bg-neon-lime/10 px-3 py-1 text-sm font-medium text-neon-lime"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                      
                      <div className="flex gap-3">
                        <Button variant="outline" size="sm" className="gap-2">
                          <Github className="h-4 w-4" />
                          Code
                        </Button>
                        <Button size="sm" className="gap-2 bg-neon-lime text-background hover:bg-neon-lime/90">
                          <ExternalLink className="h-4 w-4" />
                          Live Demo
                        </Button>
                      </div>
                    </div>
                  ))}
              </div>
            </div>

            {/* All Projects */}
            <div>
              <h3 className="mb-6 sm:mb-8 font-heading text-2xl sm:text-3xl font-bold text-foreground">
                More Projects
              </h3>
              <div className="grid gap-4 sm:gap-6 md:grid-cols-2 lg:grid-cols-3">
                {projects
                  .filter((p) => !p.featured)
                  .map((project, index) => (
                    <div
                      key={index}
                      className="group animate-fade-in-up rounded-2xl border border-border bg-card/50 p-6 backdrop-blur-sm transition-all duration-300 hover:border-neon-lime/50 hover:scale-105 hover:shadow-xl"
                      style={{
                        animationDelay: `${0.4 + index * 0.1}s`,
                        opacity: 0,
                        animationFillMode: "forwards",
                      }}
                    >
                      <div className={`mb-3 sm:mb-4 h-28 sm:h-32 rounded-xl bg-gradient-to-br ${project.gradient} flex items-center justify-center`}>
                        <Sparkles className="h-10 w-10 text-neon-lime opacity-50 transition-all duration-300 group-hover:scale-125 group-hover:opacity-100" />
                      </div>
                      
                      <h4 className="mb-2 font-heading text-lg sm:text-xl font-bold text-foreground">
                        {project.title}
                      </h4>
                      
                      <p className="mb-3 sm:mb-4 text-sm text-muted-foreground">
                        {project.description}
                      </p>
                      
                      <div className="mb-3 sm:mb-4 flex flex-wrap gap-2">
                        {project.tags.map((tag, i) => (
                          <span
                            key={i}
                            className="text-xs rounded-full border border-border bg-background/50 px-2 py-1 font-medium text-foreground"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                      
                      <div className="flex gap-2">
                        <Button variant="ghost" size="sm" className="h-8 gap-1 text-xs">
                          <Github className="h-3 w-3" />
                          Code
                        </Button>
                        <Button variant="ghost" size="sm" className="h-8 gap-1 text-xs text-neon-lime hover:text-neon-lime">
                          <ExternalLink className="h-3 w-3" />
                          Demo
                        </Button>
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          </section>

          {/* Contact Section */}
          <section id="contact" className="py-16 sm:py-20 lg:py-24">
            <div className="mb-16 sm:mb-20 animate-fade-in-up">
              <h2 className="mb-4 sm:mb-6 font-heading text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-gradient-metallic">
                Get In Touch
              </h2>
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
                  <h3 className="mb-4 sm:mb-6 font-heading text-2xl sm:text-3xl font-bold text-foreground">
                    Connect With Me
                  </h3>
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
                  <h3 className="mb-3 sm:mb-4 font-heading text-xl sm:text-2xl font-bold text-foreground">
                    Let's Collaborate
                  </h3>
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
          </section>
        </div>
      </div>
    </div>
  );
};

export default Index;
